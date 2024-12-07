let currentWord = { indo: "makan", eng: "eat" }; // Simulasi state sementara

export default function handler(req, res) {
    const { answer } = req.body;
    if (answer.toLowerCase() === currentWord.eng) {
        res.status(200).json({ correct: true, message: "Benar!" });
        currentWord = { indo: "tidur", eng: "sleep" }; // Ubah kata
    } else {
        res.status(200).json({ correct: false, message: "Salah! Coba lagi." });
    }
}
