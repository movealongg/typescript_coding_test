function palindrome(){
  //Store element from #user-input in input variable
  let input: string = (<HTMLInputElement> document.getElementById("user-input")).value;
  //Split input string into substrings using split method
  let splitInput: string[] = input.split("");
  //Reverse substrings using reverse method
  let reverseInput: string[] = splitInput.reverse();
  //Put substrings back together
  let joinInput: string = reverseInput.join("");

  if (input === ""){
      document.getElementById("results").innerHTML = "Please enter some characters to check.";
  }else if (input === joinInput){
    document.getElementById("results").innerHTML = "Yay! This is a palindrome!";
  }else{
    document.getElementById("results").innerHTML = "Boo! This is not a palindrome!";
  }

}
