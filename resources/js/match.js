(function() {

	window.FixtureView = Backbone.View.extend({
		el : $("#fixture"),

		events : {
			'click button#generateFixture': 'generateFixture'
		},

		initialize: function() {
			
			$(this.el).html('');
			
			// fetch users
			var userNameMap = [];
			$.getJSON(USER_TABLE_URL, {
				auth_token : AUTH_TOKEN
			}, function(data) {
				$.each(data.array.resources, function(i, user) {
					var userurl = user['@url'];
					userNameMap[userurl] = user.name;
				});

				// Check if the fixture has been generated. If not, present a generate button otherwise present the Match table
				var MATCH_TABLE_URL = "http://api.storageroomapp.com/accounts/4fc4d3944194625299000002/collections/4fd6654eb9935e09ce000072/entries.json";
				$.getJSON(MATCH_TABLE_URL, {
					auth_token : AUTH_TOKEN
				}, function(data) {
					if (data.array.resources.length == 0) { // No existing Match data in database
						$('#fixture').html('<li>Fixture list is not available.</li><li><button id="generateFixture">Generate a new one</button></li>');
					} else {
						// fetch matches
						var fixtureHtml = [];
						fixtureHtml.push('<li><div class="ui-grid-b"><div class="ui-block-a">Player 1</div><div class="ui-block-b">Player 2</div><div class="ui-block-c">Winner</div></div></li>');
						$.each(data.array.resources, function(i, match) {
							var player1Name = userNameMap[match.player1.url];
							var player2Name = userNameMap[match.player2.url];
							fixtureHtml.push('<li><div class="ui-grid-b"><div class="ui-block-a">' + player1Name + '</div><div class="ui-block-b">' + player2Name + '</div><div class="ui-block-c"></div></div></li>');
						});
						$('#fixture').html(fixtureHtml.join(''));
						
					}
					
					$('#fixture').listview('refresh');
				});
			});
		},
		
		generateFixture: function() {
			alert('TODO');
		}
	});

}());