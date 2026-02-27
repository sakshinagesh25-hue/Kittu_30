export const getAIFeedback = (correct, userAnswer, expectedAnswer, topic) => {
    const positive = [
        "Kittu is so proud of you! You're a natural at this!",
        "Purr-fect! That's exactly how it works.",
        "Wow, you're building your code kingdom fast!",
        "Spot on! Kittu sends you a high-five! 🐾"
    ];

    const helpful = [
        "Not quite, but don't worry! Kittu says logic can be tricky. Try thinking about it like this...",
        "Oops! Even the best kings and queens make mistakes. Kittu suggests checking the diagram again!",
        "Kittu suggests trying one more time. Remember, the answer is related to the core concept we just read.",
        "Almost! Kittu thinks you might have looked at the wrong option. Give it another shot! 🐱"
    ];

    const random = (arr) => arr[Math.floor(Math.random() * arr.length)];

    return correct ? random(positive) : random(helpful);
}
