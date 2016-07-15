var score = 0;
var message;
var correctAnswers = [ ];
var hasWrongAns = false;

for (var i = 1; i <= 10; i++){
//getting results
  var ans = parseInt(getParameterByName('question' + i));

  // checking the results
  if(ans === 1) {
    // adding score
    score++;
  } else {

    hasWrongAns = true;

    if(i === 1){
      //if answer 1 is wrong
      correctAnswers.push ("<p><strong>Question 1: What is menstruation?</strong></p><p>Correct answer is When you get your period</p>");
    } else if (i === 2){
      correctAnswers.push ("<p><strong>Question 2: What is not a sanitary product? </strong></p><p>Correct answer is toilet paper</p>")
    } else if (i === 3) {
      correctAnswers.push ("<p><strong>Question 3: Why should you track your menstruation cylcle?</strong></p><p>Correct answer is  To know when your next period starts</p>");
    } else if (i === 4) {
      correctAnswers.push ("<p><strong>Question 4: Menstruation is caused by being around boys?</strong></p><p>Correct answer is false</p>");
    } else if (i === 5) {
      correctAnswers.push ("<p><strong>Question 5: Having sex when you are on your period means you wont get pregnant?</strong></p><p>Correct answer is false</p>");
    } else if (i === 6) {
      correctAnswers.push ("<p><strong>Question 6: Menstruation is the body's natural process that controls fertility.</strong></p><p>Correct answer is true</p>");
    } else if (i === 7) {
      correctAnswers.push ("<p><strong>Question 7: Everybody gets cramps when they are on their period.</strong></p><p>Correct answer is false</p>");
    } else if (i === 8) {
      correctAnswers.push ("<p><strong>Question 8: Menopause is the last menstrual flow of a woman's life.</strong></p><p>Correct answer is true</p>");
    } else if (i === 9) {
      correctAnswers.push ("<p><strong>Question 9: Exercising too much can affect your menstrual bleeding.</strong></p><p>Correct answer is true</p>");
    } else if (i === 10) {
      correctAnswers.push ("<p><strong>Question 10: When teens first start having periods, their menstrual cycle are always on the same schedule every month.</strong></p><p>Correct answer is false</p>");
    } // end of if
  } // end of else
} // for loop

// selects message to display relative to score
if (score < 5) {
  message ="Oh no! Why don't you try again?";
} else if (score < 10 && score >= 5) {
  message ="Well done!!!";
} else if (score == 10) {
  message="Congratulations for the full marks!!";
  document.getElementById('quiz-image').innerHTML = '<img src="images/best-little-sister.jpg">';
}

// Determines whether there was any incorrect answers
if(hasWrongAns){
  document.getElementById("corrections").innerHTML =  "<h3>Questions you got wrong</h3>" + correctAnswers;
  document.getElementById("corrections").style.borderTop = "solid 1px #efefef";
}


document.getElementById("quiz-score").innerHTML = score;
document.getElementById("quiz-message").innerHTML = message;
