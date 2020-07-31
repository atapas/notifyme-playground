const messages = [
    "Recieved an email from Stalin, Sounds Good!!",
    "Recieved a SMS from Mr.Tom Hanks, He seems to be angry!",
    "Disk space has been cleaned.",
    "Furniture Arrived\nBill has been paid.",
    "330 new emplyees Joined",
    "70 new employees are shifted",
    "Time to take a Break, TADA!!!",
    "Cooking Done\nFood is on the Table\n Time to eat",
    "Feeling bored? Listen to <a href='https://www.youtube.com/watch?v=7wtfhZwyrcc' target = '_blank' rel='tag noopener noreferrer'>this</a>",
    "Drink Water, it makes you dry otherwise!",
    "Got a Blog Idea?\nWrite it up!",
    "You haven't cleaned the bathroom yet, get on it.",
    "Music time.",
    "Time to pick your daughter from School\nIf you start now, you are going to reach in 30 minutes.",
    "It's your wife's birthday today, got any gift? No? <a href='http://amazon.com/' target = '_blank' rel='tag noopener noreferrer'>Order here</a>.",
];

const getRandom = () => {
    let message = messages[Math.floor(Math.random() * messages.length)];
    return message;
}

const getAll = () => {
    return messages;
}

export { getRandom, getAll };