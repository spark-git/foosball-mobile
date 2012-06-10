(function() {

	window.FixtureView = Backbone.View.extend({
		el : $("#fixture"),

		events : {},

		initialize : function() {
			
			$(this.el).html('');
			
			// Users.fetch();
			var names = [];
			$.getJSON(USER_TABLE_URL, {
				auth_token : AUTH_TOKEN
			}, function(data) {
				names.push('<li><div class="ui-grid-b"><div class="ui-block-a">Player 1</div><div class="ui-block-b">Player 2</div><div class="ui-block-c">Winner</div></div></li>');
				$.each(data.array.resources, function(i, user) {
					names.push('<li><div class="ui-grid-b"><div class="ui-block-a">' + user.name + '</div><div class="ui-block-b">' + user.name + '</div><div class="ui-block-c"></div></div></li>');
					//$(this.el).append('<li>Test</li>');
				});

				$('#fixture').html(names.join(''));
				$('#fixture').listview('refresh');

			});
		},
	});

}());