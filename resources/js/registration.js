(function() {

	window.RegistrationView = Backbone.View.extend({

		el : $("#registration"),

		events : {
			"click #submitNewUser" : "registerUser",
		},

		initialize : function() {
			this.nameInput = this.$('#name');
			this.emailInput = this.$('#email');
			this.rankingInput = this.$('#ranking');
		},

		/**
		 * Validate the user details and register the user.
		 */
		registerUser : function() {
			var name = this.nameInput.val();
			var email = this.emailInput.val();
			var ranking = this.rankingInput.val();
			if (this.validateRegistrationDetails(name, email, ranking)) {
				this.persistUser(name, email, ranking);
				localStorage.name = name;
				init();
				parent.history.back();
			} else {
				alert("Please enter valid registration details.");
			}
		},

		/**
		 * Validates the form details. TODO check name/email is unique.
		 * pre-fetch all user names/emails when reg page loads?
		 */
		validateRegistrationDetails : function(name, email, ranking) {
			if (name && email && ranking) {
				return true;
			}
			return false;
		},

		/**
		 * Attempts to store details about the new user in the DB.
		 */
		persistUser : function(name, email, ranking) {
			var userDetails = {
				"name" : name,
				"email" : email,
				"ranking" : ranking
			};

			$.ajax({
				type : "POST",
				url : USER_TABLE_URL,
				data : {
					auth_token : AUTH_TOKEN,
					entry : userDetails
				},
				dataType : "json",
				success : function(data) {
					alert("Successfully registered: " + data.entry.name);
					// localStorage.user = JSON.stringify(userDetails);
				},
				error : function() {
					alert("An error occurred while attempting to register.");
				}
			});
		}
	});

}());