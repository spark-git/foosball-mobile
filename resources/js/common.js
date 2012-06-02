
var USER_TABLE_URL = "http://api.storageroomapp.com/accounts/4fc4d3944194625299000002/collections/4fc4d58713756b58f9000016/entries.json";



function init() {
    //TODO Check if we have a user stored in localstorage
    
    //TODO Hide/show the register/login buttons
}

function logout() {
    //TODO remove user info from localstorage
}

/**
 *
 */
function registerUser() {
    //alert("about to try registering a new user...");
    
    //TODO 
    //Step 1) pre-fetch all user names/emails?
    //Step 2) validate form
    //Step 3) persist using localStorage
    //Step 4) call rest api to persist in db
    //Step 5) display confirmation message
    
    
    
    var jsonData = '{"entry":{"name":"Auto1","email":"test1@example.com","ranking":5}}';

    /*
    $.ajax({
  url: "http://api.storageroomapp.com/accounts/4fc4d3944194625299000002/collections/4fc4d58713756b58f9000016/entries?auth_token=3GDtRfvT36m3GMs2YPXR",
  type: "POST",
  contentType: "application/json; charset=utf-8",
  data: jsonData,
  dataType: "json",
  success: function (res) {
    alert("it worked!");
  },
  error: function (req, msg, obj) {
    alert("response " + msg + " - req = " + req);
  }
});
    */
    
    
    /*
    $.post(  
            "http://api.storageroomapp.com/accounts/4fc4d3944194625299000002/collections/4fc4d58713756b58f9000016/entries",  
            {"entry":{"name":"Auto1","email":"test1@example.com","ranking":5},"auth_token":"3GDtRfvT36m3GMs2YPXR"},  
            function(responseText){  
                alert("text = " + responseText);  
            },  
            "json"  
        );  
    */
    
    
        
    $.post("http://api.storageroomapp.com/accounts/4fc4d3944194625299000002/collections/4fc4d58713756b58f9000016/entries/new.json",  
            { auth_token:"3GDtRfvT36m3GMs2YPXR" },  
            function(responseText){  
                alert("text = " + responseText);  
            },  
            "json"  
        );  

//    auth_token:"3GDtRfvT36m3GMs2YPXR"


}

/**
 * Display the specified page. Hide all other pages.
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
 * Retrieves and displays all the currently registered users.
 */
function listAllUsers() {
    var names = [];
    $.getJSON(USER_TABLE_URL,
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






