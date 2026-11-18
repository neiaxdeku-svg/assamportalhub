const fs = require('fs');

let content = fs.readFileSync('src/data.ts', 'utf8');

const newSchemes = `  {
    id: 'adre-3-0-2026-notification',
    category: 'Job',
    keyword: 'adre 3.0 2026 notification assam direct recruitment apply online',
    metaDescription: 'Complete details on Assam Direct Recruitment (ADRE 3.0) 2026 notification. Find eligibility, exam dates, and direct apply link.',
    portalName: 'ADRE 3.0 Recruitment',
    department: 'State Level Recruitment Commission',
    ctaLink: 'https://sebaonline.org',
    en: {
      title: 'ADRE 3.0 2026 Notification Released: Apply Online Now',
      hookSentences: [
        'Waiting for the Assam Direct Recruitment (ADRE) 3.0 notification?',
        'The official notice for Group C and Group D vacancies has been released. Get direct links here.'
      ],
      services: 'Job Notification, Online Application',
      checklist: [
        'Check your eligibility criteria: Age limit, educational qualifications (8th pass, 10th pass, Degree).',
        'Keep your employment exchange registration number ready and active.',
        'Upload recent passport size photograph and signature as per prescribed dimensions.',
        'Apply online well before the deadline to avoid last-minute server issues.'
      ],
      ctaText: '👉 APPLY FOR ADRE 3.0',
      faqs: [
        {
          question: 'What is the last date to apply for ADRE 3.0?',
          answer: 'Please refer to the official notification as dates are subject to change, typically open for 30 days.'
        }
      ]
    },
    as: {
      title: 'ADRE 3.0 2026 জাননী প্ৰকাশ: এতিয়াই অনলাইন আবেদন কৰক',
      hookSentences: [
        'অসম চৰকাৰৰ ADRE 3.0 ৰ বাবে অপেক্ষা কৰি আছে নেকি?',
        'গ্ৰুপ C আৰু গ্ৰুপ D পদৰ বাবে আনুষ্ঠানিক জাননী প্ৰকাশ পাইছে। পোনপটীয়া লিংক ইয়াত পাব।'
      ],
      services: 'চাকৰিৰ জাননী, অনলাইন আবেদন',
      checklist: [
        'যোগ্যতা পৰীক্ষা কৰক: বয়সৰ সময়সীমা, শিক্ষাগত অৰ্হতা।',
        'এমপ্লয়মেণ্ট এক্সচেঞ্জৰ পঞ্জীয়ন নম্বৰ সক্ৰিয় ৰাখক।',
        'ফটো আৰু চহী সঠিক জোখত আপলোড কৰক।',
        'শেষ তাৰিখৰ আগতে আবেদন সম্পূৰ্ণ কৰক যাতে ছাৰ্ভাৰৰ সমস্যা নহয়।'
      ],
      ctaText: '👉 ADRE 3.0 ৰ বাবে আবেদন কৰক',
      faqs: [
        {
          question: 'আবেদনৰ শেষ তাৰিখ কেতিয়া?',
          answer: 'অনুগ্ৰহ কৰি অফিচিয়েল জাননী চাওক, সাধাৰণতে এসপ্তাহৰ পৰা এমাহ সময় দিয়া হয়।'
        }
      ]
    }
  },
  {
    id: 'assam-police-constable-2026',
    category: 'Job',
    keyword: 'assam police constable si recruitment 2026 apply online physical test',
    metaDescription: 'Assam Police Constable and SI recruitment 2026 details. Get direct links for SLPRB online application and physical test dates.',
    portalName: 'Assam Police SLPRB',
    department: 'State Level Police Recruitment Board',
    ctaLink: 'https://slprbassam.in/',
    en: {
      title: 'Assam Police Constable & SI Recruitment 2026',
      hookSentences: [
        'Aspiring to join the Assam Police as a Constable or Sub-Inspector in 2026?',
        'The SLPRB portal is accepting online applications. Find the direct portal link to register.'
      ],
      services: 'Police Recruitment, PST/PET',
      checklist: [
        'Register correctly on the SLPRB portal using your active mobile number.',
        'Fill your physical details correctly during the application (height, weight).',
        'Prepare for the Physical Standard Test (PST) and Physical Efficiency Test (PET).',
        'Download your admit card from the SLPRB portal directly once announced.'
      ],
      ctaText: '👉 GO TO SLPRB PORTAL',
      faqs: [
        {
          question: 'Can I apply for multiple posts on SLPRB?',
          answer: 'Yes, if you meet the eligibility criteria for multiple posts, you can usually apply through a single integrated profile.'
        }
      ]
    },
    as: {
      title: 'অসম আৰক্ষী কনিষ্টবল আৰু SI নিযুক্তি ২০২৬',
      hookSentences: [
        '২০২৬ চনত অসম আৰক্ষীত কনিষ্টবল বা উপ-পৰিদৰ্শক হিচাপে যোগদান কৰিব বিচাৰে নেকি?',
        'SLPRB পৰ্টেলত অনলাইন আবেদন গ্ৰহণ কৰি থকা হৈছে। পঞ্জীয়নৰ বাবে সঠিক লিংক তলত দিয়া হৈছে।'
      ],
      services: 'আৰক্ষী নিযুক্তি, PST/PET এডমিট কাৰ্ড',
      checklist: [
        'সক্ৰিয় মোবাইল নম্বৰ ব্যৱহাৰ কৰি SLPRB পৰ্টেলত পঞ্জীয়ন কৰক।',
        'আবেদনৰ সময়ত আপোনাৰ শাৰীৰিক মাপ (উচ্চতা, ওজন) সঠিকভাৱে দিয়ক।',
        'শাৰীৰিক পৰীক্ষাৰ (PST/PET) বাবে প্ৰস্তুতি চলাওক।',
        'এডমিট কাৰ্ড ঘোষণা কৰাৰ পিছত SLPRB পৰ্টেলৰ পৰা পোনপটীয়াকৈ ডাউনলোড কৰক।'
      ],
      ctaText: '👉 SLPRB পৰ্টেললৈ যাওক',
      faqs: [
        {
          question: 'মই একাধিক পদৰ বাবে আবেদন কৰিব পাৰিম নে?',
          answer: 'হয়, যদি আপুনি একাধিক পদৰ বাবে যোগ্য, তেন্তে এটা প্ৰফাইলৰ জৰিয়তে আবেদন কৰিব পাৰিব।'
        }
      ]
    }
  },
  {
    id: 'health-department-recruitment-assam',
    category: 'Job',
    keyword: 'dme dhs assam health department recruitment grade 3 grade 4 apply',
    metaDescription: 'Apply online for Assam Health Department Recruitment (DME/DHS) Grade 3 and Grade 4 posts.',
    portalName: 'Health Dept (DME/DHS)',
    department: 'Health & Family Welfare',
    ctaLink: 'https://dme.assam.gov.in/',
    en: {
      title: 'Assam Health Department (DME/DHS) Recruitment 2026',
      hookSentences: [
        'Looking for Medical or Non-Medical jobs in Assam Government hospitals and colleges?',
        'Grade III and Grade IV recruitment links for DME/DHS are active. Submit your application directly.'
      ],
      services: 'Grade 3 & 4 Jobs',
      checklist: [
        'Check the specific Directorate (DME, DHS, DHSFW, or AYUSH) you are applying for.',
        'Upload your qualifying mark sheets and caste certificate if applicable.',
        'Some posts might require specific technical diplomas (like nursing, lab tech). Verify before paying.',
        'Keep a printed copy of the submitted form for future reference during document verification.'
      ],
      ctaText: '👉 APPLY ON DME ASSAM PORTAL',
      faqs: [
        {
          question: 'Are DHS and DME exams held together?',
          answer: 'Usually, the health department conducts a combined written exam for non-technical Grade III and Grade IV posts across directorates.'
        }
      ]
    },
    as: {
      title: 'অসম স্বাস্থ্য বিভাগ (DME/DHS) নিযুক্তি ২০২৬',
      hookSentences: [
        'অসম চৰকাৰৰ স্বাস্থ্য বিভাগত গ্ৰুপ III আৰু গ্ৰুপ IV ৰ চাকৰি বিচাৰিছে নেকি?',
        'DME আৰু DHS ৰ নিয়োগৰ বাবে লিংক মুকলি কৰা হৈছে।'
      ],
      services: 'গ্ৰুপ III আৰু IV চাকৰি',
      checklist: [
        'আপুনি কোনটো সঞ্চালকালয় (DME, DHS, DHSFW, বা AYUSH) ৰ বাবে আবেদন কৰিছে সেইটো পৰীক্ষা কৰক।',
        'প্ৰয়োজনীয় মাৰ্কশ্বীট আৰু জাতিগত প্ৰমাণপত্ৰ আপলোড কৰক।',
        'কিছুমান পদৰ বাবে বিশেষ কাৰিকৰী ডিপ্লোমাৰ প্ৰয়োজন হ\\'ব পাৰে।',
        'ভৱিষ্যতৰ বাবে আবেদন ফৰ্মৰ এটা প্ৰিণ্ট আউট ৰাখক।'
      ],
      ctaText: '👉 DME অসম পৰ্টেলত আবেদন কৰক',
      faqs: [
        {
          question: 'DHS আৰু DME ৰ পৰীক্ষা একেলগে হয় নেকি?',
          answer: 'সাধাৰণতে স্বাস্থ্য বিভাগে একেলগে নন-টেকনিকেল গ্ৰুপ ৩ আৰু গ্ৰুপ ৪ পদৰ পৰীক্ষা অনুষ্ঠিত কৰে।'
        }
      ]
    }
  }`;

const closingBracketIndex = content.lastIndexOf('];');

if (closingBracketIndex !== -1) {
  content = content.substring(0, closingBracketIndex) + ',\\n' + newSchemes + '\\n];' + content.substring(closingBracketIndex + 2);
  fs.writeFileSync('src/data.ts', content);
  console.log('Appended Job schemes successfully');
} else {
  console.error('Could not find closing bracket');
  process.exit(1);
}
