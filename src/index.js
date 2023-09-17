module.exports = function reverse(n) {
    if (n < 0) {
        console.log(n);
        n = n * -1;
        n = String(n);

        const reverse = n.split("").reverse().join("");
        console.log(reverse);
        return reverse;
    } else {
        n = String(n);
        const reverse = n.split("").reverse().join("");
        console.log(reverse);
        return reverse;
    }
};
