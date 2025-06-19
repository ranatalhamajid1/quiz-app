// Enhanced Web Development Quiz Application with Skip/Submit functionality
class WebDevQuizApp {
  constructor() {
    this.allQuestions = {
      easy: {
        en: [
          {
            question: "What does HTML stand for?",
            answers: [
              { text: "HyperText Markup Language", correct: true },
              { text: "High Tech Modern Language", correct: false },
              { text: "Home Tool Markup Language", correct: false },
              { text: "Hyperlink and Text Markup Language", correct: false }
            ],
            difficulty: "Easy",
            hint: "It's the standard markup language for creating web pages.",
            explanation: "HTML stands for HyperText Markup Language and is the standard markup language for documents designed to be displayed in a web browser."
          },
          {
            question: "Which CSS property is used to change the background color?",
            answers: [
              { text: "color", correct: false },
              { text: "bgcolor", correct: false },
              { text: "background-color", correct: true },
              { text: "background", correct: false }
            ],
            difficulty: "Easy",
            hint: "It's a property that specifically targets the background's color.",
            explanation: "The background-color property sets the background color of an element."
          },
          {
            question: "What is the correct HTML element for inserting a line break?",
            answers: [
              { text: "<break>", correct: false },
              { text: "<br>", correct: true },
              { text: "<lb>", correct: false },
              { text: "<line>", correct: false }
            ],
            difficulty: "Easy",
            hint: "It's a self-closing tag with just two letters.",
            explanation: "The <br> tag inserts a single line break and is useful for writing addresses or poems."
          },
          {
            question: "Which attribute is used to provide a unique identifier for an HTML element?",
            answers: [
              { text: "class", correct: false },
              { text: "id", correct: true },
              { text: "name", correct: false },
              { text: "key", correct: false }
            ],
            difficulty: "Easy",
            hint: "This attribute should be unique on the page.",
            explanation: "The id attribute provides a unique identifier for an element within the document."
          },
          {
            question: "What does CSS stand for?",
            answers: [
              { text: "Computer Style Sheets", correct: false },
              { text: "Creative Style Sheets", correct: false },
              { text: "Cascading Style Sheets", correct: true },
              { text: "Colorful Style Sheets", correct: false }
            ],
            difficulty: "Easy",
            hint: "The first word relates to how styles flow down through elements.",
            explanation: "CSS stands for Cascading Style Sheets, describing how styles cascade from parent to child elements."
          },
          {
            question: "Which HTML tag is used to create a hyperlink?",
            answers: [
              { text: "<link>", correct: false },
              { text: "<a>", correct: true },
              { text: "<href>", correct: false },
              { text: "<url>", correct: false }
            ],
            difficulty: "Easy",
            hint: "It's a single letter tag commonly called an 'anchor'.",
            explanation: "The <a> tag defines a hyperlink, which is used to link from one page to another."
          },
          {
            question: "What is the correct way to create a comment in HTML?",
            answers: [
              { text: "// This is a comment", correct: false },
              { text: "/* This is a comment */", correct: false },
              { text: "<!-- This is a comment -->", correct: true },
              { text: "# This is a comment", correct: false }
            ],
            difficulty: "Easy",
            hint: "HTML comments use angle brackets with special characters.",
            explanation: "HTML comments are written as <!-- comment --> and are not displayed in the browser."
          },
          {
            question: "Which CSS property controls the text size?",
            answers: [
              { text: "text-style", correct: false },
              { text: "text-size", correct: false },
              { text: "font-size", correct: true },
              { text: "font-style", correct: false }
            ],
            difficulty: "Easy",
            hint: "It's related to the font, not just text.",
            explanation: "The font-size property sets the size of the font for text content."
          },
          {
            question: "What is the purpose of the <head> section in HTML?",
            answers: [
              { text: "To contain the main content", correct: false },
              { text: "To contain metadata about the document", correct: true },
              { text: "To create headers and navigation", correct: false },
              { text: "To define the page footer", correct: false }
            ],
            difficulty: "Easy",
            hint: "It contains information about the document, not content that users see.",
            explanation: "The <head> element contains metadata about the HTML document that isn't displayed on the page."
          },
          {
            question: "Which attribute specifies the URL of the page the link goes to?",
            answers: [
              { text: "src", correct: false },
              { text: "href", correct: true },
              { text: "link", correct: false },
              { text: "url", correct: false }
            ],
            difficulty: "Easy",
            hint: "It's an abbreviation for 'hypertext reference'.",
            explanation: "The href attribute specifies the URL of the page the link goes to."
          }
        ],
        ur: [
          {
            question: "HTML کا مطلب کیا ہے؟",
            answers: [
              { text: "HyperText Markup Language", correct: true },
              { text: "High Tech Modern Language", correct: false },
              { text: "Home Tool Markup Language", correct: false },
              { text: "Hyperlink and Text Markup Language", correct: false }
            ],
            difficulty: "آسان",
            hint: "یہ ویب پیجز بنانے کے لیے معیاری مارک اپ زبان ہے۔",
            explanation: "HTML کا مطلب HyperText Markup Language ہے اور یہ ویب براؤزر میں دکھائے جانے والے دستاویزات کے لیے معیاری مارک اپ زبان ہے۔"
          },
          {
            question: "CSS میں پس منظر کا رنگ تبدیل کرنے کے لیے کون سی خاصیت استعمال ہوتی ہے؟",
            answers: [
              { text: "color", correct: false },
              { text: "bgcolor", correct: false },
              { text: "background-color", correct: true },
              { text: "background", correct: false }
            ],
            difficulty: "آسان",
            hint: "یہ خاص طور پر پس منظر کے رنگ کو نشانہ بناتی ہے۔",
            explanation: "background-color خاصیت کسی عنصر کے پس منظر کا رنگ مقرر کرتی ہے۔"
          },
          {
            question: "لائن بریک داخل کرنے کے لیے صحیح HTML عنصر کون سا ہے؟",
            answers: [
              { text: "<break>", correct: false },
              { text: "<br>", correct: true },
              { text: "<lb>", correct: false },
              { text: "<line>", correct: false }
            ],
            difficulty: "آسان",
            hint: "یہ صرف دو حروف کا خود بند ہونے والا ٹیگ ہے۔",
            explanation: "<br> ٹیگ ایک لائن بریک داخل کرتا ہے اور پتے یا شاعری لکھنے کے لیے مفید ہے۔"
          },
          {
            question: "HTML عنصر کے لیے منفرد شناختی فراہم کرنے کے لیے کون سی خاصیت استعمال ہوتی ہے؟",
            answers: [
              { text: "class", correct: false },
              { text: "id", correct: true },
              { text: "name", correct: false },
              { text: "key", correct: false }
            ],
            difficulty: "آسان",
            hint: "یہ خاصیت صفحے پر منفرد ہونی چاہیے۔",
            explanation: "id خاصیت دستاویز کے اندر کسی عنصر کے لیے منفرد شناختی فراہم کرتی ہے۔"
          },
          {
            question: "CSS کا مطلب کیا ہے؟",
            answers: [
              { text: "Computer Style Sheets", correct: false },
              { text: "Creative Style Sheets", correct: false },
              { text: "Cascading Style Sheets", correct: true },
              { text: "Colorful Style Sheets", correct: false }
            ],
            difficulty: "آسان",
            hint: "پہلا لفظ اس بات سے متعلق ہے کہ اسٹائل کیسے عناصر میں بہتے ہیں۔",
            explanation: "CSS کا مطلب Cascading Style Sheets ہے، یہ بیان کرتا ہے کہ اسٹائل کیسے والدین سے بچوں کے عناصر میں بہتے ہیں۔"
          },
          {
            question: "ہائپر لنک بنانے کے لیے کون سا HTML ٹیگ استعمال ہوتا ہے؟",
            answers: [
              { text: "<link>", correct: false },
              { text: "<a>", correct: true },
              { text: "<href>", correct: false },
              { text: "<url>", correct: false }
            ],
            difficulty: "آسان",
            hint: "یہ ایک حرف کا ٹیگ ہے جسے عام طور پر 'anchor' کہتے ہیں۔",
            explanation: "<a> ٹیگ ہائپر لنک کی تعریف کرتا ہے، جو ایک صفحے سے دوسرے صفحے کو لنک کرنے کے لیے استعمال ہوتا ہے۔"
          },
          {
            question: "HTML میں کمنٹ بنانے کا صحیح طریقہ کیا ہے؟",
            answers: [
              { text: "// This is a comment", correct: false },
              { text: "/* This is a comment */", correct: false },
              { text: "<!-- This is a comment -->", correct: true },
              { text: "# This is a comment", correct: false }
            ],
            difficulty: "آسان",
            hint: "HTML کمنٹس خاص کریکٹرز کے ساتھ زاویہ بریکٹ استعمال کرتے ہیں۔",
            explanation: "HTML کمنٹس <!-- comment --> کے طور پر لکھے جاتے ہیں اور براؤزر میں نظر نہیں آتے۔"
          },
          {
            question: "CSS میں ٹیکسٹ کا سائز کنٹرول کرنے والی خاصیت کون سی ہے؟",
            answers: [
              { text: "text-style", correct: false },
              { text: "text-size", correct: false },
              { text: "font-size", correct: true },
              { text: "font-style", correct: false }
            ],
            difficulty: "آسان",
            hint: "یہ فونٹ سے متعلق ہے، صرف ٹیکسٹ سے نہیں۔",
            explanation: "font-size خاصیت ٹیکسٹ کنٹینٹ کے لیے فونٹ کا سائز مقرر کرتی ہے۔"
          },
          {
            question: "HTML میں <head> سیکشن کا مقصد کیا ہے؟",
            answers: [
              { text: "اصل مواد رکھنے کے لیے", correct: false },
              { text: "دستاویز کے بارے میں میٹا ڈیٹا رکھنے کے لیے", correct: true },
              { text: "ہیڈرز اور نیویگیشن بنانے کے لیے", correct: false },
              { text: "صفحے کا فوٹر مقرر کرنے کے لیے", correct: false }
            ],
            difficulty: "آسان",
            hint: "اس میں دستاویز کے بارے میں معلومات ہوتی ہیں، وہ مواد نہیں جو صارف دیکھتے ہیں۔",
            explanation: "<head> عنصر میں HTML دستاویز کے بارے میں میٹا ڈیٹا ہوتا ہے جو صفحے پر نظر نہیں آتا۔"
          },
          {
            question: "لنک کس صفحے پر جاتا ہے اس کا URL بتانے والی خاصیت کون سی ہے؟",
            answers: [
              { text: "src", correct: false },
              { text: "href", correct: true },
              { text: "link", correct: false },
              { text: "url", correct: false }
            ],
            difficulty: "آسان",
            hint: "یہ 'hypertext reference' کا مخفف ہے۔",
            explanation: "href خاصیت اس صفحے کا URL بتاتی ہے جہاں لنک جاتا ہے۔"
          }
        ]
      },
      medium: {
        en: [
          {
            question: "What is the difference between '==' and '===' in JavaScript?",
            answers: [
              { text: "No difference", correct: false },
              { text: "'==' checks type and value, '===' checks only value", correct: false },
              { text: "'==' checks value, '===' checks type and value", correct: true },
              { text: "Both are deprecated", correct: false }
            ],
            difficulty: "Medium",
            hint: "One performs type coercion, the other doesn't.",
            explanation: "'==' performs type coercion and compares values, while '===' compares both type and value without coercion."
          },
          {
            question: "Which CSS unit is relative to the font-size of the root element?",
            answers: [
              { text: "em", correct: false },
              { text: "rem", correct: true },
              { text: "px", correct: false },
              { text: "vh", correct: false }
            ],
            difficulty: "Medium",
            hint: "It's similar to 'em' but relative to a different element.",
            explanation: "'rem' stands for 'root em' and is relative to the font-size of the root element (html)."
          },
          {
            question: "What does the 'box-sizing: border-box' CSS property do?",
            answers: [
              { text: "Adds padding and border to the element's total width/height", correct: false },
              { text: "Includes padding and border in the element's total width/height", correct: true },
              { text: "Removes borders from the element", correct: false },
              { text: "Makes the element a flex container", correct: false }
            ],
            difficulty: "Medium",
            hint: "It changes how the browser calculates the total size of an element.",
            explanation: "border-box includes padding and border in the element's total width and height."
          },
          {
            question: "What is the purpose of the 'data-*' attributes in HTML?",
            answers: [
              { text: "To style elements", correct: false },
              { text: "To store custom data private to the page or application", correct: true },
              { text: "To validate forms", correct: false },
              { text: "To create animations", correct: false }
            ],
            difficulty: "Medium",
            hint: "They allow you to store extra information on standard HTML elements.",
            explanation: "data-* attributes allow you to store custom data private to the page or application."
          },
          {
            question: "Which JavaScript method is used to add an element to the end of an array?",
            answers: [
              { text: "unshift()", correct: false },
              { text: "push()", correct: true },
              { text: "pop()", correct: false },
              { text: "shift()", correct: false }
            ],
            difficulty: "Medium",
            hint: "Think about pushing something onto a stack.",
            explanation: "push() adds one or more elements to the end of an array and returns the new length."
          },
          {
            question: "What is a closure in JavaScript?",
            answers: [
              { text: "A way to close the browser", correct: false },
              { text: "A function that has access to variables in its outer scope", correct: true },
              { text: "A method to end a loop", correct: false },
              { text: "A CSS property", correct: false }
            ],
            difficulty: "Medium",
            hint: "It's about functions having access to their surrounding environment.",
            explanation: "A closure is a function that has access to variables in its outer (enclosing) scope even after the outer function has returned."
          },
          {
            question: "What does 'npm' stand for?",
            answers: [
              { text: "Node.js Package Manager", correct: false },
              { text: "New Programming Module", correct: false },
              { text: "npm is not an acronym", correct: true },
              { text: "Network Package Manager", correct: false }
            ],
            difficulty: "Medium",
            hint: "According to the official documentation, it's not actually an acronym.",
            explanation: "According to npm's official documentation, npm is not an acronym and is simply called 'npm'."
          },
          {
            question: "Which CSS property is used to create a flexible layout?",
            answers: [
              { text: "display: block", correct: false },
              { text: "display: flex", correct: true },
              { text: "position: relative", correct: false },
              { text: "float: left", correct: false }
            ],
            difficulty: "Medium",
            hint: "It's part of the Flexbox layout model.",
            explanation: "display: flex creates a flexible layout container that can control the arrangement of its children."
          },
          {
            question: "What is the default value of the 'position' CSS property?",
            answers: [
              { text: "relative", correct: false },
              { text: "absolute", correct: false },
              { text: "static", correct: true },
              { text: "fixed", correct: false }
            ],
            difficulty: "Medium",
            hint: "It's the most basic positioning that follows normal document flow.",
            explanation: "The default value of the position property is 'static', which follows the normal document flow."
          },
          {
            question: "Which HTML5 semantic element should be used for the main content of a document?",
            answers: [
              { text: "<section>", correct: false },
              { text: "<article>", correct: false },
              { text: "<main>", correct: true },
              { text: "<content>", correct: false }
            ],
            difficulty: "Medium",
            hint: "It represents the main content area of the document.",
            explanation: "The <main> element represents the main content of the document, excluding headers, footers, and sidebars."
          }
        ],
        ur: [
          {
            question: "JavaScript میں '==' اور '===' کے درمیان کیا فرق ہے؟",
            answers: [
              { text: "کوئی فرق نہیں", correct: false },
              { text: "'==' قسم اور قدر چیک کرتا ہے، '===' صرف قدر چیک کرتا ہے", correct: false },
              { text: "'==' قدر چیک کرتا ہے، '===' قسم اور قدر چیک کرتا ہے", correct: true },
              { text: "دونوں منسوخ ہو چکے ہیں", correct: false }
            ],
            difficulty: "درمیانہ",
            hint: "ایک type coercion کرتا ہے، دوسرا نہیں۔",
            explanation: "'==' type coercion کرتا ہے اور قدریں موازنہ کرتا ہے، جبکہ '===' بغیر coercion کے قسم اور قدر دونوں کا موازنہ کرتا ہے۔"
          },
          {
            question: "کون سی CSS یونٹ root element کے font-size کے نسبت ہے؟",
            answers: [
              { text: "em", correct: false },
              { text: "rem", correct: true },
              { text: "px", correct: false },
              { text: "vh", correct: false }
            ],
            difficulty: "درمیانہ",
            hint: "یہ 'em' کی طرح ہے لیکن مختلف element کے نسبت۔",
            explanation: "'rem' کا مطلب 'root em' ہے اور یہ root element (html) کے font-size کے نسبت ہوتی ہے۔"
          },
          {
            question: "'box-sizing: border-box' CSS خاصیت کیا کرتی ہے؟",
            answers: [
              { text: "element کی کل چوڑائی/اونچائی میں padding اور border شامل کرتی ہے", correct: false },
              { text: "element کی کل چوڑائی/اونچائی میں padding اور border شامل کرتی ہے", correct: true },
              { text: "element سے borders ہٹاتی ہے", correct: false },
              { text: "element کو flex container بناتی ہے", correct: false }
            ],
            difficulty: "درمیانہ",
            hint: "یہ تبدیل کرتا ہے کہ براؤزر element کا کل سائز کیسے حساب کرتا ہے۔",
            explanation: "border-box element کی کل چوڑائی اور اونچائی میں padding اور border شامل کرتا ہے۔"
          },
          {
            question: "HTML میں 'data-*' attributes کا مقصد کیا ہے؟",
            answers: [
              { text: "elements کو style کرنے کے لیے", correct: false },
              { text: "صفحے یا application کے لیے خصوصی ڈیٹا محفوظ کرنے کے لیے", correct: true },
              { text: "forms کو validate کرنے کے لیے", correct: false },
              { text: "animations بنانے کے لیے", correct: false }
            ],
            difficulty: "درمیانہ",
            hint: "یہ آپ کو معیاری HTML elements پر اضافی معلومات محفوظ کرنے کی اجازت دیتے ہیں۔",
            explanation: "data-* attributes آپ کو صفحے یا application کے لیے خصوصی ڈیٹا محفوظ کرنے کی اجازت دیتے ہیں۔"
          },
          {
            question: "JavaScript میں array کے آخر میں element شامل کرنے کے لیے کون سا method استعمال ہوتا ہے؟",
            answers: [
              { text: "unshift()", correct: false },
              { text: "push()", correct: true },
              { text: "pop()", correct: false },
              { text: "shift()", correct: false }
            ],
            difficulty: "درمیانہ",
            hint: "stack پر کچھ push کرنے کے بارے میں سوچیں۔",
            explanation: "push() array کے آخر میں ایک یا زیادہ elements شامل کرتا ہے اور نئی length واپس کرتا ہے۔"
          },
          {
            question: "JavaScript میں closure کیا ہے؟",
            answers: [
              { text: "براؤزر بند کرنے کا طریقہ", correct: false },
              { text: "ایک function جو اپنے outer scope کے variables تک رسائی رکھتا ہے", correct: true },
              { text: "loop ختم کرنے کا method", correct: false },
              { text: "CSS property", correct: false }
            ],
            difficulty: "درمیانہ",
            hint: "یہ functions کے اپنے surrounding environment تک رسائی کے بارے میں ہے۔",
            explanation: "closure ایک function ہے جو اپنے outer (enclosing) scope کے variables تک رسائی رکھتا ہے یہاں تک کہ outer function return ہونے کے بعد بھی۔"
          },
          {
            question: "'npm' کا مطلب کیا ہے؟",
            answers: [
              { text: "Node.js Package Manager", correct: false },
              { text: "New Programming Module", correct: false },
              { text: "npm کوئی مخفف نہیں ہے", correct: true },
              { text: "Network Package Manager", correct: false }
            ],
            difficulty: "درمیانہ",
            hint: "سرکاری documentation کے مطابق، یہ واقعی کوئی مخفف نہیں ہے۔",
            explanation: "npm کی سرکاری documentation کے مطابق، npm کوئی مخفف نہیں ہے اور اسے صرف 'npm' کہا جاتا ہے۔"
          },
          {
            question: "flexible layout بنانے کے لیے کون سی CSS property استعمال ہوتی ہے؟",
            answers: [
              { text: "display: block", correct: false },
              { text: "display: flex", correct: true },
              { text: "position: relative", correct: false },
              { text: "float: left", correct: false }
            ],
            difficulty: "درمیانہ",
            hint: "یہ Flexbox layout model کا حصہ ہے۔",
            explanation: "display: flex ایک flexible layout container بناتا ہے جو اپنے children کی arrangement کو control کر سکتا ہے۔"
          },
          {
            question: "'position' CSS property کی default value کیا ہے؟",
            answers: [
              { text: "relative", correct: false },
              { text: "absolute", correct: false },
              { text: "static", correct: true },
              { text: "fixed", correct: false }
            ],
            difficulty: "درمیانہ",
            hint: "یہ سب سے بنیادی positioning ہے جو normal document flow کو follow کرتی ہے۔",
            explanation: "position property کی default value 'static' ہے، جو normal document flow کو follow کرتی ہے۔"
          },
          {
            question: "document کے main content کے لیے کون سا HTML5 semantic element استعمال کرنا چاہیے؟",
            answers: [
              { text: "<section>", correct: false },
              { text: "<article>", correct: false },
              { text: "<main>", correct: true },
              { text: "<content>", correct: false }
            ],
            difficulty: "درمیانہ",
            hint: "یہ document کے main content area کو represent کرتا ہے۔",
            explanation: "<main> element document کے main content کو represent کرتا ہے، headers، footers، اور sidebars کو چھوڑ کر۔"
          }
        ]
      },
      hard: {
        en: [
          {
            question: "What is the Event Loop in JavaScript?",
            answers: [
              { text: "A loop that handles DOM events", correct: false },
              { text: "A mechanism that handles asynchronous operations", correct: true },
              { text: "A way to iterate through arrays", correct: false },
              { text: "A CSS animation technique", correct: false }
            ],
            difficulty: "Hard",
            hint: "It's fundamental to JavaScript's concurrency model.",
            explanation: "The Event Loop is a mechanism that handles the execution of asynchronous code in JavaScript's single-threaded environment."
          },
          {
            question: "What is the difference between 'call', 'apply', and 'bind' in JavaScript?",
            answers: [
              { text: "They are all the same", correct: false },
              { text: "call takes arguments separately, apply takes an array, bind returns a new function", correct: true },
              { text: "Only bind can change 'this' context", correct: false },
              { text: "They are deprecated methods", correct: false }
            ],
            difficulty: "Hard",
            hint: "They all deal with the 'this' context but in different ways.",
            explanation: "call() invokes immediately with separate arguments, apply() with an array, and bind() returns a new function."
          },
          {
            question: "What is a Service Worker?",
            answers: [
              { text: "A background script that runs independently of web pages", correct: true },
              { text: "A CSS preprocessor", correct: false },
              { text: "A JavaScript framework", correct: false },
              { text: "A database management system", correct: false }
            ],
            difficulty: "Hard",
            hint: "It enables features like offline functionality and push notifications.",
            explanation: "A Service Worker is a script that runs in the background, separate from web pages, enabling features like offline functionality."
          },
          {
            question: "What is the purpose of the 'will-change' CSS property?",
            answers: [
              { text: "To predict future CSS changes", correct: false },
              { text: "To optimize performance by hinting which properties will change", correct: true },
              { text: "To create animations", correct: false },
              { text: "To validate CSS syntax", correct: false }
            ],
            difficulty: "Hard",
            hint: "It's a performance optimization hint for the browser.",
            explanation: "will-change lets the browser know which properties are likely to change, allowing for performance optimizations."
          },
          {
            question: "What is the difference between 'null' and 'undefined' in JavaScript?",
            answers: [
              { text: "They are exactly the same", correct: false },
              { text: "null is intentional absence, undefined is uninitialized", correct: true },
              { text: "undefined is intentional, null is accidental", correct: false },
              { text: "Only null can be assigned to variables", correct: false }
            ],
            difficulty: "Hard",
            hint: "One represents intentional absence, the other represents lack of initialization.",
            explanation: "null represents intentional absence of value, while undefined represents a variable that hasn't been initialized."
          },
          {
            question: "What is a Web Component?",
            answers: [
              { text: "A CSS framework", correct: false },
              { text: "A reusable custom element with encapsulated functionality", correct: true },
              { text: "A JavaScript library", correct: false },
              { text: "A server-side technology", correct: false }
            ],
            difficulty: "Hard",
            hint: "It's about creating custom, reusable HTML elements.",
            explanation: "Web Components are a set of web platform APIs that allow you to create new custom, reusable HTML tags."
          },
          {
            question: "What is the CSS Containment property used for?",
            answers: [
              { text: "To contain text within borders", correct: false },
              { text: "To limit layout and style recalculations to improve performance", correct: true },
              { text: "To create container queries", correct: false },
              { text: "To contain animations", correct: false }
            ],
            difficulty: "Hard",
            hint: "It's a performance optimization technique.",
            explanation: "CSS Containment allows developers to isolate parts of the page to improve performance by limiting scope of layout and style calculations."
          },
          {
            question: "What is the difference between microtasks and macrotasks in JavaScript?",
            answers: [
              { text: "No difference", correct: false },
              { text: "Microtasks have higher priority and execute before macrotasks", correct: true },
              { text: "Macrotasks execute first", correct: false },
              { text: "They are the same thing", correct: false }
            ],
            difficulty: "Hard",
            hint: "It's about the order of execution in the event loop.",
            explanation: "Microtasks (like Promise callbacks) have higher priority and execute before macrotasks (like setTimeout) in each iteration of the event loop."
          },
          {
            question: "What is Tree Shaking in JavaScript bundling?",
            answers: [
              { text: "A debugging technique", correct: false },
              { text: "Removing unused code from the final bundle", correct: true },
              { text: "A testing framework", correct: false },
              { text: "A design pattern", correct: false }
            ],
            difficulty: "Hard",
            hint: "It's about optimization and reducing bundle size.",
            explanation: "Tree Shaking is a dead code elimination technique that removes unused code from the final bundle to reduce file size."
          },
          {
            question: "What is the Shadow DOM?",
            answers: [
              { text: "A hidden HTML document", correct: false },
              { text: "An encapsulated DOM tree attached to an element", correct: true },
              { text: "A CSS selector", correct: false },
              { text: "A JavaScript framework", correct: false }
            ],
            difficulty: "Hard",
            hint: "It provides encapsulation for DOM and styles.",
            explanation: "Shadow DOM allows you to attach a hidden, encapsulated DOM tree to an element, providing style and markup encapsulation."
          }
        ],
        ur: [
          {
            question: "JavaScript میں Event Loop کیا ہے؟",
            answers: [
              { text: "DOM events handle کرنے والا loop", correct: false },
              { text: "asynchronous operations handle کرنے والا mechanism", correct: true },
              { text: "arrays میں iterate کرنے کا طریقہ", correct: false },
              { text: "CSS animation technique", correct: false }
            ],
            difficulty: "مشکل",
            hint: "یہ JavaScript کے concurrency model کے لیے بنیادی ہے۔",
            explanation: "Event Loop ایک mechanism ہے جو JavaScript کے single-threaded environment میں asynchronous code کی execution handle کرتا ہے۔"
          },
          {
            question: "JavaScript میں 'call'، 'apply'، اور 'bind' کے درمیان کیا فرق ہے؟",
            answers: [
              { text: "سب یکساں ہیں", correct: false },
              { text: "call arguments الگ الگ لیتا ہے، apply array لیتا ہے، bind نیا function return کرتا ہے", correct: true },
              { text: "صرف bind 'this' context تبدیل کر سکتا ہے", correct: false },
              { text: "یہ منسوخ شدہ methods ہیں", correct: false }
            ],
            difficulty: "مشکل",
            hint: "یہ سب 'this' context کے ساتھ deal کرتے ہیں لیکن مختلف طریقوں سے۔",
            explanation: "call() فوری طور پر الگ arguments کے ساتھ invoke کرتا ہے، apply() array کے ساتھ، اور bind() نیا function return کرتا ہے۔"
          },
          {
            question: "Service Worker کیا ہے؟",
            answers: [
              { text: "background script جو web pages سے آزادانہ طور پر چلتا ہے", correct: true },
              { text: "CSS preprocessor", correct: false },
              { text: "JavaScript framework", correct: false },
              { text: "database management system", correct: false }
            ],
            difficulty: "مشکل",
            hint: "یہ offline functionality اور push notifications جیسے features کو ممکن بناتا ہے۔",
            explanation: "Service Worker ایک script ہے جو background میں چلتا ہے، web pages سے الگ، offline functionality جیسے features کو ممکن بناتا ہے۔"
          },
          {
            question: "'will-change' CSS property کا مقصد کیا ہے؟",
            answers: [
              { text: "مستقبل کی CSS تبدیلیوں کی پیشن گوئی کرنا", correct: false },
              { text: "performance کو optimize کرنا بتا کر کہ کون سی properties تبدیل ہوں گی", correct: true },
              { text: "animations بنانا", correct: false },
              { text: "CSS syntax کو validate کرنا", correct: false }
            ],
            difficulty: "مشکل",
            hint: "یہ browser کے لیے performance optimization hint ہے۔",
            explanation: "will-change browser کو بتاتا ہے کہ کون سی properties تبدیل ہونے کا امکان ہے، performance optimizations کی اجازت دیتا ہے۔"
          },
          {
            question: "JavaScript میں 'null' اور 'undefined' کے درمیان کیا فرق ہے؟",
            answers: [
              { text: "یہ بالکل یکساں ہیں", correct: false },
              { text: "null جانبوجھ کر absence ہے، undefined uninitialized ہے", correct: true },
              { text: "undefined جانبوجھ کر ہے، null اتفاقی ہے", correct: false },
              { text: "صرف null کو variables کو assign کیا جا سکتا ہے", correct: false }
            ],
            difficulty: "مشکل",
            hint: "ایک جانبوجھ کر absence کو represent کرتا ہے، دوسرا initialization کی کمی کو۔",
            explanation: "null جانبوجھ کر value کی absence کو represent کرتا ہے، جبکہ undefined ایک variable کو represent کرتا ہے جو initialize نہیں ہوا۔"
          },
          {
            question: "Web Component کیا ہے؟",
            answers: [
              { text: "CSS framework", correct: false },
              { text: "encapsulated functionality کے ساتھ reusable custom element", correct: true },
              { text: "JavaScript library", correct: false },
              { text: "server-side technology", correct: false }
            ],
            difficulty: "مشکل",
            hint: "یہ custom، reusable HTML elements بنانے کے بارے میں ہے۔",
            explanation: "Web Components web platform APIs کا ایک set ہے جو آپ کو نئے custom، reusable HTML tags بنانے کی اجازت دیتا ہے۔"
          },
          {
            question: "CSS Containment property کا استعمال کس لیے ہوتا ہے؟",
            answers: [
              { text: "text کو borders کے اندر contain کرنے کے لیے", correct: false },
              { text: "performance بہتر بنانے کے لیے layout اور style recalculations کو محدود کرنے کے لیے", correct: true },
              { text: "container queries بنانے کے لیے", correct: false },
              { text: "animations کو contain کرنے کے لیے", correct: false }
            ],
            difficulty: "مشکل",
            hint: "یہ performance optimization technique ہے۔",
            explanation: "CSS Containment developers کو صفحے کے حصوں کو isolate کرنے کی اجازت دیتا ہے تاکہ layout اور style calculations کے scope کو محدود کر کے performance بہتر بنایا جا سکے۔"
          },
          {
            question: "JavaScript میں microtasks اور macrotasks کے درمیان کیا فرق ہے؟",
            answers: [
              { text: "کوئی فرق نہیں", correct: false },
              { text: "Microtasks کی اعلیٰ ترجیح ہے اور macrotasks سے پہلے execute ہوتے ہیں", correct: true },
              { text: "Macrotasks پہلے execute ہوتے ہیں", correct: false },
              { text: "یہ ایک ہی چیز ہیں", correct: false }
            ],
            difficulty: "مشکل",
            hint: "یہ event loop میں execution کے order کے بارے میں ہے۔",
            explanation: "Microtasks (جیسے Promise callbacks) کی اعلیٰ ترجیح ہوتی ہے اور event loop کی ہر iteration میں macrotasks (جیسے setTimeout) سے پہلے execute ہوتے ہیں۔"
          },
          {
            question: "JavaScript bundling میں Tree Shaking کیا ہے؟",
            answers: [
              { text: "debugging technique", correct: false },
              { text: "final bundle سے unused code کو ہٹانا", correct: true },
              { text: "testing framework", correct: false },
              { text: "design pattern", correct: false }
            ],
            difficulty: "مشکل",
            hint: "یہ optimization اور bundle size کم کرنے کے بارے میں ہے۔",
            explanation: "Tree Shaking ایک dead code elimination technique ہے جو final bundle سے unused code کو ہٹا کر file size کم کرتا ہے۔"
          },
          {
            question: "Shadow DOM کیا ہے؟",
            answers: [
              { text: "چھپا ہوا HTML document", correct: false },
              { text: "element کے ساتھ attached encapsulated DOM tree", correct: true },
              { text: "CSS selector", correct: false },
              { text: "JavaScript framework", correct: false }
            ],
            difficulty: "مشکل",
            hint: "یہ DOM اور styles کے لیے encapsulation فراہم کرتا ہے۔",
            explanation: "Shadow DOM آپ کو element کے ساتھ چھپا ہوا، encapsulated DOM tree attach کرنے کی اجازت دیتا ہے، style اور markup encapsulation فراہم کرتا ہے۔"
          }
        ]
      },
      expert: {
        en: [
          {
            question: "What is the difference between Critical Rendering Path and Resource Prioritization?",
            answers: [
              { text: "They are the same concept", correct: false },
              { text: "CRP focuses on initial render, Resource Prioritization on loading order", correct: true },
              { text: "CRP is for CSS, Resource Prioritization is for JS", correct: false },
              { text: "They are outdated concepts", correct: false }
            ],
            difficulty: "Expert",
            hint: "One is about rendering, the other about resource management.",
            explanation: "Critical Rendering Path optimizes the initial page render, while Resource Prioritization manages the loading order of various resources."
          },
          {
            question: "What is the purpose of Intersection Observer API?",
            answers: [
              { text: "To observe DOM mutations", correct: false },
              { text: "To asynchronously observe changes in intersection of elements with viewport", correct: true },
              { text: "To handle click events", correct: false },
              { text: "To manage local storage", correct: false }
            ],
            difficulty: "Expert",
            hint: "It's about detecting when elements come into view.",
            explanation: "Intersection Observer API provides a way to asynchronously observe changes in the intersection of a target element with an ancestor element or viewport."
          },
          {
            question: "What is the difference between Server-Side Rendering (SSR) and Static Site Generation (SSG)?",
            answers: [
              { text: "No difference", correct: false },
              { text: "SSR renders at request time, SSG at build time", correct: true },
              { text: "SSG is faster than SSR", correct: false },
              { text: "SSR is client-side, SSG is server-side", correct: false }
            ],
            difficulty: "Expert",
            hint: "It's about when the rendering happens.",
            explanation: "SSR renders pages on each request, while SSG pre-renders pages at build time."
          },
          {
            question: "What is a Memory Leak in JavaScript and how can it occur?",
            answers: [
              { text: "When variables are not declared", correct: false },
              { text: "When objects are not properly released from memory", correct: true },
              { text: "When functions are called too many times", correct: false },
              { text: "When CSS is not optimized", correct: false }
            ],
            difficulty: "Expert",
            hint: "It's about objects remaining in memory when they should be garbage collected.",
            explanation: "Memory leaks occur when objects are no longer needed but are still referenced, preventing garbage collection."
          },
          {
            question: "What is the purpose of Content Security Policy (CSP)?",
            answers: [
              { text: "To compress content", correct: false },
              { text: "To prevent XSS and other injection attacks", correct: true },
              { text: "To improve SEO", correct: false },
              { text: "To cache resources", correct: false }
            ],
            difficulty: "Expert",
            hint: "It's a security feature that helps prevent attacks.",
            explanation: "CSP is a security standard that helps prevent XSS, clickjacking, and other code injection attacks."
          },
          {
            question: "What is the difference between HTTP/1.1 and HTTP/2?",
            answers: [
              { text: "HTTP/2 is just faster", correct: false },
              { text: "HTTP/2 supports multiplexing, header compression, and server push", correct: true },
              { text: "HTTP/1.1 is more secure", correct: false },
              { text: "They use different ports", correct: false }
            ],
            difficulty: "Expert",
            hint: "HTTP/2 introduces several performance improvements.",
            explanation: "HTTP/2 introduces multiplexing, header compression, server push, and binary framing for better performance."
          },
          {
            question: "What is WebAssembly (WASM) and its primary use case?",
            answers: [
              { text: "A replacement for JavaScript", correct: false },
              { text: "A binary instruction format for near-native performance in browsers", correct: true },
              { text: "A new CSS framework", correct: false },
              { text: "A database technology", correct: false }
            ],
            difficulty: "Expert",
            hint: "It's about running compiled code in browsers at near-native speed.",
            explanation: "WebAssembly is a binary instruction format that enables high-performance applications in web browsers."
          },
          {
            question: "What is the purpose of Web Workers?",
            answers: [
              { text: "To style web pages", correct: false },
              { text: "To run scripts in background threads without blocking the main thread", correct: true },
              { text: "To manage databases", correct: false },
              { text: "To handle routing", correct: false }
            ],
            difficulty: "Expert",
            hint: "They allow parallel processing in web applications.",
            explanation: "Web Workers enable running JavaScript in background threads, preventing blocking of the main UI thread."
          },
          {
            question: "What is the difference between Optimistic and Pessimistic locking in web applications?",
            answers: [
              { text: "Optimistic is faster, Pessimistic is slower", correct: false },
              { text: "Optimistic assumes no conflicts, Pessimistic locks resources immediately", correct: true },
              { text: "They are the same thing", correct: false },
              { text: "Optimistic is for reads, Pessimistic for writes", correct: false }
            ],
            difficulty: "Expert",
            hint: "It's about different strategies for handling concurrent access to data.",
            explanation: "Optimistic locking assumes conflicts are rare and checks at commit time, while Pessimistic locking prevents conflicts by locking resources immediately."
          },
          {
            question: "What is the CAP Theorem and how does it apply to web development?",
            answers: [
              { text: "It's about CSS, API, and Performance", correct: false },
              { text: "Consistency, Availability, and Partition tolerance cannot all be guaranteed simultaneously", correct: true },
              { text: "It's a JavaScript design pattern", correct: false },
              { text: "It's about caching strategies", correct: false }
            ],
            difficulty: "Expert",
            hint: "It's a fundamental principle in distributed systems.",
            explanation: "CAP Theorem states that distributed systems can guarantee at most two of three properties: Consistency, Availability, and Partition tolerance."
          }
        ],
        ur: [
          {
            question: "Critical Rendering Path اور Resource Prioritization کے درمیان کیا فرق ہے؟",
            answers: [
              { text: "یہ ایک ہی concept ہیں", correct: false },
              { text: "CRP initial render پر focus کرتا ہے، Resource Prioritization loading order پر", correct: true },
              { text: "CRP CSS کے لیے ہے، Resource Prioritization JS کے لیے", correct: false },
              { text: "یہ پرانے concepts ہیں", correct: false }
            ],
            difficulty: "ماہر",
            hint: "ایک rendering کے بارے میں ہے، دوسرا resource management کے بارے میں۔",
            explanation: "Critical Rendering Path initial page render کو optimize کرتا ہے، جبکہ Resource Prioritization مختلف resources کے loading order کو manage کرتا ہے۔"
          },
          {
            question: "Intersection Observer API کا مقصد کیا ہے؟",
            answers: [
              { text: "DOM mutations کو observe کرنا", correct: false },
              { text: "elements کے viewport کے ساتھ intersection میں تبدیلیوں کو asynchronously observe کرنا", correct: true },
              { text: "click events کو handle کرنا", correct: false },
              { text: "local storage کو manage کرنا", correct: false }
            ],
            difficulty: "ماہر",
            hint: "یہ detect کرنے کے بارے میں ہے کہ elements کب view میں آتے ہیں۔",
            explanation: "Intersection Observer API target element کے ancestor element یا viewport کے ساتھ intersection میں تبدیلیوں کو asynchronously observe کرنے کا طریقہ فراہم کرتا ہے۔"
          },
          {
            question: "Server-Side Rendering (SSR) اور Static Site Generation (SSG) کے درمیان کیا فرق ہے؟",
            answers: [
              { text: "کوئی فرق نہیں", correct: false },
              { text: "SSR request time پر render کرتا ہے، SSG build time پر", correct: true },
              { text: "SSG، SSR سے تیز ہے", correct: false },
              { text: "SSR client-side ہے، SSG server-side ہے", correct: false }
            ],
            difficulty: "ماہر",
            hint: "یہ اس بارے میں ہے کہ rendering کب ہوتی ہے۔",
            explanation: "SSR ہر request پر pages render کرتا ہے، جبکہ SSG build time پر pages کو pre-render کرتا ہے۔"
          },
          {
            question: "JavaScript میں Memory Leak کیا ہے اور یہ کیسے ہو سکتا ہے؟",
            answers: [
              { text: "جب variables declare نہیں ہوتے", correct: false },
              { text: "جب objects کو memory سے properly release نہیں کیا جاتا", correct: true },
              { text: "جب functions کو بہت زیادہ بار call کیا جاتا ہے", correct: false },
              { text: "جب CSS optimize نہیں ہوتا", correct: false }
            ],
            difficulty: "ماہر",
            hint: "یہ objects کے memory میں رہنے کے بارے میں ہے جب انہیں garbage collect ہونا چاہیے۔",
            explanation: "Memory leaks تب ہوتے ہیں جب objects کی ضرورت نہیں رہتی لیکن وہ still referenced ہوتے ہیں، garbage collection کو روکتے ہیں۔"
          },
          {
            question: "Content Security Policy (CSP) کا مقصد کیا ہے؟",
            answers: [
              { text: "content کو compress کرنا", correct: false },
              { text: "XSS اور دیگر injection attacks کو روکنا", correct: true },
              { text: "SEO بہتر بنانا", correct: false },
              { text: "resources کو cache کرنا", correct: false }
            ],
            difficulty: "ماہر",
            hint: "یہ ایک security feature ہے جو attacks کو روکنے میں مدد کرتا ہے۔",
            explanation: "CSP ایک security standard ہے جو XSS، clickjacking، اور دیگر code injection attacks کو روکنے میں مدد کرتا ہے۔"
          },
          {
            question: "HTTP/1.1 اور HTTP/2 کے درمیان کیا فرق ہے؟",
            answers: [
              { text: "HTTP/2 صرف تیز ہے", correct: false },
              { text: "HTTP/2 multiplexing، header compression، اور server push کو support کرتا ہے", correct: true },
              { text: "HTTP/1.1 زیادہ secure ہے", correct: false },
              { text: "یہ مختلف ports استعمال کرتے ہیں", correct: false }
            ],
            difficulty: "ماہر",
            hint: "HTTP/2 کئی performance improvements متعارف کراتا ہے۔",
            explanation: "HTTP/2 بہتر performance کے لیے multiplexing، header compression، server push، اور binary framing متعارف کراتا ہے۔"
          },
          {
            question: "WebAssembly (WASM) کیا ہے اور اس کا بنیادی استعمال کیا ہے؟",
            answers: [
              { text: "JavaScript کی replacement", correct: false },
              { text: "browsers میں near-native performance کے لیے binary instruction format", correct: true },
              { text: "نیا CSS framework", correct: false },
              { text: "database technology", correct: false }
            ],
            difficulty: "ماہر",
            hint: "یہ browsers میں near-native speed پر compiled code چلانے کے بارے میں ہے۔",
            explanation: "WebAssembly ایک binary instruction format ہے جو web browsers میں high-performance applications کو ممکن بناتا ہے۔"
          },
          {
            question: "Web Workers کا مقصد کیا ہے؟",
            answers: [
              { text: "web pages کو style کرنا", correct: false },
              { text: "main thread کو block کیے بغیر background threads میں scripts چلانا", correct: true },
              { text: "databases کو manage کرنا", correct: false },
              { text: "routing کو handle کرنا", correct: false }
            ],
            difficulty: "ماہر",
            hint: "یہ web applications میں parallel processing کی اجازت دیتے ہیں۔",
            explanation: "Web Workers JavaScript کو background threads میں چلانے کی اجازت دیتے ہیں، main UI thread کو block کرنے سے روکتے ہیں۔"
          },
          {
            question: "web applications میں Optimistic اور Pessimistic locking کے درمیان کیا فرق ہے؟",
            answers: [
              { text: "Optimistic تیز ہے، Pessimistic سست ہے", correct: false },
              { text: "Optimistic conflicts نہیں ہونے کا فرض کرتا، Pessimistic فوری طور پر resources کو lock کرتا ہے", correct: true },
              { text: "یہ ایک ہی چیز ہیں", correct: false },
              { text: "Optimistic reads کے لیے ہے، Pessimistic writes کے لیے", correct: false }
            ],
            difficulty: "ماہر",
            hint: "یہ data تک concurrent access کو handle کرنے کی مختلف strategies کے بارے میں ہے۔",
            explanation: "Optimistic locking فرض کرتا ہے کہ conflicts نادر ہیں اور commit time پر check کرتا ہے، جبکہ Pessimistic locking فوری طور پر resources کو lock کر کے conflicts کو روکتا ہے۔"
          },
          {
            question: "CAP Theorem کیا ہے اور یہ web development میں کیسے لاگو ہوتا ہے؟",
            answers: [
              { text: "یہ CSS، API، اور Performance کے بارے میں ہے", correct: false },
              { text: "Consistency، Availability، اور Partition tolerance کو بیک وقت guarantee نہیں کیا جا سکتا", correct: true },
              { text: "یہ JavaScript design pattern ہے", correct: false },
              { text: "یہ caching strategies کے بارے میں ہے", correct: false }
            ],
            difficulty: "ماہر",
            hint: "یہ distributed systems میں بنیادی اصول ہے۔",
            explanation: "CAP Theorem بتاتا ہے کہ distributed systems زیادہ سے زیادہ تین میں سے دو properties guarantee کر سکتے ہیں: Consistency، Availability، اور Partition tolerance۔"
          }
        ]
      }
    };

    this.translations = {
      en: {
        next: "Next",
        again: "Try Again",
        score: "You scored",
        question: "Question",
        of: "of",
        hint: "Hint",
        showHint: "Show Hint",
        hideHint: "Hide Hint",
        correct: "Correct",
        incorrect: "Incorrect",
        accuracy: "Accuracy",
        quizComplete: "Quiz Complete!",
        congratulations: "Congratulations!",
        wellDone: "Well Done!",
        tryAgain: "Better Luck Next Time!",
        perfectScore: "Perfect Score!",
        timeUp: "Time's Up!",
        appTitle: "Web Dev QuizMaster",
        selectDifficulty: "Select Difficulty Level",
        selectDifficultySubtitle: "Choose your challenge level and test your web development knowledge!",
        easyTitle: "Easy",
        easyDesc: "HTML, CSS basics, and fundamental concepts",
        mediumTitle: "Medium", 
        mediumDesc: "JavaScript, frameworks, and intermediate topics",
        hardTitle: "Hard",
        hardDesc: "Advanced concepts, algorithms, and best practices",
        expertTitle: "Expert",
        expertDesc: "System design, architecture, and expert-level topics",
        newLevel: "New Level",
        avgTime: "Avg Time",
        skip: "Skip",
        submit: "Submit Quiz",
        skipped: "Skipped",
        answered: "Answered",
        unanswered: "Unanswered",
        current: "Current",
        navTitle: "Question Navigation",
        skipText: "Question skipped"
      },
      ur: {
        next: "اگلا",
        again: "دوبارہ کوشش کریں",
        score: "آپ نے اسکور کیا",
        question: "سوال",
        of: "سے",
        hint: "اشارہ",
        showHint: "اشارہ دکھائیں",
        hideHint: "اشارہ چھپائیں",
        correct: "صحیح",
        incorrect: "غلط",
        accuracy: "درستگی",
        quizComplete: "کوئز مکمل!",
        congratulations: "مبارک ہو!",
        wellDone: "بہت بہترین!",
        tryAgain: "اگلی بار بہتر کوشش!",
        perfectScore: "کامل اسکور!",
        timeUp: "وقت ختم!",
        appTitle: "ویب ڈیو کوئز ماسٹر",
        selectDifficulty: "مشکل کی سطح منتخب کریں",
        selectDifficultySubtitle: "اپنا چیلنج لیول منتخب کریں اور اپنے ویب ڈیولپمنٹ کے علم کو آزمائیں!",
        easyTitle: "آسان",
        easyDesc: "HTML، CSS بنیادی باتیں، اور بنیادی تصورات",
        mediumTitle: "درمیانہ",
        mediumDesc: "JavaScript، فریم ورکس، اور درمیانی موضوعات",
        hardTitle: "مشکل",
        hardDesc: "ایڈوانس تصورات، الگورتھم، اور بہترین طریقے",
        expertTitle: "ماہر",
        expertDesc: "سسٹم ڈیزائن، آرکیٹیکچر، اور ماہرانہ موضوعات",
        newLevel: "نیا لیول",
        avgTime: "اوسط وقت",
        skip: "چھوڑیں",
        submit: "کوئز جمع کریں",
        skipped: "چھوڑے گئے",
        answered: "جواب دیے گئے",
        unanswered: "بغیر جواب",
        current: "موجودہ",
        navTitle: "سوال نیویگیشن",
        skipText: "سوال چھوڑ دیا گیا"
      }
    };

    // Timer durations for each difficulty level (in seconds)
    this.timerDurations = {
      easy: 30,
      medium: 25,
      hard: 20,
      expert: 15
    };

    this.state = {
      lang: "en",
      selectedDifficulty: "easy",
      currentQuestionIndex: 0,
      score: 0,
      correctAnswers: 0,
      incorrectAnswers: 0,
      skippedAnswers: 0,
      questions: [],
      userAnswers: [], // Track user answers for each question
      timer: 30,
      timerInterval: null,
      hintShown: false,
      theme: localStorage.getItem('quiz-theme') || 'light',
      questionStartTime: 0,
      totalTimeTaken: 0,
      averageTime: 0,
      quizSubmitted: false
    };

    this.elements = this.initializeElements();
    this.initializeEventListeners();
    this.setTheme(this.state.theme);
    this.showDifficultySelection();
  }

  initializeElements() {
    return {
      difficultySelection: document.getElementById("difficulty-selection"),
      progressSection: document.querySelector(".progress-section"),
      quizNav: document.getElementById("quiz-nav"),
      quizContainer: document.querySelector(".quiz-container"),
      resultsSection: document.getElementById("results-section"),
      questionElement: document.getElementById("question"),
      answerButtons: document.getElementById("answer-buttons"),
      nextButton: document.getElementById("next-btn"),
      skipButton: document.getElementById("skip-btn"),
      submitButton: document.getElementById("submit-btn"),
      questionCounter: document.getElementById("question-counter"),
      answeredCount: document.getElementById("answered-count"),
      scoreDisplay: document.getElementById("score-display"),
      progressFill: document.getElementById("progress-fill"),
      timer: document.getElementById("timer"),
      difficulty: document.getElementById("difficulty"),
      hintBtn: document.getElementById("hint-btn"),
      finalScore: document.getElementById("final-score"),
      correctAnswersEl: document.getElementById("correct-answers"),
      incorrectAnswersEl: document.getElementById("incorrect-answers"),
      skippedAnswersEl: document.getElementById("skipped-answers"),
      accuracy: document.getElementById("accuracy"),
      avgTimeEl: document.getElementById("avg-time"),
      questionGrid: document.getElementById("question-grid"),
      appTitle: document.getElementById("app-title"),
      nextText: document.getElementById("next-text"),
      hintText: document.getElementById("hint-text"),
      restartText: document.getElementById("restart-text"),
      resultsTitle: document.getElementById("results-title"),
      completedDifficulty: document.getElementById("completed-difficulty"),
      currentDifficulty: document.getElementById("current-difficulty"),
      newLevelText: document.getElementById("new-level-text"),
      skipText: document.getElementById("skip-text"),
      submitText: document.getElementById("submit-text"),
      navTitle: document.getElementById("nav-title"),
      legendAnswered: document.getElementById("legend-answered"),
      legendUnanswered: document.getElementById("legend-unanswered"),
      legendCurrent: document.getElementById("legend-current")
    };
  }

  initializeEventListeners() {
    this.elements.nextButton.addEventListener("click", () => this.handleNextButton());
    
    // Keyboard navigation
    document.addEventListener('keydown', (e) => {
      if (this.state.quizSubmitted) return;
      
      if (e.key === 'Enter' && this.elements.nextButton.style.display === 'flex') {
        this.handleNextButton();
      }
      if (e.key >= '1' && e.key <= '4') {
        const buttons = this.elements.answerButtons.querySelectorAll('.btn:not([disabled])');
        const index = parseInt(e.key) - 1;
        if (buttons[index]) {
          buttons[index].click();
        }
      }
      if (e.key === 'h' || e.key === 'H') {
        this.showHint();
      }
      if (e.key === 's' || e.key === 'S') {
        this.skipQuestion();
      }
    });
  }

  translate(key) {
    return this.translations[this.state.lang][key] || key;
  }

  setLang(lang) {
    this.state.lang = lang;
    document.documentElement.dir = lang === 'ur' ? 'rtl' : 'ltr';
    this.updateUITexts();
    
    // Update questions if currently in quiz
    if (this.state.questions.length > 0) {
      this.state.questions = this.allQuestions[this.state.selectedDifficulty][lang];
      if (this.state.currentQuestionIndex < this.state.questions.length) {
        this.showQuestion();
      }
    }
  }

  updateUITexts() {
    // Update all translatable texts
    const elementsToUpdate = {
      'app-title': 'appTitle',
      'select-difficulty-title': 'selectDifficulty',
      'select-difficulty-subtitle': 'selectDifficultySubtitle',
      'easy-title': 'easyTitle',
      'easy-desc': 'easyDesc',
      'medium-title': 'mediumTitle',
      'medium-desc': 'mediumDesc',
      'hard-title': 'hardTitle',
      'hard-desc': 'hardDesc',
      'expert-title': 'expertTitle',
      'expert-desc': 'expertDesc'
    };

    Object.entries(elementsToUpdate).forEach(([id, key]) => {
      const element = document.getElementById(id);
      if (element) {
        element.textContent = this.translate(key);
      }
    });

    if (this.elements.nextText) this.elements.nextText.textContent = this.translate('next');
    if (this.elements.hintText) this.elements.hintText.textContent = this.translate('hint');
    if (this.elements.restartText) this.elements.restartText.textContent = this.translate('again');
    if (this.elements.newLevelText) this.elements.newLevelText.textContent = this.translate('newLevel');
    if (this.elements.skipText) this.elements.skipText.textContent = this.translate('skip');
    if (this.elements.submitText) this.elements.submitText.textContent = this.translate('submit');
    if (this.elements.navTitle) this.elements.navTitle.textContent = this.translate('navTitle');
    if (this.elements.legendAnswered) this.elements.legendAnswered.textContent = this.translate('answered');
    if (this.elements.legendUnanswered) this.elements.legendUnanswered.textContent = this.translate('unanswered');
    if (this.elements.legendCurrent) this.elements.legendCurrent.textContent = this.translate('current');
  }

  toggleTheme() {
    this.state.theme = this.state.theme === 'light' ? 'dark' : 'light';
    this.setTheme(this.state.theme);
  }

  setTheme(theme) {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('quiz-theme', theme);
    const themeIcon = document.querySelector('#theme-toggle i');
    if (themeIcon) {
      themeIcon.className = theme === 'light' ? 'fas fa-moon' : 'fas fa-sun';
    }
  }

  showDifficultySelection() {
    this.elements.difficultySelection.style.display = 'block';
    this.elements.progressSection.style.display = 'none';
    this.elements.quizNav.style.display = 'none';
    this.elements.quizContainer.style.display = 'none';
    this.elements.resultsSection.style.display = 'none';
    this.updateUITexts();
  }

  selectDifficulty(difficulty) {
    this.state.selectedDifficulty = difficulty;
    this.state.questions = this.allQuestions[difficulty][this.state.lang];
    this.startQuiz();
  }

  startQuiz() {
    this.state.currentQuestionIndex = 0;
    this.state.score = 0;
    this.state.correctAnswers = 0;
    this.state.incorrectAnswers = 0;
    this.state.skippedAnswers = 0;
    this.state.totalTimeTaken = 0;
    this.state.averageTime = 0;
    this.state.quizSubmitted = false;
    this.state.questions = this.allQuestions[this.state.selectedDifficulty][this.state.lang];
    
    // Initialize user answers array
    this.state.userAnswers = new Array(this.state.questions.length).fill(null);
    
    this.elements.difficultySelection.style.display = 'none';
    this.elements.progressSection.style.display = 'block';
    this.elements.quizNav.style.display = 'block';
    this.elements.quizContainer.style.display = 'block';
    this.elements.resultsSection.style.display = 'none';
    
    this.createQuestionNavigation();
    this.updateProgress();
    this.showQuestion();
  }

  createQuestionNavigation() {
    this.elements.questionGrid.innerHTML = '';
    
    for (let i = 0; i < this.state.questions.length; i++) {
      const navBtn = document.createElement('button');
      navBtn.className = 'question-nav-btn unanswered';
      navBtn.textContent = i + 1;
      navBtn.onclick = () => this.navigateToQuestion(i);
      this.elements.questionGrid.appendChild(navBtn);
    }
    
    this.updateQuestionNavigation();
  }

  updateQuestionNavigation() {
    const navButtons = this.elements.questionGrid.querySelectorAll('.question-nav-btn');
    
    navButtons.forEach((btn, index) => {
      btn.classList.remove('current', 'answered', 'unanswered');
      
      if (index === this.state.currentQuestionIndex) {
        btn.classList.add('current');
      } else if (this.state.userAnswers[index] !== null) {
        btn.classList.add('answered');
      } else {
        btn.classList.add('unanswered');
      }
    });
  }

  navigateToQuestion(questionIndex) {
    if (this.state.quizSubmitted) return;
    
    this.clearTimer();
    this.state.currentQuestionIndex = questionIndex;
    this.showQuestion();
  }

  showQuestion() {
    this.resetState();
    
    const currentQuestion = this.state.questions[this.state.currentQuestionIndex];
    this.elements.questionElement.innerHTML = currentQuestion.question;
    this.elements.difficulty.textContent = currentQuestion.difficulty;
    this.elements.difficulty.className = `difficulty-badge ${this.state.selectedDifficulty}`;
    
    this.state.questionStartTime = Date.now();
    this.startTimer();
    this.state.hintShown = false;
    this.elements.hintBtn.innerHTML = `<i class="fas fa-lightbulb"></i> <span>${this.translate('hint')}</span>`;

    // Create answer buttons
    currentQuestion.answers.forEach((answer, index) => {
      const button = document.createElement("button");
      button.innerHTML = `<span class="answer-letter">${String.fromCharCode(65 + index)}</span> ${answer.text}`;
      button.classList.add("btn");
      button.dataset.answerIndex = index;
      
      if (answer.correct) {
        button.dataset.correct = answer.correct;
      }
      
      // Check if this question was already answered
      if (this.state.userAnswers[this.state.currentQuestionIndex] !== null) {
        const userAnswer = this.state.userAnswers[this.state.currentQuestionIndex];
        if (index === userAnswer.selectedIndex) {
          button.classList.add(userAnswer.isCorrect ? "correct" : "incorrect");
        }
        if (answer.correct) {
          button.classList.add("correct");
        }
        button.disabled = true;
        this.elements.nextButton.style.display = "flex";
        this.elements.skipButton.style.display = "none";
        this.clearTimer();
      } else {
        button.addEventListener("click", (e) => this.selectAnswer(e, answer.correct, index));
      }
      
      this.elements.answerButtons.appendChild(button);
    });

    this.updateProgress();
    this.updateQuestionNavigation();
    this.checkSubmitAvailability();
  }

  resetState() {
    this.elements.nextButton.style.display = "none";
    this.elements.skipButton.style.display = "block";
    this.elements.hintBtn.style.display = "block";
    this.clearTimer();
    
    while (this.elements.answerButtons.firstChild) {
      this.elements.answerButtons.removeChild(this.elements.answerButtons.firstChild);
    }
  }

  startTimer() {
    this.state.timer = this.timerDurations[this.state.selectedDifficulty];
    this.elements.timer.textContent = `${this.state.timer}s`;
    this.elements.timer.style.backgroundColor = 'var(--warning-color)';
    
    this.state.timerInterval = setInterval(() => {
      this.state.timer--;
      this.elements.timer.textContent = `${this.state.timer}s`;
      
      if (this.state.timer <= 5) {
        this.elements.timer.style.backgroundColor = 'var(--error-color)';
      }
      
      if (this.state.timer <= 0) {
        this.clearTimer();
        this.timeUp();
      }
    }, 1000);
  }

  clearTimer() {
    if (this.state.timerInterval) {
      clearInterval(this.state.timerInterval);
      this.state.timerInterval = null;
    }
  }

  timeUp() {
    const buttons = this.elements.answerButtons.querySelectorAll('.btn');
    buttons.forEach(button => {
      button.disabled = true;
      if (button.dataset.correct === "true") {
        button.classList.add("correct");
      }
    });
    
    this.state.incorrectAnswers++;
    this.recordQuestionTime();
    this.elements.nextButton.style.display = "flex";
    this.elements.skipButton.style.display = "none";
    this.elements.hintBtn.style.display = "none";
    
    this.showNotification(this.translate('timeUp'), 'error');
  }

  selectAnswer(e, isCorrect, answerIndex) {
    if (this.state.userAnswers[this.state.currentQuestionIndex] !== null) return;
    
    this.clearTimer();
    this.recordQuestionTime();
    
    const selectedBtn = e.target.closest('.btn');
    
    // Store user answer
    this.state.userAnswers[this.state.currentQuestionIndex] = {
      selectedIndex: answerIndex,
      isCorrect: isCorrect,
      timeTaken: (Date.now() - this.state.questionStartTime) / 1000
    };
    
    if (isCorrect) {
      selectedBtn.classList.add("correct");
      this.state.correctAnswers++;
      this.showNotification(this.translate('correct'), 'success');
      this.playSound('correct');
    } else {
      selectedBtn.classList.add("incorrect");
      this.state.incorrectAnswers++;
      this.showNotification(this.translate('incorrect'), 'error');
      this.playSound('incorrect');
    }

    // Show correct answer and disable all buttons
    Array.from(this.elements.answerButtons.children).forEach(button => {
      if (button.dataset.correct === "true") {
        button.classList.add("correct");
      }
      button.disabled = true;
    });

    this.elements.nextButton.style.display = "flex";
    this.elements.skipButton.style.display = "none";
    this.elements.hintBtn.style.display = "none";
    
    this.updateProgress();
    this.updateQuestionNavigation();
    this.checkSubmitAvailability();
    
    // Show explanation after a delay
    const currentQuestion = this.state.questions[this.state.currentQuestionIndex];
    setTimeout(() => {
      if (currentQuestion.explanation) {
        this.showExplanation(currentQuestion.explanation);
      }
    }, 1000);
  }

  recordQuestionTime() {
    const timeSpent = (Date.now() - this.state.questionStartTime) / 1000;
    this.state.totalTimeTaken += timeSpent;
    this.state.averageTime = this.state.totalTimeTaken / (this.state.currentQuestionIndex + 1);
  }

  skipQuestion() {
    if (this.state.userAnswers[this.state.currentQuestionIndex] !== null) return;
    
    this.clearTimer();
    this.state.skippedAnswers++;
    
    // Mark as skipped but don't store answer yet
    this.elements.quizContainer.classList.add('question-skipped');
    setTimeout(() => {
      this.elements.quizContainer.classList.remove('question-skipped');
    }, 300);
    
    this.showNotification(this.translate('skipText'), 'info');
    this.moveToNextUnanswered();
  }

  moveToNextUnanswered() {
    // Find next unanswered question
    for (let i = 0; i < this.state.questions.length; i++) {
      const nextIndex = (this.state.currentQuestionIndex + 1 + i) % this.state.questions.length;
      if (this.state.userAnswers[nextIndex] === null) {
        this.state.currentQuestionIndex = nextIndex;
        this.showQuestion();
        return;
      }
    }
    
    // If all questions are answered, show submit option
    this.checkSubmitAvailability();
  }

  checkSubmitAvailability() {
    const answeredCount = this.state.userAnswers.filter(answer => answer !== null).length;
    this.elements.answeredCount.textContent = `${this.translate('answered')}: ${answeredCount}/${this.state.questions.length}`;
    
    if (answeredCount === this.state.questions.length) {
      this.elements.submitButton.style.display = "flex";
      this.elements.submitButton.classList.add('submit-ready');
      this.elements.skipButton.style.display = "none";
    } else {
      this.elements.submitButton.style.display = "none";
      this.elements.submitButton.classList.remove('submit-ready');
    }
  }

  submitQuiz() {
    this.state.quizSubmitted = true;
    this.clearTimer();
    
    // Calculate final scores
    this.state.score = this.state.correctAnswers;
    this.state.skippedAnswers = this.state.userAnswers.filter(answer => answer === null).length;
    
    this.showScore();
  }

  updateProgress() {
    const answeredCount = this.state.userAnswers.filter(answer => answer !== null).length;
    const progress = (answeredCount / this.state.questions.length) * 100;
    this.elements.progressFill.style.width = `${progress}%`;
    
    this.elements.questionCounter.textContent = 
      `${this.translate('question')} ${this.state.currentQuestionIndex + 1} ${this.translate('of')} ${this.state.questions.length}`;
    
    this.elements.scoreDisplay.textContent = `Score: ${this.state.correctAnswers}`;
    this.elements.answeredCount.textContent = `${this.translate('answered')}: ${answeredCount}/${this.state.questions.length}`;
    
    // Update current difficulty display
    this.elements.currentDifficulty.textContent = this.state.selectedDifficulty;
    this.elements.currentDifficulty.className = `current-difficulty ${this.state.selectedDifficulty}`;
  }

  showHint() {
    const currentQuestion = this.state.questions[this.state.currentQuestionIndex];
    
    if (!this.state.hintShown && currentQuestion.hint) {
      this.state.hintShown = true;
      this.showNotification(currentQuestion.hint, 'info');
      this.elements.hintBtn.innerHTML = `<i class="fas fa-lightbulb"></i> <span>${this.translate('hideHint')}</span>`;
    }
  }

  showExplanation(explanation) {
    const explanationDiv = document.createElement('div');
    explanationDiv.className = 'explanation';
    explanationDiv.innerHTML = `
      <div class="explanation-content">
        <i class="fas fa-info-circle"></i>
        <p>${explanation}</p>
      </div>
    `;
    
    explanationDiv.style.cssText = `
      background: var(--bg-secondary);
      border: 1px solid var(--border-color);
      border-radius: var(--radius-lg);
      padding: 1rem;
      margin-top: 1rem;
      animation: fadeInUp 0.3s ease;
    `;
    
    this.elements.answerButtons.appendChild(explanationDiv);
  }

  showNotification(message, type) {
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.textContent = message;
    
    const colors = {
      success: 'var(--success-color)',
      error: 'var(--error-color)',
      info: 'var(--primary-color)'
    };
    
    notification.style.cssText = `
      position: fixed;
      top: 20px;
      right: 20px;
      background: ${colors[type]};
      color: white;
      padding: 1rem 1.5rem;
      border-radius: var(--radius-lg);
      box-shadow: var(--shadow-lg);
      z-index: 1000;
      animation: slideInRight 0.3s ease;
      max-width: 300px;
    `;
    
    document.body.appendChild(notification);
    
    setTimeout(() => {
      notification.style.animation = 'slideOutRight 0.3s ease';
      setTimeout(() => {
        if (document.body.contains(notification)) {
          document.body.removeChild(notification);
        }
      }, 300);
    }, 3000);
  }

  playSound(type) {
    try {
      const audioContext = new (window.AudioContext || window.webkitAudioContext)();
      const oscillator = audioContext.createOscillator();
      const gainNode = audioContext.createGain();
      
      oscillator.connect(gainNode);
      gainNode.connect(audioContext.destination);
      
      if (type === 'correct') {
        oscillator.frequency.setValueAtTime(523.25, audioContext.currentTime); // C5
        oscillator.frequency.setValueAtTime(659.25, audioContext.currentTime + 0.1); // E5
        oscillator.frequency.setValueAtTime(783.99, audioContext.currentTime + 0.2); // G5
      } else {
        oscillator.frequency.setValueAtTime(200, audioContext.currentTime);
        oscillator.frequency.setValueAtTime(150, audioContext.currentTime + 0.1);
      }
      
      gainNode.gain.setValueAtTime(0.3, audioContext.currentTime);
      gainNode.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + 0.3);
      
      oscillator.start(audioContext.currentTime);
      oscillator.stop(audioContext.currentTime + 0.3);
    } catch (error) {
      // Silently handle audio context errors
      console.log('Audio not supported');
    }
  }

  showScore() {
    this.clearTimer();
    this.elements.progressSection.style.display = 'none';
    this.elements.quizNav.style.display = 'none';
    this.elements.quizContainer.style.display = 'none';
    this.elements.resultsSection.style.display = 'block';
    
    const totalQuestions = this.state.questions.length;
    const accuracy = Math.round((this.state.correctAnswers / totalQuestions) * 100);
    
    this.elements.finalScore.textContent = this.state.score;
    this.elements.correctAnswersEl.textContent = `${this.state.correctAnswers} ${this.translate('correct')}`;
    this.elements.incorrectAnswersEl.textContent = `${this.state.incorrectAnswers} ${this.translate('incorrect')}`;
    this.elements.skippedAnswersEl.textContent = `${this.state.skippedAnswers} ${this.translate('skipped')}`;
    this.elements.accuracy.textContent = `${accuracy}% ${this.translate('accuracy')}`;
    this.elements.avgTimeEl.textContent = `${this.translate('avgTime')}: ${Math.round(this.state.averageTime)}s`;
    this.elements.completedDifficulty.textContent = this.state.selectedDifficulty.charAt(0).toUpperCase() + this.state.selectedDifficulty.slice(1);
    
    // Update results title based on performance
    let titleText = this.translate('quizComplete');
    if (accuracy === 100) {
      titleText = this.translate('perfectScore');
    } else if (accuracy >= 80) {
      titleText = this.translate('wellDone');
    } else if (accuracy >= 60) {
      titleText = this.translate('congratulations');
    } else {
      titleText = this.translate('tryAgain');
    }
    
    this.elements.resultsTitle.textContent = titleText;
    
    // Show confetti for good performance
    if (accuracy >= 80) {
      this.showConfetti();
    }
  }

  showConfetti() {
    const canvas = document.getElementById('confetti-canvas');
    const ctx = canvas.getContext('2d');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    
    const confetti = [];
    const colors = ['#ff6b6b', '#4ecdc4', '#45b7d1', '#f9ca24', '#f0932b', '#eb4d4b', '#6c5ce7'];
    
    for (let i = 0; i < 100; i++) {
      confetti.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height - canvas.height,
        w: Math.random() * 10 + 5,
        h: Math.random() * 10 + 5,
        color: colors[Math.floor(Math.random() * colors.length)],
        speed: Math.random() * 3 + 2,
        angle: Math.random() * 360
      });
    }
    
    function animate() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      confetti.forEach((piece, index) => {
        piece.y += piece.speed;
        piece.angle += 2;
        
        ctx.save();
        ctx.translate(piece.x + piece.w / 2, piece.y + piece.h / 2);
        ctx.rotate(piece.angle * Math.PI / 180);
        ctx.fillStyle = piece.color;
        ctx.fillRect(-piece.w / 2, -piece.h / 2, piece.w, piece.h);
        ctx.restore();
        
        if (piece.y > canvas.height) {
          confetti.splice(index, 1);
        }
      });
      
      if (confetti.length > 0) {
        requestAnimationFrame(animate);
      }
    }
    
    animate();
    
    setTimeout(() => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
    }, 5000);
  }

  handleNextButton() {
    this.moveToNextUnanswered();
  }

  restartCurrentLevel() {
    this.startQuiz();
  }
}

// Global functions for HTML event handlers
function setLang(lang) {
  window.quizApp.setLang(lang);
}

function toggleTheme() {
  window.quizApp.toggleTheme();
}

function showHint() {
  window.quizApp.showHint();
}

function selectDifficulty(difficulty) {
  window.quizApp.selectDifficulty(difficulty);
}

function skipQuestion() {
  window.quizApp.skipQuestion();
}

function submitQuiz() {
  window.quizApp.submitQuiz();
}

function restartCurrentLevel() {
  window.quizApp.restartCurrentLevel();
}

function showDifficultySelection() {
  window.quizApp.showDifficultySelection();
}

// Initialize the app when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
  window.quizApp = new WebDevQuizApp();
});

// Add CSS animations
const style = document.createElement('style');
style.textContent = `
  @keyframes slideInRight {
    from {
      transform: translateX(100%);
      opacity: 0;
    }
    to {
      transform: translateX(0);
      opacity: 1;
    }
  }
  
  @keyframes slideOutRight {
    from {
      transform: translateX(0);
      opacity: 1;
    }
    to {
      transform: translateX(100%);
      opacity: 0;
    }
  }
  
  @keyframes fadeInUp {
    from {
      opacity: 0;
      transform: translateY(20px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
  
  .answer-letter {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: 24px;
    height: 24px;
    background: var(--primary-color);
    color: white;
    border-radius: 50%;
    font-size: 0.75rem;
    font-weight: 600;
    margin-right: 0.5rem;
    flex-shrink: 0;
  }
  
  [dir="rtl"] .answer-letter {
    margin-right: 0;
    margin-left: 0.5rem;
  }
  
  .explanation-content {
    display: flex;
    align-items: flex-start;
    gap: 0.75rem;
  }
  
  .explanation-content i {
    color: var(--primary-color);
    margin-top: 0.25rem;
    flex-shrink: 0;
  }
  
  .explanation-content p {
    margin: 0;
    color: var(--text-secondary);
    line-height: 1.5;
  }
  
  .difficulty-card {
    transition: all 0.3s ease;
  }
  
  .difficulty-card:hover {
    transform: translateY(-8px);
  }
  
  .notification {
    font-weight: 500;
    border-left: 4px solid rgba(255, 255, 255, 0.5);
  }
  
  .current-difficulty.easy {
    background: var(--easy-color);
  }
  
  .current-difficulty.medium {
    background: var(--medium-color);
  }
  
  .current-difficulty.hard {
    background: var(--hard-color);
  }
  
  .current-difficulty.expert {
    background: var(--expert-color);
  }
`;
document.head.appendChild(style);