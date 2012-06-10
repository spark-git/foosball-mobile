(function() {

	
	
	var AppRouter = Backbone.Controller.extend({
        routes: {
        	"" : "homePage",
        	"listAll": "registeredUsers",
        	"*actions" : "defaultRoute",
        },
        
        defaultRoute : function(actions) {
        	//alert("default route " + actions);
        },
        
    	registeredUsers : function() {
    		//alert("reg view route");
			new RegisteredUserView;
		},
		
		homePage : function() {
    		//alert("home view route");
    		new HomeView;
		},
    });
	
	window.HomeView = Backbone.View.extend({

		el : $("#main"),

		events : {
			"click #logoutButton" : "logout",
		},

		initialize : function() {
			//alert("i init");
		},


		logout : function() {
			logout();
		}
	});
	
	// Initiate the router
    var app_router = new AppRouter;
    // Start Backbone history a neccesary step for bookmarkable URL's
    Backbone.history.start();
    

}());