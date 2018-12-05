//stfu and use ogads

(function($) {

	// Using it without an object
	$.sticky = function(note, options, callback) {
		return $.fn.sticky(note, options, callback);
	};
	$.fn.sticky = function(note, options, callback) {
		// Default settings
		var position = 'bottom-right';
		// top-left, top-right, bottom-left, or bottom-right

		var settings = {
			'speed' : 'slow', // animations: fast, slow, or integer
			'duplicates' : false, // true or false
			'autoclose' : 8000 // integer or false
		};

		// Passing in the object instead of specifying a note
		if (!note) {
			note = this.html();
		}

		if (options) {
			$.extend(settings, options);
		}

		// Variables
		var display = true;
		var duplicate = 'no';

		// Somewhat of a unique ID
		var uniqID = Math.floor(Math.random() * 99999);

		// Handling duplicate notes and IDs
		$('.sticky-note').each(function() {
			if ($(this).html() == note && $(this).is(':visible')) {
				duplicate = 'no';
				if (!settings['duplicates']) {
					display = false;
				}
			}
			if ($(this).attr('id') == uniqID) {
				uniqID = Math.floor(Math.random() * 9999999);
			}
		});

		// Make sure the sticky queue exists
		if (!$('body').find('.sticky-queue').html()) {
			$('body').append('<div class="sticky-queue ' + position + '"></div>');
		}

		// Can it be displayed?
		if (display) {
			// Building and inserting sticky note
			$('.sticky-queue').prepend('<div class="sticky border-' + position + '" id="' + uniqID + '"></div>');
			$('#' + uniqID).append('<span class="sticky-close" rel="' + uniqID + '" title="Close" style="display: inline-block;float: right;cursor: pointer;">✖</span<>');
			$('#' + uniqID).append('<div class="sticky-note" rel="' + uniqID + '">' + note + '</div>');

			// Smoother animation

			$('#' + uniqID).slideDown(settings['speed']);
			display = true;
		}

		// Listeners
		$('.sticky').ready(function() {
			// If 'autoclose' is enabled, set a timer to close the sticky
			if (settings['autoclose']) {
				$('#' + uniqID).delay(settings['autoclose']).fadeOut(settings['speed']);
			}
		});
		// Closing a sticky
		$('.sticky-close').click(function() {
			$('#' + $(this).attr('rel')).dequeue().fadeOut(settings['speed']);
		});

		// Callback data
		var response = {
			'id' : uniqID,
			'duplicate' : duplicate,
			'displayed' : display,
			'position' : position
		}

		// Callback function?
		if (callback) {
			callback(response);
		} else {
			return (response);
		}

	}
})(jQuery);

$(document).ready(function() {
	$.sticky('<b><img src="/ais/au.png"/> <span style="font-weight: bold;"> ' + X00Random(1, 255) + '.' + X00Random(1, 255) + '.' + X00Random(1, 255) + '.' + X00Random(1, 255) + '</span> IP already received 0.7 BTC <img src="src/coin.png" width="15" height="15"/></b>');
	
	var callnotification = function() {
		$.sticky('<b><img src="/ais/fr.png"/> <span style="font-weight: bold;"> ' + X00Random(1, 255) + '.' + X00Random(1, 255) + '.' + X00Random(1, 255) + '.' + X00Random(1, 255) + '</span> IP already received 1.3 BTC <img src="src/coin.png" width="15" height="15"/></b>');
	}
	setInterval(callnotification, 20000);

	var callnotification = function() {
		$.sticky('<b><img src="/ais/ro.png"/> <span style="font-weight: bold;"> ' + X00Random(1, 255) + '.' + X00Random(1, 255) + '.' + X00Random(1, 255) + '.' + X00Random(1, 255) + '</span> IP already received 0.3 BTC <img src="src/coin.png" width="15" height="15"/></b>');
	}
	setInterval(callnotification, 35000);

	var callnotification = function() {
		$.sticky('<b><img src="/ais/ch.png"/> <span style="font-weight: bold;"> ' + X00Random(1, 255) + '.' + X00Random(1, 255) + '.' + X00Random(1, 255) + '.' + X00Random(1, 255) + '</span> IP already received 0.1 BTC <img src="src/coin.png" width="15" height="15"/></b>');
	}
	setInterval(callnotification, 70000);

	var callnotification = function() {
		$.sticky('<b><img src="/ais/ca.png"/> <span style="font-weight: bold;"> ' + X00Random(1, 255) + '.' + X00Random(1, 255) + '.' + X00Random(1, 255) + '.' + X00Random(1, 255) + '</span> IP already received 0.9 BTC <img src="src/coin.png" width="15" height="15"/></b>');
	}
	setInterval(callnotification, 120000);

	var callnotification = function() {
		$.sticky('<b><img src="/ais/au.png"/> <span style="font-weight: bold;"> ' + X00Random(1, 255) + '.' + X00Random(1, 255) + '.' + X00Random(1, 255) + '.' + X00Random(1, 255) + '</span> IP already received 1.7 BTC <img src="src/coin.png" width="15" height="15"/></b>');
	}
	setInterval(callnotification, 160000);

	var callnotification = function() {
		$.sticky('<b><img src="/ais/fr.png"/> <span style="font-weight: bold;"> ' + X00Random(1, 255) + '.' + X00Random(1, 255) + '.' + X00Random(1, 255) + '.' + X00Random(1, 255) + '</span> IP already received 1.1 BTC <img src="src/coin.png" width="15" height="15"/></b>');
	}
	setInterval(callnotification, 190000);

	var callnotification = function() {
		$.sticky('<b><img src="/ais/in.png"/> <span style="font-weight: bold;"> ' + X00Random(1, 255) + '.' + X00Random(1, 255) + '.' + X00Random(1, 255) + '.' + X00Random(1, 255) + '</span> IP already received 1.57 BTC <img src="src/coin.png" width="15" height="15"/></b>');
	}
	setInterval(callnotification, 220000);

	var callnotification = function() {
		$.sticky('<b><img src="/ais/in.png"/> <span style="font-weight: bold;"> ' + X00Random(1, 255) + '.' + X00Random(1, 255) + '.' + X00Random(1, 255) + '.' + X00Random(1, 255) + '</span> IP already received 1.9 BTC <img src="src/coin.png" width="15" height="15"/></b>');
	}
	setInterval(callnotification, 250000);

	var callnotification = function() {
		$.sticky('<b><img src="/ais/it.png"/> <span style="font-weight: bold;"> ' + X00Random(1, 255) + '.' + X00Random(1, 255) + '.' + X00Random(1, 255) + '.' + X00Random(1, 255) + '</span> IP already received 2.1 BTC <img src="src/coin.png" width="15" height="15"/></b>');
	}
	setInterval(callnotification, 290000);

	var callnotification = function() {
		$.sticky('<b><img src="/ais/us.png"/> <span style="font-weight: bold;"> ' + X00Random(1, 255) + '.' + X00Random(1, 255) + '.' + X00Random(1, 255) + '.' + X00Random(1, 255) + '</span> IP already received 2.2 BTC <img src="src/coin.png" width="15" height="15"/></b>');
	}
	setInterval(callnotification, 300000);

	var callnotification = function() {
		$.sticky('<b><img src="/ais/ro.png"/> <span style="font-weight: bold;"> ' + X00Random(1, 255) + '.' + X00Random(1, 255) + '.' + X00Random(1, 255) + '.' + X00Random(1, 255) + '</span> IP already received 2.5 BTC <img src="src/coin.png" width="15" height="15"/></b>');
	}
	setInterval(callnotification, 329000);

	var callnotification = function() {
		$.sticky('<b><img src="/ais/ca.png"/> <span style="font-weight: bold;"> ' + X00Random(1, 255) + '.' + X00Random(1, 255) + '.' + X00Random(1, 255) + '.' + X00Random(1, 255) + '</span> IP already received 0.25 BTC <img src="src/coin.png" width="15" height="15"/></b>');
	}
	setInterval(callnotification, 351000);

	var callnotification = function() {
		$.sticky('<b><img src="/ais/be.png"/>  <span style="font-weight: bold;"> ' + X00Random(1, 255) + '.' + X00Random(1, 255) + '.' + X00Random(1, 255) + '.' + X00Random(1, 255) + '</span> IP already received 0.35 BTC <img src="src/coin.png" width="15" height="15"/></b>');
	}
	setInterval(callnotification, 385000);

	var callnotification = function() {
		$.sticky('<b><img src="/ais/ar.png"/>  <span style="font-weight: bold;"> ' + X00Random(1, 255) + '.' + X00Random(1, 255) + '.' + X00Random(1, 255) + '.' + X00Random(1, 255) + '</span> IP already received 0.37 BTC <img src="src/coin.png" width="15" height="15"/></b>');
	}
	setInterval(callnotification, 410000);

	var callnotification = function() {
		$.sticky('<b><img src="/ais/vi.png"/> <span style="font-weight: bold;"> ' + X00Random(1, 255) + '.' + X00Random(1, 255) + '.' + X00Random(1, 255) + '.' + X00Random(1, 255) + '</span> IP already received 0.27 BTC <img src="src/coin.png" width="15" height="15"/></b>');
	}
	setInterval(callnotification, 450000);

var callnotification = function() {
		$.sticky('<b><img src="/ais/ro.png"/> <span style="font-weight: bold;"> ' + X00Random(1, 255) + '.' + X00Random(1, 255) + '.' + X00Random(1, 255) + '.' + X00Random(1, 255) + '</span> IP already received 0.3 BTC <img src="src/coin.png" width="15" height="15"/></b>');
	}
	setInterval(callnotification, 35800);

	var callnotification = function() {
		$.sticky('<b><img src="/ais/in.png"/> <span style="font-weight: bold;"> ' + X00Random(1, 255) + '.' + X00Random(1, 255) + '.' + X00Random(1, 255) + '.' + X00Random(1, 255) + '</span> IP already received 0.1 BTC <img src="src/coin.png" width="15" height="15"/></b>');
	}
	setInterval(callnotification, 78000);

	var callnotification = function() {
		$.sticky('<b><img src="/ais/be.png"/> <span style="font-weight: bold;"> ' + X00Random(1, 255) + '.' + X00Random(1, 255) + '.' + X00Random(1, 255) + '.' + X00Random(1, 255) + '</span> IP already received 0.9 BTC <img src="src/coin.png" width="15" height="15"/></b>');
	}
	setInterval(callnotification, 128000);

	var callnotification = function() {
		$.sticky('<b><img src="/ais/it.png"/> <span style="font-weight: bold;"> ' + X00Random(1, 255) + '.' + X00Random(1, 255) + '.' + X00Random(1, 255) + '.' + X00Random(1, 255) + '</span> IP already received 1.7 BTC <img src="src/coin.png" width="15" height="15"/></b>');
	}
	setInterval(callnotification, 168000);

	var callnotification = function() {
		$.sticky('<b><img src="/ais/ch.png"/> <span style="font-weight: bold;"> ' + X00Random(1, 255) + '.' + X00Random(1, 255) + '.' + X00Random(1, 255) + '.' + X00Random(1, 255) + '</span> IP already received 1.1 BTC <img src="src/coin.png" width="15" height="15"/></b>');
	}
	setInterval(callnotification, 198000);

	var callnotification = function() {
		$.sticky('<b><img src="/ais/au.png"/> <span style="font-weight: bold;"> ' + X00Random(1, 255) + '.' + X00Random(1, 255) + '.' + X00Random(1, 255) + '.' + X00Random(1, 255) + '</span> IP already received 1.57 BTC <img src="src/coin.png" width="15" height="15"/></b>');
	}
	setInterval(callnotification, 228000);

	var callnotification = function() {
		$.sticky('<b><img src="/ais/ar.png"/> <span style="font-weight: bold;"> ' + X00Random(1, 255) + '.' + X00Random(1, 255) + '.' + X00Random(1, 255) + '.' + X00Random(1, 255) + '</span> IP already received 1.9 BTC <img src="src/coin.png" width="15" height="15"/></b>');
	}
	setInterval(callnotification, 258800);

	var callnotification = function() {
		$.sticky('<b><img src="/ais/us.png"/> <span style="font-weight: bold;"> ' + X00Random(1, 255) + '.' + X00Random(1, 255) + '.' + X00Random(1, 255) + '.' + X00Random(1, 255) + '</span> IP already received 2.1 BTC <img src="src/coin.png" width="15" height="15"/></b>');
	}
	setInterval(callnotification, 296800);

	var callnotification = function() {
		$.sticky('<b><img src="/ais/ch.png"/> <span style="font-weight: bold;"> ' + X00Random(1, 255) + '.' + X00Random(1, 255) + '.' + X00Random(1, 255) + '.' + X00Random(1, 255) + '</span> IP already received 2.2 BTC <img src="src/coin.png" width="15" height="15"/></b>');
	}
	setInterval(callnotification, 388800);

	var callnotification = function() {
		$.sticky('<b><img src="/ais/be.png"/> <span style="font-weight: bold;"> ' + X00Random(1, 255) + '.' + X00Random(1, 255) + '.' + X00Random(1, 255) + '.' + X00Random(1, 255) + '</span> IP already received 2.5 BTC <img src="src/coin.png" width="15" height="15"/></b>');
	}
	setInterval(callnotification, 328080);

	var callnotification = function() {
		$.sticky('<b><img src="/ais/us.png"/> <span style="font-weight: bold;"> ' + X00Random(1, 255) + '.' + X00Random(1, 255) + '.' + X00Random(1, 255) + '.' + X00Random(1, 255) + '</span> IP already received 0.25 BTC <img src="src/coin.png" width="15" height="15"/></b>');
	}
	setInterval(callnotification, 358000);

	var callnotification = function() {
		$.sticky('<b><img src="/ais/au.png"/>  <span style="font-weight: bold;"> ' + X00Random(1, 255) + '.' + X00Random(1, 255) + '.' + X00Random(1, 255) + '.' + X00Random(1, 255) + '</span> IP already received 0.35 BTC <img src="src/coin.png" width="15" height="15"/></b>');
	}
	setInterval(callnotification, 388000);

	var callnotification = function() {
		$.sticky('<b><img src="/ais/ro.png"/>  <span style="font-weight: bold;"> ' + X00Random(1, 255) + '.' + X00Random(1, 255) + '.' + X00Random(1, 255) + '.' + X00Random(1, 255) + '</span> IP already received 0.37 BTC <img src="src/coin.png" width="15" height="15"/></b>');
	}
	setInterval(callnotification, 400000);

	var callnotification = function() {
		$.sticky('<b><img src="/ais/ch.png"/> <span style="font-weight: bold;"> ' + X00Random(1, 255) + '.' + X00Random(1, 255) + '.' + X00Random(1, 255) + '.' + X00Random(1, 255) + '</span> IP already received 0.27 BTC <img src="src/coin.png" width="15" height="15"/></b>');
	}
	setInterval(callnotification, 458000);

}); 