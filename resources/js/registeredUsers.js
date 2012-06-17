// User
window.User = Backbone.Model.extend();

// User Collection
window.UserCollection = Backbone.Collection
		.extend({
			model : User,
			url : "http://api.storageroomapp.com/accounts/4fc4d3944194625299000002/collections/4fc4d58713756b58f9000016/entries.json?auth_token=3GDtRfvT36m3GMs2YPXR?callback=?",

			findAll : function(callback) {
				console.log("UserCollection.findAll()");
				console.log(this.models);
				_.each(this.models, function(data) {
					console.log(data);
					_.each(data.attributes.array.resources, function(user) {
						console.log(user);
						callback(user);
					}, this);
				}, this);
			},
		});

// Views
window.UserListView = Backbone.View.extend({

	el : $("#users"),

	initialize : function() {
		this.model.bind("reset", this.render, this);
	},

	render : function(eventName) {
		console.log("window.UserListView.render()");
		$(this.el).html('');
		var self = this;
		this.model.findAll(function(user) {
			console.log("Displaying user item: " + user.name);
			$(self.el).append(new UserListItemView({
				model : user
			}).render().el);
		});
		$(this.el).listview('refresh');
		return this;
	}

});

window.UserListItemView = Backbone.View.extend({
	tagName : 'li', // name of root tag in this.el

	template : _.template($('#tpl-user-list-item').html()),

	render : function(eventName) {
		console.log(JSON.stringify(this.model));
		$(this.el).html(this.template(this.model));
		return this;
	}
});

window.RegisteredUsersView = Backbone.View.extend({

	initialize : function() {
		this.userList = new UserCollection();
		this.userListView = new UserListView({
			model : this.userList
		});
		this.userList.fetch({
			success : function(data) {
				console.log("Successfully read data");
				console.log(data);
			},
			error : function() {
				alert("An error occurred while attempting to read records.");
			}
		});
		//$('#users').html(this.userListView.render().el);
	},
});
