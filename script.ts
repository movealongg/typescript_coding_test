function palindrome(){
  //Store element from #user-input in input variable
  let input: string = (<HTMLInputElement> document.getElementById("user-input")).value;
  //Split input string into substrings using split method
  let splitInput: string[] = input.split("");
  //Reverse substrings using reverse method
  let reverseInput: string[] = splitInput.reverse();
  //Put substrings back together
  let joinInput: string = reverseInput.join("");

  if (input === joinInput){
    alert('This is a palidrome!');
  }else{
    alert('This is not a palindrome!');
  }

}
