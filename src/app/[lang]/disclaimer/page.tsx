import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Disclaimer | AssamPortalHub',
  description: 'Disclaimer for AssamPortalHub.',
};

export default function Disclaimer() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold text-slate-900 mb-6 font-display">Disclaimer</h1>
      
      <div className="prose prose-green prose-md text-slate-600">
        <p><strong>1. Informational Purpose Only</strong></p>
        <p>The information contained on AssamPortalHub.in is for general information purposes only. AssamPortalHub assumes no responsibility for errors or omissions in the contents of the Service.</p>
        
        <p><strong>2. No Affiliation with Government</strong></p>
        <p>AssamPortalHub.in is an independent, privately-owned website. We are <strong>not affiliated, endorsed, associated, or officially connected with the Government of Assam</strong>, the Government of India, or any of their agencies, departments, or subsidiaries. All official portal names, logos, and links remain the property of their respective owners.</p>
        
        <p><strong>3. External Links Disclaimer</strong></p>
        <p>AssamPortalHub.in may contain links to external websites (official government portals) that are not provided or maintained by or in any way affiliated with AssamPortalHub. Please note that AssamPortalHub does not guarantee the accuracy, relevance, timeliness, or completeness of any information on these external websites.</p>
        
        <p><strong>4. No Liability</strong></p>
        <p>In no event shall AssamPortalHub be liable for any special, direct, indirect, consequential, or incidental damages or any damages whatsoever, whether in an action of contract, negligence or other tort, arising out of or in connection with the use of the Service or the contents of the Service. We are not responsible for any failed transactions, delayed admissions, or any issues arising directly on the third-party government portals.</p>
      </div>
    </div>
  );
}
