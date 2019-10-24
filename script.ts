function palindrome(){
  //Store element from #user-input in input variable
  let input: string = (<HTMLInputElement> document.getElementById("user-input")).value;
  //Split input string into substrings using split method 
  let splitInput: string[] = input.split("");
  alert(splitInput);

}
