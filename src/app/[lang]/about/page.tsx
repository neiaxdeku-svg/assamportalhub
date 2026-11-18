import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About Us | AssamPortalHub',
  description: 'Learn more about AssamPortalHub, a directory for quick access to Assam Govt portals and services.',
  alternates: {
    canonical: '/about',
  },
  twitter: {
    card: 'summary',
    title: 'About Us | AssamPortalHub',
    description: 'Learn more about AssamPortalHub, a directory for quick access to Assam Govt portals and services.',
  }
};

export default function About() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold text-slate-900 mb-6 font-display">About AssamPortalHub</h1>
      
      <div className="prose prose-green prose-lg text-slate-600">
        <p>
          Welcome to AssamPortalHub.in, your one-stop utility directory designed to save time for the citizens of Assam.
        </p>
        <p>
          Our mission is to provide clean, fast-loading, and mobile-first guides that connect you directly to the official government portals you need. Whether it's paying your APDCL electricity bill, applying for college admission via the Samarth portal, or checking your land records on Dharitree, we simplify the process with clear, step-by-step checklists and direct links.
        </p>
        <p>
          We understand that navigating complex governmental websites can be overwhelming. That is why we strip away the fluff, giving you exact instructions and the <strong>"Golden Link"</strong> to accomplish your task securely and efficiently.
        </p>
        <p className="font-semibold text-slate-800 mt-8">
          Important Note:
        </p>
        <p className="text-sm">
          AssamPortalHub.in is an independent, privately run informational website. We are <strong>not affiliated, associated, authorized, endorsed by, or in any way officially connected</strong> with the Government of Assam or any of its departments or agencies. All official portal links point back directly to the respective government domains.
        </p>
      </div>
    </div>
  );
}
