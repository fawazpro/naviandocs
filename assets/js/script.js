$(document).ready(function() {
	jQuery('a[href^="#"]').smoothScroll({ speed: 200 });
    jQuery('#documenter_nav a').click(function() {
        jQuery('#documenter_nav a.current').removeClass('current');
        jQuery(this).addClass('current');
    });
});