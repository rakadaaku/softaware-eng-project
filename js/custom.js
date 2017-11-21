/* games */

$(function(){
    //add animation on scrolling
    new WOW().init();
}); 

/* gallary */

$(function () {

    $("#gallary").magnificPopup({
        delegate: 'a', // child items selector, click and popup will open
        type: 'image',
        gallery: {
            enabled: true
        }

    });
});

/* memberinfo */

$(function () {

    $("#team_members").owlCarousel({
        items: 3,
        autoplay: true,
        smartSpeed: 700,
        loop: true,
        autoplayHoverPause: true,
		responsive: {
		  0: {
			items: 1
		  },
		  480: {
			items: 2
		  },
		  768: {
			items: 3
		  }
		}
    });
});


/* sports coordinator */

$(function () {

    $("#sports_coordinators").owlCarousel({
        items: 3,
		responsive: {
		  0: {
			items: 1
		  },
		  480: {
			items: 2
		  },
		  768: {
			items: 3
		  }
		}
    });
});