module.exports = function reverse (n) {

    let ersever = String(n).split('').reverse();

    if (n <= 0) {
        ersever.pop();
    }

    return ersever.join('');
}
