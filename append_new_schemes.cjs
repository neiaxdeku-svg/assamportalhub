const fs = require('fs');

let content = fs.readFileSync('src/data.ts', 'utf8');

// We need to inject these objects before the closing "];" at the very end of the file.

const newSchemes = `  {
    id: 'mmua',
    category: 'Scheme',
    keyword: 'mmua asrlm mahila udyamita abhiyaan assam shg',
    metaDescription: 'Mukhya Mantri Mahila Udyamita Abhiyaan grants ₹10,000 seed capital to rural women of SHGs to start micro-enterprises in Assam.',
    portalName: 'Mukhya Mantri Mahila Udyamita Abhiyaan',
    department: 'Assam State Rural Livelihoods Mission (ASRLM)',
    ctaLink: 'https://asrlms.assam.gov.in/',
    en: {
      title: 'MMUA: Mukhya Mantri Mahila Udyamita Abhiyaan',
      hookSentences: [
        'Are you a rural woman in Assam belonging to a Self-Help Group (SHG)?',
        'The MMUA scheme grants ₹10,000 seed capital to help you start your own micro-enterprise and grow your business.'
      ],
      services: '₹10,000 Seed Capital, Micro-enterprise Support, SHG Grants',
      checklist: [
        'You must be an active member of an ASRLM-registered Self-Help Group (SHG).',
        'Have a functioning bank account linked with Aadhaar.',
        'Apply through your local block office or ASRLM representative.',
        'Provide a basic business plan showing how the grant will be utilized.'
      ],
      ctaText: '👉 VIEW MMUA / ASRLM PORTAL',
      faqs: [
        {
          question: 'Who is eligible for MMUA?',
          answer: 'Rural women who are members of eligible Self-Help Groups under ASRLM.'
        },
        {
          question: 'Is this a loan or a grant?',
          answer: 'The initial ₹10,000 is a direct seed capital grant to help establish a micro-enterprise.'
        }
      ]
    },
    as: {
      title: 'মুখ্যমন্ত্ৰী মহিলা উদ্যমিতা অভিযান (MMUA)',
      hookSentences: [
        'আপুনি আত্মসহায়ক গোটৰ (SHG) সৈতে জড়িত এগৰাকী গ্ৰাম্য মহিলা নেকি?',
        'MMUA আঁচনিয়ে আপোনাক নিজা ক্ষুদ্ৰ ব্যৱসায় আৰম্ভ কৰিবলৈ ১০,০০০ টকাৰ আৰ্থিক অনুদান আগবঢ়ায়।'
      ],
      services: '১০,০০০ টকাৰ মূলধন, ব্যৱসায়িক সাহায্য, আত্মসহায়ক গোটৰ অনুদান',
      checklist: [
        'আপুনি ASRLM-ৰ অধীনত পঞ্জীয়নভুক্ত আত্মসহায়ক গোটৰ সক্ৰিয় সদস্য হ\\'ব লাগিব।',
        'আধাৰ সংযুক্ত বেংক একাউণ্ট সক্ৰিয় থাকিব লাগিব।',
        'স্থানীয় খণ্ড উন্নয়ন কাৰ্যালয় (Block Office) বা ASRLM প্ৰতিনিধিৰ জৰিয়তে আৱেদন কৰক।',
        'এই ধনেৰে ব্যৱসায় কেনেকৈ আৰম্ভ কৰিব তাৰ এক সাধাৰণ পৰিকল্পনা দিব লাগিব।'
      ],
      ctaText: '👉 ASRLM পৰ্টেললৈ যাওক',
      faqs: [
        {
          question: 'এই আঁচনিৰ বাবে কোনে আৱেদন কৰিব পাৰিব?',
          answer: 'ASRLM-ৰ অন্তৰ্গত যোগ্য আত্মসহায়ক গোটৰ গ্ৰাম্য মহিলা সদস্যসকলে আৱেদন কৰিব পাৰিব।'
        },
        {
          question: 'এই ধনখিনি ঋণ নে অনুদান?',
          answer: 'প্ৰথম পৰ্যায়ৰ ১০,০০০ টকাখিনি এককালীন অনুদান যি ক্ষুদ্ৰ ব্যৱসায় স্থাপনত সহায় কৰে।'
        }
      ]
    }
  },
  {
    id: 'jan-kalyan-shivir',
    category: 'Information',
    keyword: 'jan kalyan shivir 2026 direct welfare camp assam',
    metaDescription: 'Find details of the Direct Welfare Camp: Jan Kalyan Shivir 2026 providing instant registration for citizen schemes like Ayushman Bharat and PM-Kisan.',
    portalName: 'Jan Kalyan Shivir',
    department: 'District Administration',
    ctaLink: '#',
    en: {
      title: 'Direct Welfare Camp: Jan Kalyan Shivir 2026',
      hookSentences: [
        'The government has launched physical outreach camps to bring services directly to the public without forcing citizens to visit block offices.',
        'Help desks and multi-department stalls are set up to provide instant registration and spot-clearance for major citizen schemes like Ayushman Bharat (cashless health cards), PM-Kisan, and the Nijut Moina scheme.'
      ],
      services: 'Instant Registration, Scheme Spot-clearance, Help Desks',
      checklist: [
        'Keep an eye on local district administration announcements to find the active block-level camp near you this week.',
        'Carry your Aadhaar card, Ration card, and mobile number linked to Aadhaar.',
        'You can register for multiple schemes at standard multi-department stalls at the shivir.',
        'Visit early to avoid long queues for popular schemes like Nijut Moina or Ayushman Bharat.'
      ],
      ctaText: '👉 CHECK LOCAL DISTRICT PORTALS',
      faqs: [
        {
          question: 'Which schemes can I apply for at the Shivir?',
          answer: 'Major citizen schemes including PM-Kisan, Ayushman Bharat, Nijut Moina, and other state welfare programs.'
        },
        {
          question: 'Do I need to pay any fees at the camp?',
          answer: 'No, registration and assistance at these government camps are entirely free of charge.'
        }
      ]
    },
    as: {
      title: 'জন কল্যাণ শিবিৰ ২০২৬ (Jan Kalyan Shivir)',
      hookSentences: [
        'চৰকাৰে ৰাইজক পোনপটীয়াকৈ সেৱা প্ৰদান কৰিবলৈ আৰু ব্লক অফিচলৈ নোযোৱাকৈয়ে আঁচনিৰ সুবিধা দিবলৈ শিবিৰসমূহ আৰম্ভ কৰিছে।',
        'আয়ুষ্মান ভাৰত, পি.এম. কিষাণ (PM-Kisan) আৰু নিজুত মইনাৰ দৰে গুৰুত্বপূৰ্ণ আঁচনিসমূহৰ নিমিষতে পঞ্জীয়ন কৰিবলৈ সহায়ক ডেস্ক আৰু বহু-বিভাগীয় ষ্টল মুকলি কৰা হৈছে।'
      ],
      services: 'ততাতৈয়া পঞ্জীয়ন, আঁচনিৰ সুবিধা, সহায়ক ডেস্ক',
      checklist: [
        'আপোনাৰ ওচৰত অনুষ্ঠিত হ\\'বলগীয়া শিবিৰৰ বিষয়ে জানিবলৈ জিলা প্ৰশাসনৰ ঘোষণাসমূহৰ প্ৰতি দৃষ্টি ৰাখক।',
        'আপোনাৰ আধাৰ কাৰ্ড, ৰেচন কাৰ্ড আৰু আধাৰ লিংক থকা মবাইল নম্বৰ লগত ৰাখিব।',
        'একেখন শিবিৰতে আপুনি একাধিক বিভাগ আৰু আঁচনিৰ সুবিধা ল\\'ব পাৰিব।',
        'ভিৰৰ পৰা হাত সাৰিবলৈ সোনকালেই শিবিৰলৈ যোৱাটো উচিত।'
      ],
      ctaText: '👉 স্থানীয় প্ৰশাসনৰ ৱেবছাইট চাওক',
      faqs: [
        {
          question: 'মই শিবিৰত কোনবোৰ আঁচনিৰ বাবে আৱেদন কৰিব পাৰিম?',
          answer: 'পি.এম. কিষাণ, আয়ুষ্মান ভাৰত, নিজুত মইনা আৰু ৰাজ্য চৰকাৰৰ অন্যান্য গুৰুত্বপূৰ্ণ আঁচনিৰ বাবে আৱেদন কৰিব পাৰিব।'
        },
        {
          question: 'শিবিৰত কোনো মাচুল দিব লাগে নেকি?',
          answer: 'নালাগে, চৰকাৰী শিবিৰত পঞ্জীয়ন আৰু সহায় সম্পূৰ্ণ বিনামূলীয়া।'
        }
      ]
    }
  },
  {
    id: 'cm-flight',
    category: 'Information',
    keyword: 'cm flight assam japan ssw jobs foreign languages initiative',
    metaDescription: 'CM-FLIGHT aims to train and place up to 50,000 Assamese youth in Japan under the SSW visa program. Learn Japanese and get subsidized training.',
    portalName: 'CM-FLIGHT',
    department: 'Skill, Employment & Entrepreneurship, Assam',
    ctaLink: 'https://skillassam.gov.in/',
    en: {
      title: 'CM-FLIGHT: Jobs for Assamese Youth in Japan',
      hookSentences: [
        'Are you a young professional looking to work abroad in a high-demand sector?',
        'The Chief Minister’s Foreign Languages Initiative for Global Human Talent (CM-FLIGHT) trains and places up to 50,000 youth from Assam in Japan by 2030.'
      ],
      services: 'Japanese Language Training, SSW Visa Placement, Subsidized Course',
      checklist: [
        'The program focuses heavily on teaching the Japanese language targeting JLPT N2 proficiency.',
        'Target fields include nursing, caregiving, construction, hospitality, and food services.',
        'The ₹3.6 Lakhs program cost is highly subsidized—Assam Govt covers ₹1 Lakh and Japan contributes ₹50,000.',
        'Candidates can access easy loan options for the remaining minimal portion of the fee.'
      ],
      ctaText: '👉 VIEW CM-FLIGHT DETAILS',
      faqs: [
        {
          question: 'What kind of visa will I get?',
          answer: 'Candidates are placed under Japan’s Specified Skilled Worker (SSW) visa program.'
        },
        {
          question: 'Do I need prior Japanese knowledge?',
          answer: 'No, the initiative includes comprehensive language and cultural training to prepare you for the certification.'
        }
      ]
    },
    as: {
      title: 'CM-FLIGHT: অসমৰ যুৱক-যুৱতীৰ বাবে জাপানত সংস্থাপন',
      hookSentences: [
        'আপুনি বিদেশত উচ্চ চাহিদা থকা খণ্ডত কাম কৰিবলৈ আগ্ৰহী নেকি?',
        'মুখ্যমন্ত্ৰীৰ গোলকীয় মানৱ সম্পদৰ বাবে বিদেশী ভাষাৰ উদ্যোগ (CM-FLIGHT) আঁচনিয়ে ২০৩০ চনলৈকে জাপানত অসমৰ ৫০,০০০ যুৱক-যুৱতীক প্ৰশিক্ষণ আৰু সংস্থাপন প্ৰদানৰ লক্ষ্য লৈছে।'
      ],
      services: 'জাপানী ভাষাৰ প্ৰশিক্ষণ, SSW ভিছা, ৰাজসাহায্য যুক্ত পাঠ্যক্ৰম',
      checklist: [
        'এই কাৰ্যসূচীয়ে মূলতঃ JLPT N2 পৰ্যায়ৰ জাপানী ভাষা আৰু সংস্কৃতিৰ প্ৰশিক্ষণ প্ৰদানত গুৰুত্ব আৰোপ কৰে।',
        'নাৰ্ছিং, শুশ্ৰূষা (Caregiving), নিৰ্মাণ, আতিথ্য (Hospitality) আৰু খাদ্য সেৱা ইত্যাদি খণ্ডক সামৰি লোৱা হৈছে।',
        '৩.৬ লাখ টকাৰ পাঠ্যক্ৰমত অসম চৰকাৰে ১ লাখ টকা আৰু জাপানে ৫০,০০০ টকাৰ ৰাজসাহায্য প্ৰদান কৰে।',
        'বাকী থকা সামান্য ধনৰ বাবে প্ৰাৰ্থীসকলে সহজ ঋণৰ সুবিধা লাভ কৰিব পাৰে।'
      ],
      ctaText: '👉 CM-FLIGHT ৰ বিষয়ে জানক',
      faqs: [
        {
          question: 'মই কি ধৰণৰ ভিছা পাম?',
          answer: 'প্ৰাৰ্থীসকলক জাপানৰ নিৰ্দিষ্ট দক্ষ কৰ্মী (Specified Skilled Worker - SSW) ভিছাৰ অধীনত সংস্থাপন দিয়া হয়।'
        },
        {
          question: 'মোৰ আগতীয়াকৈ জাপানী ভাষাৰ জ্ঞান থকাটো প্ৰয়োজনীয় নেকি?',
          answer: 'প্ৰয়োজন নাই, এই কাৰ্যসূচীত আপোনাক প্ৰস্তুত কৰিবলৈ ভাষা আৰু সংস্কৃতিৰ সম্পূৰ্ণ প্ৰশিক্ষণ প্ৰদান কৰা হ\\'ব।'
        }
      ]
    }
  }`;

const closingBracketIndex = content.lastIndexOf('];');

if (closingBracketIndex !== -1) {
  content = content.substring(0, closingBracketIndex) + ',\\n' + newSchemes + '\\n];' + content.substring(closingBracketIndex + 2);
  fs.writeFileSync('src/data.ts', content);
  console.log('Appended successfully');
} else {
  console.error('Could not find closing bracket');
  process.exit(1);
}
