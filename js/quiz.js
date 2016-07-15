// form validation function
function evalInput(){
  var valid = "";
  var questions = [
    document.forms[0].question1.value,
    document.forms[0].question2.value,
    document.forms[0].question3.value,
    document.forms[0].question4.value,
    document.forms[0].question5.value,
    document.forms[0].question6.value,
    document.forms[0].question7.value,
    document.forms[0].question8.value,
    document.forms[0].question9.value,
    document.forms[0].question10.value
  ];

    for (var z = 0; z < 10; z++){
  console.log(z);
      if(questions[z] == ""){

        document.getElementById('quiz-error').innerHTML = 'Please answer all questions';
        document.body.scrollTop = document.documentElement.scrollTop = 0;

        valid = false;
      } else {
        valid = true;
      } // end of conditional statement
    } // end of for loop

    return valid;
} // end of function
