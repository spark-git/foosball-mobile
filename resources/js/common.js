var USER_TABLE_URL = "http://api.storageroomapp.com/accounts/4fc4d3944194625299000002/collections/4fc4d58713756b58f9000016/entries.json";
var AUTH_TOKEN = "3GDtRfvT36m3GMs2YPXR";

/**
 * Setup the application.
 */
function init() {
    //Check if we have a user stored in localstorage...
    if (localStorage.name) {
        $('#loggedInUser').show();
        $('#loginButtons').hide();
        $('#logoutButton').show();
        $('#loggedInUser p').html("User: " + localStorage.name);
    }
}


/**
 * TODO remove user info from localstorage, enable register button etc.
 */
function logout() {
    //localStorage.removeItem("user");
    localStorage.removeItem("name");

    $('#loggedInUser').hide();
    $('#loginButtons').show();
    $('#logoutButton').hide();
    //alert("You have successfully logged out.");
}



/*
JSON.stringify(user)
localStorage.name = name;
localStorage.email = email;
localStorage.ranking = ranking;
*/
