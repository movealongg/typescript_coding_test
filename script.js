function palindrome() {
    //Store element from #user-input in input variable
    var input = document.getElementById("user-input").value;
    //Split input string into substrings using split method
    var splitInput = input.split("");
    //Reverse substrings using reverse method
    var reverseInput = splitInput.reverse();
    //Put substrings back together
    var joinInput = reverseInput.join("");
    if (input == joinInput) {
        alert('This is a palidrome!');
    }
    else {
        alert('This is not a palindrome!');
    }
    // alert(joinInput);
}
