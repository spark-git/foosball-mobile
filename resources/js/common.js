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
        $('#logoutButton').closest('.ui-btn').show();
        $('#loggedInUser p').html("User: " + localStorage.name);
    } else {
        $('#logoutButton').closest('.ui-btn').hide();
    }
}


/**
 * Log the user out of the application.
 */
function logout() {
    //localStorage.removeItem("user");
    localStorage.removeItem("name");

    $('#loggedInUser').hide();
    $('#loginButtons').show();
    $('#logoutButton').closest('.ui-btn').hide();
}


/**
 * Remove transitions to avoid flickering in iOS.
 */
$(document).bind("mobileinit", function() {
    $.mobile.page.prototype.options.addBackBtn = true;
    $.mobile.defaultPageTransition = 'none';
    $.mobile.useFastClick  = false;
});




