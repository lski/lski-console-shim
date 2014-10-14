/*!
* Lski-console-shim - 1.0
*/
/**
* Simply prevents errors in IE, important you should still remove all console calls in debug code
*/
(function(win, undefined) {
	
	if(window.console === undefined) {
        
        var f = function() {};
        
		window.console = {
			log: f,
			error: f,
			warn: f,
			info: f,
			time: f,
			timeEnd: f,
			count: f,
			debug: f,
			profile: f,
			profileEnd: f,
			trace: f,
			dir: f,
			dirxml: f,
			assert: f,
			group: f,
			groupEnd: f
		};
	}
	
})(window);