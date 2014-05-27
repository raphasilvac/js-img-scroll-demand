(function ($) {
	var cache = [],
	h = document.body.clientHeight;
	$('[data-js-src], [data-img-src]').each(function (a, b) {
		var imgSrc = $(this).attr('data-img-src'),
		src = imgSrc || $(this).attr('data-js-src'),
		distance = $(this).attr('data-scroll-distance') || 0;

		$(this).waypoint(function () {
			if(cache.indexOf(src) === -1 ) {
				if(imgSrc) {
					$(this).attr('src', src);
					return;
				}

				$.getScript(src, function () {
					cache.push(src);
				});
			}
		}, {offset: h-distance});
	});
})(window.jQuery);
