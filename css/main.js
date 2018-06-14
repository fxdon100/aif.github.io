




$(document).ready(function(){
    columnChart();
    
    function columnChart(){
        var item = $('.chart', '.column-chart').find('.item'),
        itemWidth = 100 / item.length;
        item.css('width', itemWidth + '%');
        
        $('.column-chart').find('.item-progress').each(function(){
            var itemProgress = $(this),
            itemProgressHeight = $(this).parent().height() * ($(this).data('percent') / 100);
            itemProgress.css('height', itemProgressHeight);
        });
    };
});












$(document).ready(function(){
    	// add button style 
		$("[name='poll_bar'").addClass("btn btn-default");
		// Add button style with alignment to left with margin.
		$("[name='poll_bar'").css({"text-align":"left","margin":"5px"});		
		
		//loop 
		$("[name='poll_bar'").each(
				function(i){			
				  //get poll value 	
					var bar_width = (parseFloat($("[name='poll_val'").eq(i).text())/2).toString();					
					bar_width = bar_width + "%"; //add percentage sign.										
					//set bar button width as per poll value mention in span.
					$("[name='poll_bar'").eq(i).width(bar_width);					
					
					//Define rules.
					var bar_width_rule = parseFloat($("[name='poll_val'").eq(i).text());					 
					if(bar_width_rule >= 50){$("[name='poll_bar'").eq(i).addClass("btn btn-sm btn-success")}
					if(bar_width_rule <  50){$("[name='poll_bar'").eq(i).addClass("btn btn-sm btn-warning")}
					if(bar_width_rule <= 10){$("[name='poll_bar'").eq(i).addClass("btn btn-sm btn-danger")}					
					
					//Hide dril down divs
					$("#" + $("[name='poll_bar'").eq(i).text()).hide();
	  });
	  
	  //On click main menu bar show its particular detail div.
	  $("[name='poll_bar'").click(function()
	  {  
	     //Hide all 
	     $(".panel-body").children().hide();
	     //Display only selected bar texted div sub chart.
	     $("#" + $(this).text()).show();
	     //If not inner drill down sub detail found then move to main menu.
	     if($("#" + $(this).text()).length == 0) {
 				   $("#Main").show();	         
				}				
	  }); 
});
	  
	  
	  
	  
	  
	  
	  
	$(document).ready(function(){
    $(".locationLink p").on("click",function(){
        $("#locationtext").html(($(this).html()));
    });
});
	  
	  
	  
	 
	 
	 
	 
	 $('.counter-count').each(function () {
        $(this).prop('Counter',0).animate({
            Counter: $(this).text()
        }, {
            duration: 5000,
            easing: 'swing',
            step: function (now) {
                $(this).text(Math.ceil(now));
            }
        });
    });
	 
	 
	 
	 
	 
	 
	 
	 
	 
	 
	$(document).on("scroll", function(){
		if
      ($(document).scrollTop() > 86){
		  $("#banner").addClass("shrink");
		}
		else
		{
			$("#banner").removeClass("shrink");
		}
	});
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	//Thanks to: http://www.webtipblog.com/adding-scroll-top-button-website/

$(document).ready(function(){

$(function(){
 
    $(document).on( 'scroll', function(){
 
    	if ($(window).scrollTop() > 100) {
			$('.scroll-top-wrapper').addClass('show');
		} else {
			$('.scroll-top-wrapper').removeClass('show');
		}
	});
 
	$('.scroll-top-wrapper').on('click', scrollToTop);
});
 
function scrollToTop() {
	verticalOffset = typeof(verticalOffset) != 'undefined' ? verticalOffset : 0;
	element = $('body');
	offset = element.offset();
	offsetTop = offset.top;
	$('html, body').animate({scrollTop: offsetTop}, 500, 'linear');
}

});




	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	

// Sticky Header
$(window).scroll(function() {    
    var scroll = $(window).scrollTop();

    if (scroll >= 100) {
        $(".top-nav").addClass("light-header");
    } else {
        $(".top-nav").removeClass("light-header");
    }
});

// Year for copy content
$(function(){
var theYear = new Date().getFullYear();
$('#year').html(theYear);
});

