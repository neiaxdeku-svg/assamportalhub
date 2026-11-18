const fs = require('fs');
let content = fs.readFileSync('src/data.ts', 'utf8');

// Fix 1: The broken string literal at abhinandan
// we will replace the line 1329 and 1330
content = content.replace(/as: \{\n\s*title: 'অভিনন্দন শিক্ষা ঋণ ৰাজস  \},/g, `as: {
      title: 'অভিনন্দন শিক্ষা ঋণ ৰাজ সাহায্য আঁচনি (Abhinandan)',
      hookSentences: ['উচ্চ শিক্ষাৰ বাবে বেংকৰ পৰা শিক্ষা ঋণ লৈছিল নেকি?'],
      services: 'শিক্ষা ঋণৰ ৰেহাই, আৰ্থিক সকাহ',
      checklist: ['আপোনাৰ ঋণটো RBI-ৰ দ্বাৰা স্বীকৃতিপ্ৰাপ্ত বেংকৰ হ\\'ব লাগিব।'],
      ctaText: '👉 অভিনন্দন আঁচনিৰ নিৰ্দেশনা চাওক',
      faqs: [{question: 'মই টকাখিনি পাম নেকি?', answer: 'নাপায়, চৰকাৰে আপোনাৰ লোন একাউণ্টত জমা কৰে।'}]
    }
  },`);

// Replace the single quotes inside the AAA scheme at line 1820
content = content.replace(/the 'Arogyamitra' help desk/g, "the \\'Arogyamitra\\' help desk");

// Find the stray "]; ব্যৱহাৰ কৰক।'," and all that garbage from previous bad replace
let badIndex = content.indexOf(']; ব্যৱহাৰ কৰক।\',');
if (badIndex !== -1) {
  // Let's replace the whole sequence of stray symbols
  // Oh wait, why is `]; ` there? Because my edit_file appended the array closer right IN THE MIDDLE of shiksha-setu.
  // The correct shiksha setu item should have been:
  // "শিক্ষক আৰু শিক্ষাৰ্থীৰ বাবে মুকলি কৰা হৈছে।" (or whatever it was)
  // Let's just fix it manually using a regex to rip out the bad `];`
  content = content.replace(/\]; ব্যৱহাৰ কৰক।',/g, "এই এপ ব্যৱহাৰ কৰক।',");
}

fs.writeFileSync('src/data.ts', content);
console.log("Fixes applied");
