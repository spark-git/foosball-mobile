
/**
 *
 */
function registerUser() {
    alert("TODO register user...");
    
    //TODO 
    //Step 1) pre-fetch all user names/emails?
    //Step 2) validate form
    //Step 3) persist using localStorage
    //Step 4) call rest api to persist in db
    //Step 5) display confirmation message
}

/**
 *
 */
function display(pageName) {
    //Hide all pages...
    jQuery('#main').hide();
    jQuery('#registration').hide();
    jQuery('#listAll').hide();
    
    //Display specified page...
    jQuery('#' + pageName).show();
}

/**
 * 
 * 
 *
 */
function listAllUsers() {

    //TODO 
    //Step 1) how to make a rest call from js?
    //Step 2) parse the json code with jquery parseJSON. jQuery.parseJSON(). e.g. var obj = jQuery.parseJSON('{"name":"John"}');
    //Step 3) update the UI with the results

    var names = [];
    $.getJSON("http://api.storageroomapp.com/accounts/4fc4d3944194625299000002/collections/4fc4d58713756b58f9000016/entries.json",
    {
        auth_token: "3GDtRfvT36m3GMs2YPXR"
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






