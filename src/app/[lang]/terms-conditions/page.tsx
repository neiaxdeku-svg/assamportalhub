import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Terms & Conditions | AssamPortalHub',
  description: 'Terms and Conditions for AssamPortalHub.',
};

export default function TermsConditions() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold text-slate-900 mb-6 font-display">Terms and Conditions</h1>
      
      <div className="prose prose-green prose-md text-slate-600">
        <p>Welcome to AssamPortalHub!</p>
        <p>These terms and conditions outline the rules and regulations for the use of AssamPortalHub's Website, located at https://assamportalhub.vercel.app.</p>
        <p>By accessing this website we assume you accept these terms and conditions. Do not continue to use AssamPortalHub if you do not agree to take all of the terms and conditions stated on this page.</p>
        <h3>License</h3>
        <p>Unless otherwise stated, AssamPortalHub and/or its licensors own the intellectual property rights for all material on AssamPortalHub. All intellectual property rights are reserved. You may access this from AssamPortalHub for your own personal use subjected to restrictions set in these terms and conditions.</p>
        <h3>Accuracy of Information</h3>
        <p>We do our best to keep guide steps and links updated. However, government portal layouts and URLs change frequently. We do not warrant its completeness or accuracy; nor do we promise to ensure that the website remains available or that the material on the website is kept up to date.</p>
      </div>
    </div>
  );
}
