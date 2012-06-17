// Router
var AppRouter = Backbone.Router.extend({

	routes : {
		"" : "homePage",
		"listAll" : "listUsers",
		"viewFixture": "viewFixture",
		"registration" : "registration",
	},

	homePage : function() {
		console.log("AppRouter.homePage()");
		new HomeView;
	},

	listUsers : function() {
		console.log("AppRouter.listUsers()");
		new RegisteredUsersView();
	},

	viewFixture : function() {
		console.log("AppRouter.viewFixture()");
		new FixtureView;
	},

	registration : function() {
		console.log("AppRouter.registration()");
		new RegistrationView;
	},

});

window.HomeView = Backbone.View.extend({

	el : $("#main"),

	events : {
		"click #logoutButton" : "logout",
	},

	initialize : function() {
		init();
	},

	logout : function() {
		console.log("windowHomeView.logout()");
		logout();
	}

});

var app = new AppRouter();
Backbone.history.start();