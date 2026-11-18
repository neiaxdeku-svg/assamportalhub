import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Privacy Policy | AssamPortalHub',
  description: 'Privacy Policy for AssamPortalHub.',
};

export default function PrivacyPolicy() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold text-slate-900 mb-6 font-display">Privacy Policy</h1>
      
      <div className="prose prose-green prose-md text-slate-600">
        <p><em>Last Updated: June 2026</em></p>
        <p>At AssamPortalHub.vercel.app, accessible from https://assamportalhub.vercel.app, one of our main priorities is the privacy of our visitors. This Privacy Policy document contains types of information that is collected and recorded by AssamPortalHub and how we use it.</p>
        <h3>Information We Collect</h3>
        <p>We do not collect any personal data (such as Aadhaar, PAN, Voter ID, or bank details). Our site is purely informational. The only data collected is basic web analytics to understand our site traffic and improve user experience.</p>
        <h3>Log Files</h3>
        <p>AssamPortalHub follows a standard procedure of using log files. These files log visitors when they visit websites. The information collected includes internet protocol (IP) addresses, browser type, Internet Service Provider (ISP), date and time stamp, referring/exit pages, and possibly the number of clicks. These are not linked to any information that is personally identifiable.</p>
        <h3>Cookies and Web Beacons</h3>
        <p>Like any other website, AssamPortalHub uses 'cookies'. These cookies are used to store information including visitors' preferences, and the pages on the website that the visitor accessed or visited. The information is used to optimize the users' experience by customizing our web page content based on visitors' browser type and/or other information.</p>
        <h3>Consent</h3>
        <p>By using our website, you hereby consent to our Privacy Policy and agree to its Terms and Conditions.</p>
      </div>
    </div>
  );
}
