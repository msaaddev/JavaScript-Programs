
function calc(num) {
    var sum = 0;
    var rem;
    var number = document.getElementById("input").value;
    while (number != 0) {
        rem = number % 10;
        if (rem % 2 != 0) {
            sum = sum + rem;
        }
        number = (number - rem) / 10;

    }
    document.getElementById("result").value = sum;
}
