import { initializeApp, getApps, cert, getApp } from 'firebase-admin/app';
import { getFirestore } from 'firebase-admin/firestore';
import fs from 'fs';
import path from 'path';

export function getAdminDb() {
  let dbId: string | undefined;

  const serviceAccountEnv = process.env.FIREBASE_SERVICE_ACCOUNT || process.env.FIREBASE_ACCOUNT;

  console.log("Firebase Env Keys Available:");
  console.log("FIREBASE_ACCOUNT exists:", !!process.env.FIREBASE_ACCOUNT);
  console.log("FIREBASE_SERVICE_ACCOUNT exists:", !!process.env.FIREBASE_SERVICE_ACCOUNT);

  if (!getApps().length) {
    if (serviceAccountEnv) {
        // If they provided the complete JSON as a string (Vercel production model)
        try {
          const serviceAccount = typeof serviceAccountEnv === 'string' ? JSON.parse(serviceAccountEnv) : serviceAccountEnv;
          if (serviceAccount.private_key) {
             // Replace escaped newlines with actual newlines, common in Vercel env vars
             serviceAccount.private_key = serviceAccount.private_key.replace(/\\n/g, '\n');
          }
          console.log("Initializing Firebase with service account for project:", serviceAccount.project_id);
          initializeApp({
              credential: cert(serviceAccount)
          });
        } catch (error: any) {
          console.error("Failed to parse FIREBASE_SERVICE_ACCOUNT JSON or initialize credentials. Check Vercel environment variables formatting.");
          console.error(error.message);
          throw new Error(`Firebase Admin Init Error: ${error.message}`);
        }
        dbId = process.env.FIREBASE_DATABASE_ID; 
    } else if (process.env.FIREBASE_PROJECT_ID || process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID) {
        console.log("Initializing Firebase with just project ID (Default credentials):", process.env.FIREBASE_PROJECT_ID || process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID);
        initializeApp({
            projectId: process.env.FIREBASE_PROJECT_ID || process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
        });
        dbId = process.env.FIREBASE_DATABASE_ID;
    } else {
        // AI Studio local development mode
        let localProjectId: string | undefined;
        try {
          const configPath = path.join(process.cwd(), 'firebase-applet-config.json');
          if (fs.existsSync(configPath)) {
            const config = JSON.parse(fs.readFileSync(configPath, 'utf8'));
            localProjectId = config.projectId;
            if (config.firestoreDatabaseId) {
              dbId = config.firestoreDatabaseId;
            }
          }
        } catch (e) {
          console.warn("Could not read firebase-applet-config.json for database fallback.");
        }

        console.log("Initializing Firebase with no credentials (fallback). Project ID:", localProjectId);
        try {
          initializeApp(localProjectId ? { projectId: localProjectId } : undefined);
        } catch (e) {
          console.error("Failed to initialize Firebase app without credentials. Ensure FIREBASE_SERVICE_ACCOUNT is set in your environment.");
          throw e; // Rethrow to show proper error
        }
    }
  } else {
      // App already initialized, let's grab dbId if we are in local dev format
      dbId = process.env.FIREBASE_DATABASE_ID;
      if (!dbId) {
          try {
              const configPath = path.join(process.cwd(), 'firebase-applet-config.json');
              const config = JSON.parse(fs.readFileSync(configPath, 'utf8'));
              dbId = config.firestoreDatabaseId;
          } catch(e) {}
      }
  }

  try {
     if (dbId && dbId !== '(default)') {
         console.log("Using secondary database:", dbId);
         return getFirestore(getApp(), dbId);
     }
  } catch(e) {
      console.warn("Could not load secondary database, falling back to default.", e);
  }
  
  return getFirestore();
}
