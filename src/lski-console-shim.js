/*! lski-console-shim-1.0.2 */
/**
* Simply prevents errors in IE when the console is not open.
*/
(function(w, undefined) {

	if(w.console === undefined) {

        var f = function() {};

		w.console = {
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
