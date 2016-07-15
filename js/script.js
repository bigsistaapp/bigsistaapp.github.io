//Functions to be used on multiple pages

//Retrieves the variable submitted by a form using the get method. e.g. www.bursary-finder.co.za/searchCareers.html?search=test <- looks for a variable defined after the ?, variables are separates by &
function getParameterByName(name, url) {
    if (!url) url = window.location.href;
    name = name.replace(/[\[\]]/g, "\\$&");
    var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
        results = regex.exec(url);
    if (!results) return null;
    if (!results[2]) return '';
    return decodeURIComponent(results[2].replace(/\+/g, " "));
}
