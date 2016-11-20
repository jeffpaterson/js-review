//Problem: hints are shown even when form valid

//Solution: hide hints, show when needed
var $password = $("#password");
var $confirmPassword = $("#confirm_password");

//Hide hints
$("form span").hide();

function isPasswordValid(){
  return $password.val().length > 8; 
}

function arePasswordsMatching(){
  return $password.val() === $confirmPassword.val()
}

function canSubmit(){
 return isPasswordValid() && arePasswordsMatching();
}

function passwordEvent(){
  //Find if password is valid
  if(isPasswordValid()){
  //Hide hint if valid
    $password.next().hide();
  } else {
  //else show hint    
    $password.next().show();
  }
}

function confirmPasswordEvent() {
  if(arePasswordsMatching()){
    $confirmPassword.next().hide();
   } else {
    $confirmPassword.next().show();
   }
}

function enableSubmitEvent() {
  $("#submit").prop("disabled", !canSubmit());
}

//When event happens on password input
$password.focus(passwordEvent)
  .keyup(passwordEvent)
  .keyup(confirmPasswordEvent)
  .keyup(enableSubmitEvent);

$confirmPassword
  .focus(confirmPasswordEvent)
  .keyup(confirmPasswordEvent)
  .keyup(enableSubmitEvent);

//canSubmit();

//When event happens on confirmation input
  //Find out if password and confirmation match
    //Hide hint if matched
    //else show hint
