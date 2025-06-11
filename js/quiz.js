const statements = [
    "Nope! Good guess though.",
    "Almost!",
    "Not quite!",
    "Incorrect! Try again.",
    "You wish!",
    "Be honest!",
    "Are you sure?",
    "You must've read the question wrong!",
    "Answer seriously now..."
];
            
function getStatement() {
    index = Math.floor(Math.random() * statements.length)

    return statements[index]
}