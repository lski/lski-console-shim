/**
* Simply prevents errors in IE, important you should still remove all console calls in debug code
*/
(function(win) {
	
	if(win.console === undefined) {
		console = {
			log: function() {},
			error: function() {},
			warn: function() {},
			info: function() {},
			time: function() {},
			timeEnd: function() {},
			count: function() {},
			debug: function() {},
			profile: function() {},
			profileEnd: function() {},
			trace: function() {},
			dir: function() {},
			dirxml: function() {},
			assert: function() {},
			group: function() {},
			groupEnd: function() {}
		};
	}
	
})(window);