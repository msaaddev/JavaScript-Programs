function cal(decision, input1, input2) {

    decision = document.getElementById("decision").value;
    input1 = document.getElementById("input1").value;
    input2 = document.getElementById("input2").value;

    switch (decision) {
        case '1':
            {
                result = +input1 + +input2;
                document.getElementById("result").value = result;
                break;
            }
        case '2':
            {
                result = input1 - input2;
                document.getElementById("result").value = result;
                break;
            }
        case '3':
            {
                result = input1 / input2;
                document.getElementById("result").value = result;
                break;
            }
        case '4':
            {
                result = input1 * input2;
                document.getElementById("result").value = result;
                break;
            }
        case '5':
            {
                result = input1 % input2;
                document.getElementById("result").value = result;
                break;
            }
        case '6':
            {
                result = Math.pow(input1, input1);
                document.getElementById("result").value = result;
                break;
            }
        case '7':
            {
                result = Math.pow(input1, 0.5);
                document.getElementById("result").value = result;
                break;
            }

        default:
            {

                document.getElementById("result").value = "Invalid option";
                break;
            }

    }

}