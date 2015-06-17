(function($) {
	$(document).ready(function(){
		// Cleans the select options of duplicate names after 
		// angular loads everything
		var cleanSelect = setTimeout(function() {
			var dupeNames = {};
			$('select').children('option').each(function () {
			    if(dupeNames[this.text]) {
			        $(this).remove();
			    } else {
			        dupeNames[this.text] = this.value;
			    }
			});
		}, 2500);

		// Hide "showing results..." header at first, then show
		// when select list is used
		var header = $('.header');
		header.hide();
		$('select').change(function(){
			header.show(300);
		});
		// Also toggle hide/show when clicking reset button
		$('button').click(function(){
			header.toggle();
		});
	});
}(jQuery));