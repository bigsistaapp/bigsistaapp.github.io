var lastPeriod = getParameterByName('last');
var currentPeriod = getParameterByName('current');

var num1 = parseInt(lastPeriod);
var num2 = parseInt(currentPeriod);

// 28 day cycle
if (( 30 - num1 ) + num2 === 28 || ( 30 - num1 ) + num2 === 27  || ( 30 - num1 ) + num2 === 29 ) {

  var anchorLink = "28-day";
  document.getElementById("english_results").innerHTML =
  "<h1> You're on a 28 day cycle</h1>"
  + "<h3>Girl! You can expect your next period within the next 24 - 28 days</h3>"
  + "<a href='#" + anchorLink  + "' class='results-button'>Learn more about your cycle</a>";

  document.getElementById("isiXhosa_results").innerHTML =
  "<h1> Ukumjikelo wasexesheni wentsuku ezi-28 </h1>"
  + "<h3>Ngqiyazana! Ulindele umjikelo wakho wasexeshen olandelayo ngentsuku ezingange 24-28</h3>"
  + "<a href='#" + anchorLink  + "' class='results-button'> Cofa kweliqhosha ukufunda ngakumbi ngomjikelo wakho</a>";

  document.getElementById("afrikaans_results").innerHTML =
  "<h1> Jy is op n 28 dae siklus/h1>"
  + "<h3> Meisie! Jy kan jou volgende maandstonde verwag binne 'n' 24-28 dae siklus</h3>"
  + "<a href='#" + anchorLink  + "' class='results-button'>Leer meer oor jou siklus</a>";

// 21 day cycle
} else if (( 30 - num1 ) + num2 === 21 || ( 30 - num1 ) + num2 === 20 ) {

  var anchorLink = "21-day";
  document.getElementById("english_results").innerHTML =
  "<h1>You're in a 21 day cycle </h1>"
  +"<h3> Girl! You can expect your next period within the next 16 - 21 days </h3>"
  + "<a href='#" + anchorLink  + "' class='results-button'> Click here to learn more about your cycle</a>";

  document.getElementById("isiXhosa_results").innerHTML =
  "<h1> Ukumjikelo wasexesheni wentsuku ezi-21 </h1>"
  + "<h3>Ngqiyazana! Ulindele umjikelo wakho wasexeshen olandelayo ngentsuku ezingange 16 - 21</h3>"
  + "<a href='#" + anchorLink  + "' class='results-button'> Cofa kweliqhosha ukufunda ngakumbi ngomjikelo wakho</a>";

  document.getElementById("afrikaans_results").innerHTML =
  "<h1> Jy is op n 21 dae siklus/h1>"
  + "<h3> Meisie! Jy kan jou volgende maandstonde verwag binne 'n' 16 - 21 dae siklus</h3>"
  + "<a href='#" + anchorLink  + "' class='results-button'>Leer meer oor jou siklus</a>";

// 33 day cycle
} else if (( 30 - num1 ) + num2 === 33 || ( 30 - num1 ) + num2 === 34 ) {

  var anchorLink = "33-day";
  document.getElementById("english_results").innerHTML =
 "<h1>You're on a 33 day cycle</h1>"
 + "<h3> Girl! You can expect your next period within the next 26 - 33 days </h3>"
 + "<a href='#" + anchorLink  + "' class='results-button'> Click here to learn more about your cycle</a>";

 document.getElementById("isiXhosa_results").innerHTML =
 "<h1> Ukumjikelo wasexesheni wentsuku ezi-33 </h1>"
 + "<h3>Ngqiyazana! Ulindele umjikelo wakho wasexeshen olandelayo ngentsuku ezingange 26 - 33</h3>"
 + "<a href='#" + anchorLink  + "' class='results-button'> Cofa kweliqhosha ukufunda ngakumbi ngomjikelo wakho</a>";

 document.getElementById("afrikaans_results").innerHTML =
 "<h1> Jy is op n 33 dae siklus/h1>"
 + "<h3> Meisie! Jy kan jou volgende maandstonde verwag binne 'n' 26 - 33 dae siklus</h3>"
 + "<a href='#" + anchorLink  + "' class='results-button'>Leer meer oor jou siklus</a>";

// random cycle
} else {

  var anchorLink = "No cycle";
  document.getElementById("english_results").innerHTML =
  "<h1>Your cycle is random</h1>"
  + "<h3> Sorry you are still new at this, your cycle still needs time to settle. </h3>"
  + "<a href='#" + anchorLink  + "' class='results-button'>Learn more about your cycle</a>";

  document.getElementById("isiXhosa_results").innerHTML =
  "<h1>umjikelo wakho wasexesheni awuqhelekanga!</h1>"
  + "<h3> Ixolo! usemtsha kwezizinto, Umjikelo wakho wasexeshen usafuna ixesha lokuma ndaweninye. </h3>"
  + "<a href='#" + anchorLink  + "' class='results-button'> Cofa kweliqhosha ukufundaFunda ngakumbi ngomjikelo wakho</a>";

  document.getElementById("afrikaans_results").innerHTML =
  "<h1>Jou siklus is nog ongereeld</h1>"
  + "<h3> Jammer die is nog nuut vir jou,jou siklus moet nog stabiliseer. </h3>"
  + "<a href='#" + anchorLink  + "' class='results-button'> Leer meer oor jou siklus</a>";
}
