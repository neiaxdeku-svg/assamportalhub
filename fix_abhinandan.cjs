const fs = require('fs');
let lines = fs.readFileSync('src/data.ts', 'utf8').split('\n');

lines[1328] = "      title: 'অভিনন্দন শিক্ষা ঋণ ৰাজ সাহায্য আঁচনি (Abhinandan)',";
lines.splice(1329, 0,
"      hookSentences: ['উচ্চ শিক্ষাৰ বাবে বেংকৰ পৰা শিক্ষা ঋণ লৈছিল নেকি?'],",
"      services: 'শিক্ষা ঋণৰ ৰেহাই, আৰ্থিক সকাহ',",
"      checklist: ['আপোনাৰ ঋণটো RBI-ৰ দ্বাৰা স্বীকৃতিপ্ৰাপ্ত বেংকৰ হ\\'ব লাগিব।'],",
"      ctaText: '👉 অভিনন্দন আঁচনিৰ নিৰ্দেশনা চাওক',",
"      faqs: [{question: 'মই টকাখিনি পাম নেকি?', answer: 'নাপায়, চৰকাৰে আপোনাৰ লোন একাউণ্টত জমা কৰে।'}]",
"    }",
"  },"
);
// And line 1845 has the 'Arogyamitra' issue
// In the current file, after splice, 1845 shifted down by 7 lines!
// 1845 + 7 = 1852. Let's just fix it universally.
let content = lines.join('\n');
content = content.replace(/the 'Arogyamitra' help desk/g, "the \\'Arogyamitra\\' help desk");
content = content.replace(/চিকিৎসালয়ৰ 'আৰোগ্যমিত্ৰ' \(Arogyamitra\) ডেস্কত/g, "চিকিৎসালয়ৰ \\'আৰোগ্যমিত্ৰ\\' (Arogyamitra) ডেস্কত");

fs.writeFileSync('src/data.ts', content);
console.log("Fixed abhinandan and Arogyamitra");
