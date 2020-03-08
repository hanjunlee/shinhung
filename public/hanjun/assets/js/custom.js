// onepage scroll
$(window).on('load', function() {
    $('.main').onepage_scroll();    
})
// issue 347 in onepage-scroll
// see https://github.com/peachananr/onepage-scroll/issues/347
jQuery.event.special.mousewheel = { setup: function( _, ns, handle ){ console.log(ns); if ( ns.includes("noPreventDefault") ) { this.addEventListener("mousewheel", handle, { passive: true }); } else { this.addEventListener("mousewheel", handle, { passive: false }); } } };