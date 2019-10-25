function palindrome() {
    //Store element from #user-input in input variable
    var input = document.getElementById("user-input").value;
    //Split input string into substrings using split method
    var splitInput = input.split("");
    //Reverse substrings using reverse method
    var reverseInput = splitInput.reverse();
    //Put substrings back together
    var joinInput = reverseInput.join("");
    //If input is empty or only has whitespace, ask to enter some characters
    if (input == "" || input.trim().length === 0) {
        document.getElementById("results").innerHTML = "Please enter some characters to check.";
    }
    else if (input === joinInput) {
        document.getElementById("results").innerHTML = "Yay! This is a palindrome!";
    }
    else {
        document.getElementById("results").innerHTML = "Boo! This is not a palindrome!";
    }
}
