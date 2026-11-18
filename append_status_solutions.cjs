const fs = require('fs');

let content = fs.readFileSync('src/data.ts', 'utf8');

const newSchemes = `  {
    id: 'basundhara-hearing-status',
    category: 'Status & Solutions',
    keyword: 'mission basundhara hearing status not updated circle office',
    metaDescription: 'Find out why your Mission Basundhara status is not updating after the Circle Office hearing and how to resolve the delay.',
    portalName: 'Mission Basundhara Troubleshooting',
    department: 'Revenue & Disaster Management',
    ctaLink: 'https://rtps.assam.gov.in/basundhara',
    en: {
      title: 'Mission Basundhara Hearing Done But Status Not Updated? What to Do Next',
      hookSentences: [
        'Have you attended the Circle Office hearing for Mission Basundhara but your online status still shows "Pending"?',
        'There is often an internal delay between the physical hearing and the digital portal reflecting the final decision.'
      ],
      services: 'Application Status, Status Delays',
      checklist: [
        'Understand that Circle Officers process hundreds of applications; digital updating can take 2-4 weeks after the physical hearing.',
        'Keep your ARN (Application Reference Number) handy and regularly check the official RTPS / Basundhara portal.',
        'If it has been over a month, you can file a grievance using the toll-free number provided on the RTPS website.',
        'Ensure you have submitted all additional documents requested during the hearing.'
      ],
      ctaText: '👉 CHECK RTPS STATUS OR FILE GRIEVANCE',
      faqs: [
        {
          question: 'How long does it take for the portal to update after a hearing?',
          answer: 'It usually takes 2-4 weeks, depending on the backlog at the local Circle Office.'
        }
      ]
    },
    as: {
      title: 'মিছন বসুন্ধৰা: শুনানি সম্পূৰ্ণ হোৱাৰ পিছতো অৱস্থা সলনি হোৱা নাই নেকি?',
      hookSentences: [
        'আপুনি চক্ৰ বিষয়াৰ কাৰ্যালয়ত শুনানি সম্পূৰ্ণ কৰিছে কিন্তু অনলাইনত এতিয়াও "Pending" দেখুৱাই আছে নেকি?',
        'শুনানি আৰু পৰ্টেলত অৱস্থা আপডেট হোৱাৰ মাজত সাধাৰণতে কিছু সময়ৰ ব্যৱধান থাকে।'
      ],
      services: 'আবেদনৰ অৱস্থা, বিলম্বৰ সমাধান',
      checklist: [
        'চক্ৰ বিষয়াসকলে বহুতো আৱেদন পৰীক্ষা কৰিবলগীয়া হোৱাৰ বাবে অনলাইন আপডেট হবলৈ প্ৰায় ২-৪ সপ্তাহ সময় লাগিব পাৰে।',
        'আপোনাৰ ARN নম্বৰ ব্যৱহাৰ কৰি RTPS পৰ্টেলত নিয়মীয়াকৈ অৱস্থা পৰীক্ষা কৰক।',
        'যদি এমাহতকৈ অধিক সময় পাৰ হৈছে, তেন্তে টোল-ফ্ৰী নম্বৰত যোগাযোগ কৰি অভিযোগ দাখিল কৰক।',
        'শুনানিৰ সময়ত বিচৰা সকলো প্ৰয়োজনীয় নথিপত্ৰ জমা দিয়াটো নিশ্চিত কৰক।'
      ],
      ctaText: '👉 অৱস্থা পৰীক্ষা কৰক',
      faqs: [
        {
          question: 'শুনানিৰ শেষত পৰ্টেল আপডেট হ\\'বলৈ কিমান সময় লাগে?',
          answer: 'স্থানীয় চক্ৰ কাৰ্যালয়ৰ কামৰ ওপৰত নিৰ্ভৰ কৰি সাধাৰণতে ২-৪ সপ্তাহ সময় লাগে।'
        }
      ]
    }
  },
  {
    id: 'basundhara-rejected-appeal',
    category: 'Status & Solutions',
    keyword: 'mission basundhara rejected appeal reapply',
    metaDescription: 'Step-by-step guide on how to appeal or reapply if your Mission Basundhara application gets rejected.',
    portalName: 'Mission Basundhara Troubleshooting',
    department: 'Revenue & Disaster Management',
    ctaLink: 'https://rtps.assam.gov.in/basundhara',
    en: {
      title: 'Mission Basundhara Application Rejected: How to Appeal or Reapply Step-by-Step',
      hookSentences: [
        'Was your Mission Basundhara application rejected due to missing documents or boundary disputes?',
        'Don\\'t worry. You can re-verify your documents and either reapply or file an appeal depending on the rejection reason.'
      ],
      services: 'Rejection Appeals, Reapplication',
      checklist: [
        'Log in to the RTPS portal and carefully read the specific "Remark" left by the Circle Officer regarding why your application was rejected.',
        'Common rejection reasons include missing legacy data, improper boundary demarcation, or active court disputes over the specific land plot.',
        'Gather the proper missing documentation (e.g., correct trace map, proper NOC from co-pattadars).',
        'If it was rejected mistakenly, seek guidance from the local Lot Mandal before initiating a fresh application.'
      ],
      ctaText: '👉 LOGIN TO REAPPLY',
      faqs: [
        {
          question: 'Can I reapply if my application was rejected?',
          answer: 'Yes, provided the Phase is still active, you can reapply after correcting the issues mentioned in the rejection remark.'
        }
      ]
    },
    as: {
      title: 'মিছন বসুন্ধৰা আবেদন নাকচ: কেনেকৈ পুনৰ আবেদন কৰিব?',
      hookSentences: [
        'নথিপত্ৰৰ অভাৱ বা সীমাৰ বিবাদৰ বাবে আপোনাৰ আবেদন নাকচ কৰা হৈছে নেকি?',
        'নাকচ হোৱাৰ কাৰণটো জানি লৈ নথিপত্ৰ শুদ্ধ কৰি আপুনি পুনৰ আবেদন কৰিব পাৰিব।'
      ],
      services: 'নাকচ আবেদন পুনৰ্বিচাৰ',
      checklist: [
        'RTPS পৰ্টেলত লগ ইন কৰি আপোনাৰ আৱেদন কিয় নাকচ কৰা হ\\'ল তাৰ কাৰণটো "Remark" শিতানত পঢ়ক।',
        'উত্তৰাধিকাৰীৰ প্ৰমাণ নথকা বা বিবাদ থকা মাটিৰ বাবে আবেদন সাধাৰণতে নাকচ হয়।',
        'প্ৰয়োজনীয় সঠিক নথিপত্ৰ (যেনে: সন্মতি পত্ৰ, সঠিক মানচিত্ৰ) সংগ্ৰহ কৰক।',
        'নতুনকৈ আবেদন কৰাৰ আগতে স্থানীয় লাট মণ্ডলৰ পৰামৰ্শ গ্ৰহণ কৰিব পাৰে।'
      ],
      ctaText: '👉 পুনৰ আবেদন কৰক',
      faqs: [
        {
          question: 'আবেদন নাকচ হ\\'লে পুনৰ আবেদন কৰিব পাৰিনে?',
          answer: 'হয়, সমস্যাসমূহ সমাধান কৰি আপুনি নতুনকৈ আবেদন কৰিব পাৰিব।'
        }
      ]
    }
  },
  {
    id: 'basundhara-approved-no-patta',
    category: 'Status & Solutions',
    keyword: 'mission basundhara approved no patta distribution timeline',
    metaDescription: 'Understanding the timeline between Mission Basundhara approval and physical Patta document distribution.',
    portalName: 'Mission Basundhara Troubleshooting',
    department: 'Revenue & Disaster Management',
    ctaLink: 'https://rtps.assam.gov.in/basundhara',
    en: {
      title: 'Mission Basundhara Approved But No Patta Yet? Understanding the Timeline',
      hookSentences: [
        'Does your portal status show "Approved" but you haven\\'t received your physical Patta?',
        'There is a standard processing gap between digital approval and the physical printing/distribution of land documents.'
      ],
      services: 'Patta Distribution, Physical Documents',
      checklist: [
        'Digital approval means your land rights have been formally verified and recorded in the state database.',
        'Physical Patta generation involves printing, signing by specific authorities, and organizing distribution camps.',
        'Wait for official announcements from your district administration regarding Patta distribution ceremonies.',
        'You can safely download the approved digital record (Chitha) from Dharitree in the meantime.'
      ],
      ctaText: '👉 CHECK DHARITREE RECORDS',
      faqs: [
        {
          question: 'How long does Patta distribution take after approval?',
          answer: 'It can range from a few weeks to several months depending on district-level distribution schedules.'
        }
      ]
    },
    as: {
      title: 'মিছন বসুন্ধৰাত অনুমোদন পালে কিন্তু পট্টা পোৱা নাই নেকি?',
      hookSentences: [
        'পৰ্টেলত "Approved" দেখুৱাইছে কিন্তু এতিয়াও আপুনি পট্টা লাভ কৰা নাই নেকি?',
        'অনুমোদন পোৱাৰ পিছত নথিপত্ৰ ছপা আৰু বিতৰণৰ বাবে কিছু সময়ৰ প্ৰয়োজন হয়।'
      ],
      services: 'পট্টা বিতৰণ',
      checklist: [
        'অনুমোদন মানে হ\\'ল চৰকাৰী তথ্যত আপোনাৰ নাম পঞ্জীয়ন হৈছে।',
        'পট্টা ছপা কৰি, স্বাক্ষৰ লৈ বিতৰণ শিবিৰ আয়োজন কৰিবলৈ সময় লাগে।',
        'জিলা প্ৰশাসনৰ পট্টা বিতৰণৰ জাননীলৈ অপেক্ষা কৰক।',
        'ততদিন ধৰিত্ৰী পৰ্টেলৰ পৰা আপোনাৰ মাটিৰ তথ্যৰ (চিঠা) কপি ডাউনলোড কৰি ৰাখিব পাৰে।'
      ],
      ctaText: '👉 ধৰিত্ৰী ৰেকৰ্ড চাওক',
      faqs: [
        {
          question: 'অনুমোদন পোৱাৰ কিমান দিনৰ পাছত পট্টা দিয়া হয়?',
          answer: 'দফায় দফায় বিতৰণ কৰা হয়, সেয়েহে ই কেইবা সপ্তাহৰ পৰা কেইবামাহ পৰ্যন্ত সময় লব পাৰে।'
        }
      ]
    }
  },
  {
    id: 'pm-kisan-payment-not-received',
    category: 'Status & Solutions',
    keyword: 'pm kisan pending status aadhaar ekyc assam',
    metaDescription: 'Resolve PM Kisan payment delays in Assam. Check your Aadhaar Seeding and E-KYC status online.',
    portalName: 'PM-Kisan Troubleshooting',
    department: 'Agriculture Department',
    ctaLink: 'https://pmkisan.gov.in/BeneficiaryStatus_New.aspx',
    en: {
      title: 'PM Kisan Payment Not Received in Assam? Check Aadhaar Seeding & E-KYC',
      hookSentences: [
        'Are your PM Kisan installments stuck or not crediting to your account?',
        'A massive percentage of missing payments are purely due to failed bank account Aadhaar-seeding or incomplete E-KYC.'
      ],
      services: 'Payment Missing, E-KYC Check',
      checklist: [
        'Open the PM Kisan portal and check your "Beneficiary Status" using your Registration Number.',
        'Look at three things: E-KYC Status, Eligibility Status, and Land Seeding Status—all must be "YES".',
        'If Aadhaar Bank Account Seeding is "NO", your money is stuck in the DBT system. You must visit your bank to link Aadhaar with NPCI mapping.',
        'Complete your E-KYC through the PM Kisan app via face authentication or at a local CSC.'
      ],
      ctaText: '👉 CHECK PM-KISAN BENEFICIARY STATUS',
      faqs: [
        {
          question: 'What is Aadhaar Seeding for PM Kisan?',
          answer: 'It means your bank account must be mapped on the NPCI portal to receive Direct Benefit Transfers (DBT).'
        }
      ]
    },
    as: {
      title: 'PM কিষাণৰ ধন পোৱা নাই নেকি? আধাৰ চিডিং পৰীক্ষা কৰক',
      hookSentences: [
        'আপোনাৰ PM কিষাণৰ কিস্তি বেংক একাউণ্টত সোমোৱা নাই নেকি?',
        'প্ৰায়ভাগ কিস্তি আধাৰ লিংক বা ই-কেৱাইচি (E-KYC) অসম্পূৰ্ণ থকাৰ বাবে আৱদ্ধ হৈ থাকে।'
      ],
      services: 'কিস্তিৰ সমস্যা, E-KYC',
      checklist: [
        'PM কিষাণ পৰ্টেলত আপোনাৰ পঞ্জীয়ন নম্বৰ দি "Beneficiary Status" পৰীক্ষা কৰক।',
        'E-KYC, Eligibility আৰু Land Seeding স্টাটাছ "YES" হৈ থকাটো জৰুৰী।',
        'যদি আধাৰ বেংক একাউণ্ট চিডিং "NO" হৈ আছে, তেন্তে বেংকলৈ গৈ NPCI মেপিঙৰ সৈতে আধাৰ লিংক কৰক।',
        'CSC যোগে বা PM কিষাণ এপৰ সহায়ত E-KYC অতি সোনকালেই সম্পূৰ্ণ কৰক।'
      ],
      ctaText: '👉 PM কিষাণৰ অৱস্থা পৰীক্ষা কৰক',
      faqs: [
        {
          question: 'আধাৰ চিডিং কি?',
          answer: 'DBT ৰ যোগেদি ধন পাবলৈ আপোনাৰ বেংক একাউণ্ট NPCI পৰ্টেলত লিংক থকাটোকেই চিডিং বোলে।'
        }
      ]
    }
  },
  {
    id: 'jibon-prerana-payment-pending',
    category: 'Status & Solutions',
    keyword: 'jibon prerana payment not credited dids portal status',
    metaDescription: 'How to check your Jibon Prerana DIDS Portal approval status if payment is pending or not credited.',
    portalName: 'Jibon Prerana Troubleshooting',
    department: 'Assam Financial Corporation',
    ctaLink: 'https://dids.assam.gov.in/',
    en: {
      title: 'Jibon Prerana Payment Not Credited? Check DIDS Portal Status',
      hookSentences: [
        'Has your application for the Jibon Prerana scheme been approved but the money hasn\\'t hit your account?',
        'Learn how to navigate the DIDS portal to check your approval sequence and identify bank account error codes.'
      ],
      services: 'Payment Verification, DIDS Status',
      checklist: [
        'Payments under Jibon Prerana are disbursed in large batches. Wait for standard DBT clearance delays.',
        'Log into the DIDS portal to check your exact status flag. Does it say "Approved", "Payment Initiated", or "Failed"?',
        'If the status says "Failed", check if your bank account has a limit on maximum deposits or if the account is frozen.',
        'Directly contact the Assam Financial Corporation helpline if the error indicates a DBT rejection.'
      ],
      ctaText: '👉 CHECK DIDS PORTAL STATUS',
      faqs: [
        {
          question: 'Why did my DBT payment fail?',
          answer: 'Usually due to inactive accounts, wrong IFSC codes submitted, or KYC limitations on your savings account.'
        }
      ]
    },
    as: {
      title: 'জীৱন প্ৰেৰণাৰ ধন সোমোৱা নাই নেকি? DIDS পৰ্টেলত অৱস্থা চাওক',
      hookSentences: [
        'আপোনাৰ আবেদন গ্ৰহণ হৈছে কিন্তু ধন একাউণ্টত সোমোৱা নাই নেকি?',
        'বেংকৰ সমস্যা জানিবলৈ DIDS পৰ্টেলত অৱস্থা পৰীক্ষা কৰক।'
      ],
      services: 'পেমেন্ট স্টাটাছ, DIDS পৰ্টেল',
      checklist: [
        'এই আঁচনিৰ ধন একেলগে বহু হিতাধিকাৰীক দিয়া হয়, সেয়ে কেতিয়াবা কিছু পলম হ\\'ব পাৰে।',
        'DIDS পৰ্টেলত লগ ইন কৰি "Approved", "Payment Initiated", নে "Failed" আছে পৰীক্ষা কৰক।',
        '"Failed" দেখুৱালে বেংক একাউণ্টত কিবা লিমিট বা ফ্ৰীজ হৈ থকা সমস্যা আছে নেকি বেংকত সুধক।',
        'DBT নাকচ হ\\'লে লগে লগে অফিচ হেল্পলাইনত যোগাযোগ কৰক।'
      ],
      ctaText: '👉 DIDS পৰ্টেল চাওক',
      faqs: [
        {
          question: 'মোৰ DBT পেমেন্ট কিয় ব্যৰ্থ হ\\'ল?',
          answer: 'সাধাৰণতে নিষ্ক্ৰিয় একাউণ্ট, ভুল IFSC কোড বা বেংকৰ KYC সমস্যাৰ বাবে এনে হয়।'
        }
      ]
    }
  },
  {
    id: 'orunodoi-status-hold-rejected',
    category: 'Status & Solutions',
    keyword: 'orunodoi status hold rejected verify reactivate',
    metaDescription: 'What to do if your Orunodoi scheme status shows "Hold" or "Rejected" and how to reactivate it.',
    portalName: 'Orunodoi Troubleshooting',
    department: 'Finance Department, Assam',
    ctaLink: 'https://orunodoi.assam.gov.in/',
    en: {
      title: 'Orunodoi Status "Hold" or "Rejected"? Common Reasons & Fixes',
      hookSentences: [
        'Did your monthly Orunodoi payment suddenly stop arriving?',
        'Ongoing verification exercises often place accounts on "Hold" or mark them "Rejected" due to changing eligibility or missing KYC.'
      ],
      services: 'Reactivation, Status Hold, Beneficiary Tracking',
      checklist: [
        'Visit the Orunodoi portal and enter your application number to check your explicit beneficiary status.',
        'If on "Hold", it may be due to pending physical re-verification by local Gaon Panchayat/VCDC members.',
        'If "Rejected", check the reason. You are disqualified if a family member recently secured a government job, bought a 4-wheeler, or failed the income criteria.',
        'To reactivate a wrongly held account, present your valid documents to your local Block Development Office (BDO).'
      ],
      ctaText: '👉 CHECK ORUNODOI BENEFICIARY STATUS',
      faqs: [
        {
          question: 'Can I reactivate an Orunodoi account?',
          answer: 'Yes, if placed on hold mistakenly, submitting updated KYC or physical verification via the block office can restore active status.'
        }
      ]
    },
    as: {
      title: 'অৰুণোদয়ৰ ধন পোৱা নাই নেকি? "Hold" বা "Rejected" ৰ কাৰণ',
      hookSentences: [
        'আপোনাৰ মাহেকীয়া অৰুণোদয়ৰ ধন হঠাতে বন্ধ হৈছে নেকি?',
        'নতুন নিয়ম বা প্ৰমাণীকৰণৰ বাবে বহুতো একাউণ্ট "Hold" বা "Rejected" কৰা হৈছে।'
      ],
      services: 'একাউণ্ট সক্ৰিয় কৰা, পেমেন্ট সমস্যা',
      checklist: [
        'অৰুণোদয় পৰ্টেলত গৈ আবেদন নম্বৰ দি আপোনাৰ স্টাটাছ পৰীক্ষা কৰক।',
        '"Hold" থাকিলে ইয়াৰ অৰ্থ হ\\'ল যে আপোনাৰ পঞ্চায়তৰ তৰফৰ পৰা পুনৰ প্ৰমাণীকৰণ বাকী আছে।',
        '"Rejected" হ\\'লে কাৰণ চাওক (যেনে পৰিয়ালৰ কোনোবাই চৰকাৰী চাকৰি পোৱা বা ৪ চকীয়া বাহন কিনা)।',
        'ভুলতে "Hold" হ\\'লে স্থানীয় খণ্ড উন্নয়ন কাৰ্যালয়ত (BDO) নথিপত্ৰ জমা দি সমস্যা সমাধান কৰক।'
      ],
      ctaText: '👉 অৰুণোদয় স্টাটাছ চাওক',
      faqs: [
        {
          question: 'বন্ধ হোৱা অৰুণোদয় একাউণ্ট পুনৰ সক্ৰিয় কৰিব পাৰিনে?',
          answer: 'হয়, যদি আপুনি যোগ্য তেন্তে নথিপত্ৰ পুনৰ জমা দি ইয়াক সক্ৰিয় কৰিব পাৰিব।'
        }
      ]
    }
  },
  {
    id: 'samarth-portal-login-error',
    category: 'Status & Solutions',
    keyword: 'samarth assam login error otp fix submission',
    metaDescription: 'Fix Samarth Portal login errors, missing OTPs, and form submission failures during Assam college admissions.',
    portalName: 'Samarth Portal Troubleshooting',
    department: 'Higher Education Department',
    ctaLink: 'https://assamadmission.samarth.ac.in/',
    en: {
      title: 'Samarth Portal Assam Login Error: OTP Not Received or Form Failed',
      hookSentences: [
        'Struggling to log in to the Samarth admission portal or getting stuck during form submission?',
        'During peak admission season, heavy traffic causes server timeouts, missing OTPs, and document upload failures.'
      ],
      services: 'Login Errors, Form Troubleshooting',
      checklist: [
        'OTP Delay: Use the portal during off-peak hours (late at night or early morning) if OTP SMSs are delayed.',
        'Browser Issues: Clear your browser cache or try logging in using "Incognito Mode" to bypass stale cookies.',
        'Upload Failures: Ensure your photo and signature are strictly under the mentioned KB limits (use an online image compressor).',
        'Payment Failures: If money is deducted but the portal shows "Pending", do NOT pay again immediately. Wait 24 hours for the payment gateway to naturally sync.'
      ],
      ctaText: '👉 GO TO SAMARTH PORTAL',
      faqs: [
        {
          question: 'What if my Samarth login OTP never arrives?',
          answer: 'Ensure your phone has active SMS validity. If it persists, wait for an hour and try requesting it during off-peak times.'
        }
      ]
    },
    as: {
      title: 'সমৰ্থ পৰ্টেল লগিন সমস্যা: OTP অহা নাইনে বা ফৰ্ম জমা হোৱা নাই?',
      hookSentences: [
        'নামভৰ্তিৰ বাবে সমৰ্থ পৰ্টেলত ফৰ্ম পূৰণ কৰোঁতে সমস্যাৰ সন্মুখীন হৈছে নেকি?',
        'ছাৰ্ভাৰ ডাউন বা বেছি ভিৰৰ বাবে OTP নহা বা ফৰ্ম জমা নোহোৱা সমস্যা প্ৰায়েই হয়।'
      ],
      services: 'লগিনৰ সমস্যা, নথিপত্ৰ আপলোড',
      checklist: [
        'OTP পলম: চাৰ্ভাৰৰ ভিৰ কম থকা সময়ত (যেনে ৰাতিপুৱা সোনকালে বা নিশা) চেষ্টা কৰক।',
        'ব্ৰাউজাৰ সমস্যা: ব্ৰাউজাৰৰ Cache ক্লিয়াৰ কৰক বা "Incognito Mode" ব্যৱহাৰ কৰি লগ ইন কৰক।',
        'ফটো আপলোড: ফটো আৰু চহী নিৰ্দিষ্ট ছাইজৰ (KB) ভিতৰত থকাটো নিশ্চিত কৰক।',
        'মাচুল পৰিশোধ: পইচা কটা যোৱাৰ পিছতো ফৰ্মখন অসম্পূৰ্ণ দেখুৱালে পুনৰ পেমেন্ট নিদিব; ২৪ ঘণ্টা অপেক্ষা কৰক।'
      ],
      ctaText: '👉 সমৰ্থ পৰ্টেললৈ যাওক',
      faqs: [
        {
          question: 'OTP নোকোৱাকৈয়ে ফৰ্ম পূৰণ কৰিব পাৰিনে?',
          answer: 'নোৱাৰি, পৰিচয় নিশ্চিত কৰিবলৈ OTP প্ৰয়োজনীয়। ভিৰ কম থকা সময়ত চেষ্টা কৰক।'
        }
      ]
    }
  },
  {
    id: 'apdcl-smart-meter-balance-deducted',
    category: 'Status & Solutions',
    keyword: 'apdcl smart meter payment deducted balance not showing',
    metaDescription: 'Step-by-step resolution for when your APDCL smart meter bill is deducted but the balance is not updating.',
    portalName: 'APDCL Troubleshooting',
    department: 'Assam Power Distribution Company Ltd',
    ctaLink: 'https://www.apdcl.org/',
    en: {
      title: 'APDCL Smart Meter Bill Deducted But Balance Not Showing?',
      hookSentences: [
        'Did you recharge your APDCL smart meter but the meter is still in negative balance or off?',
        'There is often a lag between the payment gateway (like GPay/PhonePe) cutting the money and the APDCL server refreshing the meter.'
      ],
      services: 'Recharge Delays, Smart Meter Sync',
      checklist: [
        'Do NOT panic and do not recharge again immediately. Give the system up to 4 hours to sync.',
        'Check your specific APDCL App or Web Portal using your Consumer Number to see the "Last Receipt".',
        'Sometimes the meter physically loses network connectivity. You may need to press the clear/refresh button directly on the physical meter box.',
        'If power doesn\\'t resume after 12 hours, call the APDCL helpline 1912 and provide your payment transaction reference.'
      ],
      ctaText: '👉 VERIFY RECHARGE ON APDCL',
      faqs: [
        {
          question: 'Why did my meter not update automatically?',
          answer: 'Network issues with the smart meter SIM card or backend server delays during peak hours are the most common reasons.'
        }
      ]
    },
    as: {
      title: 'APDCL স্মাৰ্ট মিটাৰত ৰিচাৰ্জ কৰাৰ পাছতো ধন জমা হোৱা নাই নেকি?',
      hookSentences: [
        'আপুনি স্মাৰ্ট মিটাৰ ৰিচাৰ্জ কৰিলে কিন্তু মিটাৰটো এতিয়াও ঋণাত্মক (negative) ব্যেলেন্সত চলি আছে নেকি?',
        'পেমেন্ট গেইটৱেৰ পৰা মিটাৰত পইচা যোগ হ\\'বলৈ কেতিয়াবা অলপ সময় লাগে।'
      ],
      services: 'ৰিচাৰ্জৰ সমস্যা, স্মাৰ্ট মিটাৰ',
      checklist: [
        'লগে লগেই আকৌ ৰিচাৰ্জ নকৰিব। চিষ্টেম আপডেট হ\\'বলৈ ১-৪ ঘণ্টা অপেক্ষা কৰক।',
        'আপোনাৰ Consumer Number ব্যৱহাৰ কৰি APDCL এপ বা পৰ্টেলত পেমেন্ট জমা হ\\'ল নে নাই পোনপটীয়াকৈ পৰীক্ষা কৰক।',
        'কেতিয়াবা মিটাৰৰ নেটৱৰ্ক গুচি যায়। আপুনি মিটাৰৰ বক্সত থকা বুটামটো টিপি ৰিফ্ৰেছ কৰিব পাৰে।',
        '১২ ঘণ্টা পাৰ হোৱাৰ পিছতো কাৰেণ্ট নাহিল তেন্তে 1912 নম্বৰত কল কৰক আৰু পেমেন্ট ৰিচিপ্টৰ নম্বৰ কওক।'
      ],
      ctaText: '👉 APDCL পৰ্টেলত পৰীক্ষা কৰক',
      faqs: [
        {
          question: 'ৰিচাৰ্জৰ মেছেজ আহিছে কিন্তু কাৰেণ্ট কিয় অহা নাই?',
          answer: 'মিটাৰ বক্সত নেটৱৰ্ক থিকমতে নাথাকিলে চিষ্টেমৰ পৰা নিৰ্দেশ পালতে পলম হয়।'
        }
      ]
    }
  },
  {
    id: 'parivahan-assam-payment-failed',
    category: 'Status & Solutions',
    keyword: 'parivahan assam payment deducted refund verify status',
    metaDescription: 'How to verify status and get a refund if your Parivahan Assam Driving License or RC payment failed but money was debited.',
    portalName: 'Parivahan Troubleshooting',
    department: 'Transport Department',
    ctaLink: 'https://parivahan.gov.in/parivahan//en/content/check-payment-status',
    en: {
      title: 'Parivahan Assam: Payment Failed But Money Debited? Fix It Here',
      hookSentences: [
        'Trying to renew your Driving License or RC online but the website crashed during payment?',
        'Do not double-pay. Use the hidden verification tools inside the Parivahan portal to clear pending transactions.'
      ],
      services: 'Payment Verification, Refund Process',
      checklist: [
        'Go directly to the "Check Transaction Status" or "Verify Payment" section of the Vahan / Sarathi portal.',
        'Enter your application number or vehicle number. The system will forcefully ping the bank to fetch the final status.',
        'If it verifies as successful, your receipt will generate instantly. If it failed, the transaction will be cancelled, and your money will be auto-refunded within 3-5 working days.',
        'Only attempt a new payment if the verification tool explicitly confirms the previous transaction has "Failed".'
      ],
      ctaText: '👉 VERIFY PARIVAHAN PAYMENT',
      faqs: [
        {
          question: 'How long does a Parivahan refund take?',
          answer: 'Standard auto-refunds for failed gateway transactions usually reflect in your bank account within 3-5 working days.'
        }
      ]
    },
    as: {
      title: 'পৰিবহন অসম: পইচা কটা গৈছে কিন্তু ৰিচিপ্ট পোৱা নাই নেকি?',
      hookSentences: [
        'ড্ৰাইভিং লাইচেন্স বা আৰ.চি (RC) ৰ পেমেন্ট কৰোঁতে ৱেবছাইটটো বেয়া হৈছিল নেকি?',
        'লগে লগে আকৌ পইচা নিদিব। পৰিবহন ৱেবছাইটৰ পেমেন্ট পৰীক্ষা কৰা সুবিধা ব্যৱহাৰ কৰক।'
      ],
      services: 'পেমেন্ট চেক, ধন ঘূৰাই পোৱা (Refund)',
      checklist: [
        'বাহন বা সাৰথি পৰ্টেলত থকা "Check Transaction Status" বা "Verify Payment" অপচনলৈ গৈ পৰীক্ষা কৰক।',
        'আপোনাৰ এপ্লিকেচন বা গাড়ীৰ নম্বৰ দিয়ক। চিষ্টেমে পোনপটীয়াকৈ বেংকৰ পৰা পেমেন্টৰ তথ্য বিচাৰিব।',
        'যদি পেমেন্ট সফল হৈছিল, তেন্তে লগে লগে ৰিচিপ্ট ওলাব। যদি বিফল হয়, তেন্তে ৩-৫ দিনৰ ভিতৰত বেংক একাউণ্টলৈ পইচা ঘূৰি আহিব।',
        'কেৱল মাত্ৰ চিষ্টেমে "Failed" বুলি নিশ্চিত কৰিলেহে আকৌ এবাৰ পেমেন্ট কৰিবলৈ চেষ্টা কৰিব।'
      ],
      ctaText: '👉 পৰিবহনৰ পেমেন্ট পৰীক্ষা কৰক',
      faqs: [
        {
          question: 'কটা যোৱা পইচা কেতিয়ালৈ ঘূৰি আহে?',
          answer: 'বিফল পেমেন্টৰ ধন সাধাৰণতে ৩-৫ দিনৰ ভিতৰত আপোনাৰ একাউণ্টলৈ স্বয়ংক্ৰিয়ভাৱে ঘূৰি আহে।'
        }
      ]
    }
  }`;

const closingBracketIndex = content.lastIndexOf('];');

if (closingBracketIndex !== -1) {
  content = content.substring(0, closingBracketIndex) + ',\\n' + newSchemes + '\\n];' + content.substring(closingBracketIndex + 2);
  fs.writeFileSync('src/data.ts', content);
  console.log('Appended Status & Solutions schemes successfully');
} else {
  console.error('Could not find closing bracket');
  process.exit(1);
}
