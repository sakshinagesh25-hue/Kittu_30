const programming = [
    { id: 1, title: "What is Programming?", content: "Programming is like giving instructions to a robot. You tell the computer exactly what to do using special words!", diagram: "🤖 + 📜 = 🍰", code: "print('Hello!');", quiz: { q: "What is programming?", a: ["Giving instructions", "Takes naps", "Eating"], c: 0 } },
    { id: 2, title: "History of Coding", content: "From huge machines to tiny smartwatches, coding has come a long way!", diagram: "📠 -> ⌚", code: "// Ada Lovelace was the first!", quiz: { q: "Who was the first coder?", a: ["Ada Lovelace", "Einstein", "Kittu"], c: 0 } },
    { id: 3, title: "Algorithms", content: "An algorithm is just a step-by-step plan. Like a recipe!", diagram: "1️⃣ -> 2️⃣ -> 3️⃣", code: "// Step by step plan", quiz: { q: "What is an algorithm?", a: ["A plan", "A bug", "A screen"], c: 0 } },
    { id: 4, title: "Flowcharts", content: "Visual maps of logic using boxes and arrows.", diagram: "⏹️ -> 🔽", code: "// If (yes) { ... }", quiz: { q: "What is a flowchart?", a: ["A map", "A flow of water", "A chart of cats"], c: 0 } },
    { id: 5, title: "Logical Thinking", content: "Using 'If' and 'Then' to make decisions.", diagram: "❓ -> ✅", code: "if (hungry) { eat(); }", quiz: { q: "Logic uses...", a: ["If/Then", "Maybe/Perhaps", "Always/Never"], c: 0 } },
    { id: 6, title: "Problem Solving", content: "Breaking big tasks into small, easy pieces!", diagram: "🍰 -> 🧁🧁🧁", code: "// Solve one bit at a time", quiz: { q: "How to solve big problems?", a: ["Break into small pieces", "Cry", "Ignore them"], c: 0 } },
    { id: 7, title: "Input & Output", content: "Computers take in data (input) and give back results (output).", diagram: "⌨️ -> 💻 -> 🖥️", code: "name = input(); print(name);", quiz: { q: "What is typing on a keyboard?", a: ["Output", "Input", "Nothing"], c: 1 } },
    { id: 8, title: "Variables", content: "Boxes that store information like names or numbers.", diagram: "📦 'Name' = 'Kittu'", code: "let name = 'Kittu';", quiz: { q: "What is a variable?", a: ["A box for data", "A type of cat", "A computer screen"], c: 0 } },
    { id: 9, title: "Data Types", content: "Numbers, Text (Strings), and Bulbs (Booleans - True/False).", diagram: "🔢 '🔠' 💡", code: "let age = 10; let isCute = true;", quiz: { q: "Which one is a string?", a: ["10", "'Hello'", "true"], c: 1 } },
    { id: 10, title: "Operators", content: "Math in coding! +, -, *, and /.", diagram: "➕ ➖ ✖️ ➗", code: "let total = 5 + 5;", quiz: { q: "What is 10 * 2 in coding?", a: ["20", "12", "8"], c: 0 } },
    { id: 11, title: "Comparisons", content: "Is 10 bigger than 5? We use > and <.", diagram: "📏 10 > 5", code: "if (score > 5) { win(); }", quiz: { q: "Is 5 > 10?", a: ["Yes", "No", "Maybe"], c: 1 } },
    { id: 12, title: "Boolean Logic", content: "AND, OR, and NOT. Combining decisions!", diagram: "💡 && 💡", code: "if (isWeekend && isSunny) { play(); }", quiz: { q: "When does AND work?", a: ["Both are true", "One is true", "Neither are true"], c: 0 } },
    { id: 13, title: "Conditionals", content: "If, Else If, and Else. Path choices!", diagram: "🛤️ -> 🛣️", code: "if (score == 10) { ... } else { ... }", quiz: { q: "What is 'else' for?", a: ["The other path", "The start", "The end"], c: 0 } },
    { id: 14, title: "Loops Basics", content: "Doing things over and over automatically!", diagram: "🔄 1..2..3..", code: "for (let i=0; i<3; i++) { meow(); }", quiz: { q: "What does a loop do?", a: ["Repeats tasks", "Restarts computer", "Plays music"], c: 0 } },
    { id: 15, title: "While Loops", content: "Keep going while something is true!", diagram: "⌛ -> 🔄", code: "while (energy > 0) { run(); }", quiz: { q: "When does while loop stop?", a: ["When condition is false", "Never", "After 1 second"], c: 0 } },
    { id: 16, title: "For Loops", content: "A loop that counts exactly how many times!", diagram: "🔢 -> 🔁", code: "for (let i=1; i<=10; i++) { count(); }", quiz: { q: "What is a for loop good for?", a: ["Counting", "Drawing", "Sleeping"], c: 0 } },
    { id: 17, title: "Functions", content: "Reusable packs of code. Write once, use many times!", diagram: "📦 -> ⚡", code: "function sayHi() { print('Hi'); }", quiz: { q: "What is a function?", a: ["Reusable code", "A math problem", "A type of keyboard"], c: 0 } },
    { id: 18, title: "Parameters", content: "Giving inputs to your functions.", diagram: "📦(🍎) -> ⚡", code: "function feed(food) { ... }", quiz: { q: "What are parameters?", a: ["Inputs for functions", "Length of code", "Colors"], c: 0 } },
    { id: 19, title: "Return Values", content: "Getting a result back from a function.", diagram: "⚡ -> 🥚", code: "return score + 10;", quiz: { q: "What does return do?", a: ["Gives back a value", "Goes to start", "Deletes code"], c: 0 } },
    { id: 20, title: "Final Practice", content: "Time to combine everything you learned! You are a coder now!", diagram: "🎓 + 🐱 = 🏆", code: "// Combine all you know!", quiz: { q: "Are you ready?", a: ["Yes!", "Definitely!", "Absolutely!"], c: 0 } }
];

export const lessonsData = {
    programming,
    html: [
        { id: 1, title: "HTML Basics", content: "The building blocks of the web.", diagram: "🏗️", code: "<html></html>", quiz: { q: "What is HTML?", a: ["Web language", "Cat food", "Game"], c: 0 } }
    ],
    css: [],
    javascript: [],
    'deep-dive': [
        {
            id: 'boilerplate',
            title: "Boilerplate Structure",
            content: "A boilerplate is the standard code you start every HTML file with. It is like the foundation of a house! It contains <!DOCTYPE html>, <html>, <head>, and <body>.",
            diagram: "🏠 Foundation",
            code: "<!DOCTYPE html>\n<html>\n<head>\n  <title>Kittu</title>\n</head>\n<body>\n  Hello!\n</body>\n</html>",
            quiz: { q: "Which tag is used for the website title?", a: ["<body>", "<head>", "<title>"], c: 2 }
        },
        {
            id: 'semantic',
            title: "Semantic vs Non-Semantic",
            content: "Semantic tags like <header>, <nav>, and <footer> tell the browser exactly what they are. Non-semantic tags like <div> don't have a specific meaning. Use semantic ones to help Google understand your site!",
            diagram: "🏗️ Structure",
            code: "<header>\n  <h1>My Site</h1>\n</header>\n<footer>\n  Bye bye!\n</footer>",
            quiz: { q: "Is <header> semantic?", a: ["Yes", "No", "Only on Sundays"], c: 0 }
        },
        {
            id: 'attributes',
            title: "Attribute Masterclass",
            content: "Attributes provide extra information inside a tag. For example, <img src='kittu.jpg'> uses the 'src' attribute to tell where the image is!",
            diagram: "🔧 Settings",
            code: "<img src='cat.png' alt='Cute Kitty'>\n<a href='google.com'>Link</a>",
            quiz: { q: "Which attribute sets an image's source?", a: ["alt", "src", "link"], c: 1 }
        }
    ]
};
