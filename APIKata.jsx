export default function handler(req, res) {
    const words = [
        { indo: "makan", eng: "eat" },
        { indo: "tidur", eng: "sleep" },
        { indo: "belajar", eng: "study" }
    ];
    const randomWord = words[Math.floor(Math.random() * words.length)];
    res.status(200).json({ word: randomWord.indo, correct: randomWord.eng });
}
