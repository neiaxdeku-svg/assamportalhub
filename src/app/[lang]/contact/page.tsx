import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact Us | AssamPortalHub',
  description: 'Get in touch with AssamPortalHub for any queries or suggestions regarding our utility directory.',
  alternates: {
    canonical: '/contact',
  },
  twitter: {
    card: 'summary',
    title: 'Contact Us | AssamPortalHub',
    description: 'Get in touch with AssamPortalHub for any queries or suggestions regarding our utility directory.',
  }
};

export default function Contact() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold text-slate-900 mb-6 font-display">Contact Us</h1>
      
      <div className="prose prose-green prose-lg text-slate-600">
        <p>
          We value your feedback and are always looking to improve AssamPortalHub.vercel.app. If you find a broken link, wish to suggest a new utility portal, or have general inquiries, please reach out to us.
        </p>
        
        <div className="bg-slate-50 p-6 rounded-xl border border-slate-100 my-8">
          <h3 className="text-lg font-bold text-slate-900 mb-2">Email Us</h3>
          <p className="text-slate-600 m-0 font-medium">contact@assamportalhub.vercel.app</p>
        </div>

        <p className="text-sm bg-blue-50 text-blue-800 p-4 rounded-lg font-medium">
          <strong>Note:</strong> We are unable to provide technical support, account recovery, or customer service for the actual government portals (e.g., APDCL, Samarth, Sewa Setu). For issues with applications or payments, please contact the respective departmental helplines directly using the numbers provided in our guides.
        </p>
      </div>
    </div>
  );
}
