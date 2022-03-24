const questions = [
    "O que aprendi hoje?",
    "O que me deixou feliz?",
    "O que me deixou triste?"
]

const ask = (index = 0) => {
    process.stdout.write(questions[index] + "\n\n")
}

ask()

process.stdin.on("data", data => {
    process.stdout.write(data.toString().trim() + '\n')
    process.exit()
})