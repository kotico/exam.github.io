$(function() {

	//jQuery slider is started
    
    var id1 = $('#slider1');
    var id2 = $('#slider2');
    var id3 = $('#slider3');

    slider(id1);
    slider(id2);
    slider(id3);

    function slider(idSlider) {

    	var elemWrap = idSlider,
    	    elem = elemWrap.find('.img'),
    	    indexImg  = 1,
    	    indexMax = elem.length,
    	    phase = 3000;

    	function change() {

    		elem.fadeOut(500);
    		elem.filter(':nth-child('+indexImg+')').fadeIn(500);
    	}

    	function autoCange () {
    		indexImg++;
    		if(indexImg > indexMax) {
    			indexImg = 1;
    		}
    		change ();
    	}

    	var interval = setInterval(autoCange, phase);

    	elemWrap.mouseover(function() {
    		clearInterval(interval);
    	});
        elemWrap.mouseout(function() {
        	interval = setInterval(autoCange, phase);
        });

        elemWrap.append('<span class="next"></span><span class="prev"></span>');
        var bthNext = $('span.next'),
            bthPrev = $('span.prev');

        bthNext.click(function() {
        	indexImg++;
        	if(indexImg > indexMax) {
        		indexImg = 1;
        	}
        	change ();
        });
        bthPrev.click(function() {
        	indexImg--;
        	if(indexImg < 1) {
        		indexImg = indexMax;
        	}
        	change ();
        });
    }

//jQuery slider is finished

//isotop plugin is started

var $grid = $('.grid').imagesLoaded(function() {

	$grid.isotope({

		itemSelector: '.grid-item',
		layoutMode: 'fitRows'
	});
});
//isotop plugin is finished



//ajax is started

$.ajax({
	type: 'GET',
	url: 'http://api.pixplorer.co.uk/image?word=' + 'hawaii' + '&amount=7&size=300',

	dataType: 'json',
	success: function(data) {
		var arrImageurl = _.map(data.images, 'imageurl');

		$('.grid-item').each(function(i) {
			$(this).css('backgroundImage', 'url('+arrImageurl[i]+')');
		});
	},
	error: function() {
		//ошибка, в IE8,9 не работает
		console.log('The request fails');
	}
});

$('.input-activities__find-bth').on('click', function(e) {

	var search = $('.input-activities__input-search').val();

	e.preventDefault();
	    if(search) {
	    	$('.input-activities__input-search').val('');

	    $.ajax({
	    	type: 'GET',
	    	url: 'http://api.pixplorer.co.uk/image?word=' + search + '&amount=7&size=300',
	        
	        dataType: 'json',
	        success: function(data) {
	        	var arrImageurl = _.map(data.images, 'imageurl');

	        	$('.grid-item').each(function(i) {

	        		$(this).css('backgroundImage', 'url('+arrImageurl[i]+')');

	        	});

	        	$('.grid-item > div > p').text(search);
	        },
	        error: function() {
	        	console.log('The request fails');
	        }
	    });
	    }
});

//ajax is finished

});