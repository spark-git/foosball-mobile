var USER_TABLE_URL = "http://api.storageroomapp.com/accounts/4fc4d3944194625299000002/collections/4fc4d58713756b58f9000016/entries.json";
var AUTH_TOKEN = "3GDtRfvT36m3GMs2YPXR";

/**
 * Setup the application.
 */
function init() {
    //Check if we have a user stored in localstorage
    if (localStorage.name) {
        $('#loggedInUser').show();
        $('#loginButtons').hide();
        $('#logoutButton').show();
        $('#loggedInUser p').append(localStorage.name);
    }
}

/**
 * Display the specified page. Hide all other pages.
 */
function display(pageName) {
    //Hide all pages...
    $('#main').hide();
    $('#registration').hide();
    $('#listAll').hide();

    //Display specified page...
    $('#' + pageName).show();  //TODO perhaps add a CSS transition.
}

/**
 * Validate the user details and register the user.
 */
function registerUser() {
    var name = $('#name').val();
    var email = $('#email').val();
    var ranking = $('#ranking').val();
    if (validateRegistrationDetails(name, email, ranking)) {
        if (persistUser(name, email, ranking)) {
            init();
            display("main");
        }
    } else {
        alert("Please enter valid registration details.");
    }
}

/**
 * Attempts to store details about the new user in the DB.
 */
function persistUser(name, email, ranking) {
    var userDetails = {"name":name,"email":email,"ranking":ranking};

    $.ajax({
        type: "POST",
        url: USER_TABLE_URL,
        data: {
            auth_token: AUTH_TOKEN,
            entry: userDetails
        },
        dataType: "json",
        success: function(data) {
            //alert("Successfuly registered " + data.entry.name);
            //localStorage.user = JSON.stringify(userDetails
            localStorage.name = name;
            return true;
        },
        error: function() {
            alert("An error occurred while attempting to register the user.");
            return false;
        }
    });
}

/**
 * Validates the form details.
 * TODO check name/email is unique. pre-fetch all user names/emails when reg page loads?
 */
function validateRegistrationDetails(name, email, ranking) {
    if (name && email && ranking) {
        return true;
    }
    return false;
}

/**
 * Retrieves and displays all the currently registered users.
 */
function listAllUsers() {
    var names = [];
    $.getJSON(USER_TABLE_URL,
    {
        auth_token: AUTH_TOKEN
    },
    function(data) {
        $.each(data.array.resources, function(i, user) {
            names.push('<li>' + user.name + '</li>');
        });

        $('<ul/>', {
            html: names.join('')
        }).appendTo('#users'); //TODO don't use append.
    });

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
}


/*
JSON.stringify(user)
localStorage.name = name;
localStorage.email = email;
localStorage.ranking = ranking;
*/
