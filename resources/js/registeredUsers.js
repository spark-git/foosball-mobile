(function() {

	// User
	var User = Backbone.Model.extend({

	});

	// User List
	var UserList = Backbone.Collection.extend({
		model : User,
	});

	var UserView = Backbone.View.extend({
		tagName : 'li', // name of root tag in this.el

		initialize : function() {
			_.bindAll(this, 'render');
		},

		render : function() {
			$(this.el).html('<span>' + this.model.get('name') + '</span>');
			return this; // for chainable calls. like .render().el
		}
	});

	window.RegisteredUserView = Backbone.View.extend({

		el : $("#users"),

		events : {},

		initialize : function() {
			_.bindAll(this, 'appendUser', 'addUser', 'clearList');

			this.collection = new UserList();
			this.collection.bind('add', this.appendUser);

			this.clearList();
			
			// Users.fetch();
			var self = this;
			var names = [];
			$.getJSON(USER_TABLE_URL, {
				auth_token : AUTH_TOKEN
			}, function(data) {
				$.each(data.array.resources, function(i, user) {
					// names.push('<li>' + user.name + '</li>');
					self.addUser(user);
				});

				// $('#users').html(names.join(''));
				$('#users').listview('refresh');

			});
		},

		addUser : function(user) {
			this.collection.add(user);
		},

		addAll : function() {
			this.collection.each(this.appendUser);
		},
		
		clearList : function() {
			$(this.el).html('');
		},

		appendUser : function(user) {
			//alert("append user")
			var userView = new UserView({
				model : user
			});
			$(this.el).append(userView.render().el);
		},
	});

}());