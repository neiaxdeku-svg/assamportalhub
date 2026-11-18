const fs = require('fs');
let content = fs.readFileSync('src/data.ts', 'utf8');

const newSchemes = `  {
    id: 'fee-waiver-assam',
    category: 'Admission',
    keyword: 'pragyan bharati fee waiver assam samarth free ug admission',
    metaDescription: 'Complete waiver of tuition, admission, and magazine fees for BA, BSc, BCom, MA, MSc, MCom courses under Pragyan Bharati.',
    portalName: 'Assam State Higher Education Portal (Samarth)',
    department: 'Department of Higher Education',
    ctaLink: 'https://assamadmission.samarth.ac.in/',
    en: {
      title: 'Free UG College Admission (Pragyan Bharati Fee Waiver)',
      hookSentences: [
        'Looking to enroll in higher education but worried about the admission and tuition fees?',
        'The Pragyan Bharati Fee Waiver scheme provides a complete waiver of tuition and admission fees for eligible students from low-income families.'
      ],
      services: 'Free Admission, Fee Waiver',
      checklist: [
        'Applicable for BA, BSc, BCom, MA, MSc, MCom courses in state universities and colleges.',
        'Your total family income must be strictly under ₹4 Lakhs per annum.',
        'You must generate an income certificate specifically for this purpose via Sewa Setu.',
        'Apply directly through the Samarth Portal during your centralized admission process.'
      ],
      ctaText: '👉 APPLY ON SAMARTH PORTAL',
      faqs: [
        {
          question: 'Do I need to renew the fee waiver?',
          answer: 'Yes, passing exams without any backlogs and maintaining attendance is usually required for continuous fee waivers.'
        }
      ]
    },
    as: {
      title: 'বিনামূলীয়া মহাবিদ্যালয়ত নামভৰ্তি (প্ৰজ্ঞান ভাৰতী মাচুল ৰেহাই)',
      hookSentences: [
        'মহাবিদ্যালয়ৰ নামভৰ্তিৰ মাচুলক লৈ চিন্তিত নেকি?',
        'প্ৰজ্ঞান ভাৰতী আঁচনিয়ে যোগ্য ছাত্ৰ-ছাত্ৰীক স্নাতকোত্তৰ আৰু স্নাতক পৰ্যায়ত সম্পূৰ্ণ বিনামূলীয়াকৈ নামভৰ্তিৰ সুবিধা দিয়ে।'
      ],
      services: 'বিনামূলীয়া নামভৰ্তি, মাচুল ৰেহাই',
      checklist: [
        'ৰাজ্যিক বিশ্ববিদ্যালয় আৰু মহাবিদ্যালয়ৰ BA, BSc, BCom, MA, MSc, MCom পাঠ্যক্ৰমৰ বাবে প্ৰযোজ্য।',
        'পৰিয়ালৰ বাৰ্ষিক আয় ৪ লাখ টকাৰ তলত হ\\'ব লাগিব।',
        'সেৱা সেতুৰ পৰা আয়ৰ প্ৰমাণপত্ৰ উলিওৱাটো বাধ্যতামূলক।',
        'সমৰ্থ পৰ্টেলৰ যোগেদি নামভৰ্তিৰ সময়ত পোনপটীয়াকৈ আবেদন কৰক।'
      ],
      ctaText: '👉 সমৰ্থ পৰ্টেলত আবেদন কৰক',
      faqs: [
        {
          question: 'এই মাচুল ৰেহাই প্ৰতি বছৰে পাব নে?',
          answer: 'হয়, কিন্তু পৰীক্ষাত কোনো বেকলগ নথকাকৈ উত্তীৰ্ণ হ\\'লে আৰু উপযুক্ত উপস্থিতি থাকিলেহে পৰৱৰ্তী বৰ্ষত এই সুবিধা পাব।'
        }
      ]
    }
  },
  {
    id: 'employment-exchange-assam',
    category: 'Service',
    keyword: 'employment exchange registration assam e-bramhastra',
    metaDescription: 'Mandatory online digital employment registration required to apply for any state government job or skill development grant in Assam.',
    portalName: 'Employment Exchange (e-Bramhastra)',
    department: 'Skill, Employment & Entrepreneurship Dept',
    ctaLink: 'https://rtps.assam.gov.in/',
    en: {
      title: 'Employment Exchange Registration (e-Bramhastra)',
      hookSentences: [
        'Planning to apply for Assam government jobs or state entrepreneurship grants?',
        'Online digital employment exchange registration is now mandatory to prove your local residency and eligibility for state jobs.'
      ],
      services: 'Employment Registration, Certificate Issuance',
      checklist: [
        'The process is completely online. You do not need to physically visit the employment exchange office.',
        'Keep your Aadhaar, age proof, educational marksheets, and caste certificates ready.',
        'Visit the RTPS / Sewa Setu portal under the e-Bramhastra initiative.',
        'After Aadhaar e-KYC, your Employment Exchange Registration Card will be generated digitally.'
      ],
      ctaText: '👉 REGISTER FOR EMPLOYMENT CARD',
      faqs: [
        {
          question: 'Is it mandatory for ADRE exams?',
          answer: 'Yes, a valid Employment Exchange Registration Number is strictly required to apply for ADRE and Assam Police jobs.'
        }
      ]
    },
    as: {
      title: 'নিয়োগ বিনিময় কেন্দ্ৰৰ পঞ্জীয়ন (e-Bramhastra)',
      hookSentences: [
        'অসম চৰকাৰৰ চাকৰি বা উদ্যোগী আঁচনিৰ বাবে আবেদন কৰিব বিচাৰিছে নেকি?',
        'ৰাজ্য চৰকাৰৰ চাকৰিৰ আবেদনৰ বাবে ডিজিটেল এম্প্লয়মেণ্ট এক্সচেঞ্জ পঞ্জীয়ন এতিয়া বাধ্যতামূলক কৰা হৈছে।'
      ],
      services: 'নিয়োগ পঞ্জীয়ন, প্ৰমাণপত্ৰ',
      checklist: [
        'এই প্ৰক্ৰিয়া সম্পূৰ্ণ অনলাইন। কাৰ্যালয়লৈ যোৱাৰ কোনো প্ৰয়োজন নাই।',
        'আপোনাৰ আধাৰ, বয়সৰ প্ৰমাণপত্ৰ, শিক্ষাগত অৰ্হতাৰ নথিপত্ৰ আৰু জাতিৰ প্ৰমাণপত্ৰ সাজু ৰাখক।',
        'RTPS বা সেৱা সেতু পৰ্টেলত e-Bramhastra সেৱাৰ জৰিয়তে আবেদন কৰক।',
        'আধাৰ e-KYC কৰাৰ পিছত ডিজিটেল পঞ্জীয়ন কাৰ্ড লাভ কৰিব।'
      ],
      ctaText: '👉 এম্প্লয়মেণ্ট কাৰ্ডৰ বাবে পঞ্জীয়ন কৰক',
      faqs: [
        {
          question: 'ADRE পৰীক্ষাৰ বাবে এইখন বাধ্যতামূলক নেকি?',
          answer: 'হয়, ADRE আৰু অসম আৰক্ষীৰ চাকৰিৰ আবেদনৰ বাবে এটা বৈধ এম্প্লয়মেণ্ট এক্সচেঞ্জ পঞ্জীয়ন নম্বৰ থকাটো বাধ্যতামূলক।'
        }
      ]
    }
  },
  {
    id: 'ayushman-assam',
    category: 'Service',
    keyword: 'ayushman assam mukhya mantri jan arogya yojana cashless health card',
    metaDescription: 'Ayushman Asom provides cashless health insurance up to ₹5 Lakhs per family per year for secondary and tertiary medical care in empanelled hospitals.',
    portalName: 'Ayushman Assam Authority',
    department: 'Health & Family Welfare, Assam',
    ctaLink: 'https://ayushman.assam.gov.in/',
    en: {
      title: 'Ayushman Assam (Mukhya Mantri Jan Arogya Yojana)',
      hookSentences: [
        'Do you need highly subsidized medical insurance against massive hospital bills?',
        'Ayushman Assam provides cashless health insurance coverage up to ₹5 Lakhs per family per year at all empanelled public and private hospitals.'
      ],
      services: '₹5 Lakh Health Insurance, Cashless Surgery',
      checklist: [
        'This state variation extends the Ayushman Bharat PM-JAY benefits to the residents of Assam.',
        'Check your family’s eligibility on the portal using your Ration Card Number.',
        'Complete the e-KYC using Aadhaar card at a nearby CSC or government kiosk.',
        'Keep the generated physical or digital card ready for hospital admissions.'
      ],
      ctaText: '👉 CHECK AYUSHMAN ASSAM ELIGIBILITY',
      faqs: [
        {
          question: 'Are pre-existing diseases covered?',
          answer: 'Yes, almost all pre-existing illnesses are covered from day one of enrollment.'
        }
      ]
    },
    as: {
      title: 'আয়ুষ্মান অসম (মুখ্যমন্ত্ৰী জন আৰোগ্য যোজনা)',
      hookSentences: [
        'চিকিৎসালয়ৰ ব্যয়বহুল বিলৰ পৰা সকাহ পাবলৈ বিনামূলীয়া স্বাস্থ্য বীমাৰ প্ৰয়োজন নেকি?',
        'আয়ুষ্মান অসম আঁচনিয়ে অংশগ্ৰহণকাৰী চৰকাৰী আৰু ব্যক্তিগত চিকিৎসালয়সমূহত প্ৰতিটো পৰিয়ালক বছৰি ৫ লাখ টকালৈকে কেছলেছ স্বাস্থ্য বীমাৰ সুবিধা প্ৰদান কৰে।'
      ],
      services: '৫ লাখ টকাৰ স্বাস্থ্য বীমা, কেছলেছ চিকিৎসা',
      checklist: [
        'এই ৰাজ্যিক আঁচনিয়ে আয়ুষ্মান ভাৰত PM-JAY ৰ সুবিধাসমূহ অসমৰ আৱাসীসকললৈ সম্প্ৰসাৰিত কৰিছে।',
        'আপোনাৰ ৰেচন কাৰ্ডৰ নম্বৰ ব্যৱহাৰ কৰি পৰ্টেলত আপোনাৰ পৰিয়ালৰ যোগ্যতা পৰীক্ষা কৰক।',
        'ওচৰৰ CSC বা চৰকাৰী কেন্দ্ৰত আধাৰ কাৰ্ড ব্যৱহাৰ কৰি e-KYC সম্পূৰ্ণ কৰক।',
        'চিকিৎসালয়ত নামভৰ্তিৰ সময়ত কাৰ্ডখন প্ৰদৰ্শন কৰিব লাগিব।'
      ],
      ctaText: '👉 আয়ুষ্মান অসমৰ যোগ্যতা পৰীক্ষা কৰক',
      faqs: [
        {
          question: 'আগৰে পৰা থকা বেমাৰ ইয়াত অন্তৰ্ভুক্ত হয় নেকি?',
          answer: 'হয়, পঞ্জীয়ন কৰা দিনৰে পৰাই প্ৰায় সকলো আগতীয়া বেমাৰৰ চিকিৎসা এই আঁচনিৰ অধীনত কৰা হয়।'
        }
      ]
    }
  }`;

const closingBracketIndex = content.lastIndexOf('];');

if (closingBracketIndex !== -1) {
  content = content.substring(0, closingBracketIndex) + ',\\n' + newSchemes + '\\n];' + content.substring(closingBracketIndex + 2);
  fs.writeFileSync('src/data.ts', content);
  console.log('Appended additional new schemes successfully');
} else {
  console.error('Could not find closing bracket');
  process.exit(1);
}
