


(
    function($) {
    var $dragMe1 = $('#dr1'),
    $container1 = $("#sl1"),
    $viewBefore1 = $("#c1");
    
    $dragMe1.draggable({
        containment: "parent",
        drag: function() {
            $viewBefore1.css({
                width : parseFloat($(this).css('left')) + 5
            });
        }
    });
    $container1.on("click", function(event) {
        var eventLeft = event.pageX - $container1.offset().left - 15;
        animateTo(eventLeft);
    });
    animateTo("50%");
    function animateTo(_left) {
        $dragMe1.animate({
            left: _left
        }, 'slow', 'linear');
        $viewBefore1.animate({
            width: _left
        }, 'slow', 'linear');
    }
})(jQuery);

(function($) {
    var $dragMe2 = $('#dr2'),
    $container2 = $("#sl2"),
    $viewBefore2 = $("#c2");
    
    $dragMe2.draggable({
        containment: "parent",
        drag: function() {
            $viewBefore2.css({
                width : parseFloat($(this).css('left')) + 5
            });
        }
    });
    $container2.on("click", function(event) {
        var eventLeft = event.pageX - $container2.offset().left - 15;
        animateTo(eventLeft);
    });
    animateTo("50%");
    function animateTo(_left) {
        $dragMe2.animate({
            left: _left
        }, 'slow', 'linear');
        $viewBefore2.animate({
            width: _left
        }, 'slow', 'linear');
    }
})(jQuery);

(function($) {
    var $dragMe3 = $('#dr3'),
    $container3 = $("#sl3"),
    $viewBefore3 = $("#c3");
    
    $dragMe3.draggable({
        containment: "parent",
        drag: function() {
            $viewBefore3.css({
                width : parseFloat($(this).css('left')) + 5
            });
        }
    });
    $container3.on("click", function(event) {
        var eventLeft = event.pageX - $container3.offset().left - 15;
        animateTo(eventLeft);
    });
    animateTo("50%");
    function animateTo(_left) {
        $dragMe3.animate({
            left: _left
        }, 'slow', 'linear');
        $viewBefore3.animate({
            width: _left
        }, 'slow', 'linear');
    }
})(jQuery);

(function($) {
    var $dragMe4 = $('#dr4'),
    $container4 = $("#sl4"),
    $viewBefore4 = $("#c4");
    
    $dragMe4.draggable({
        containment: "parent",
        drag: function() {
            $viewBefore4.css({
                width : parseFloat($(this).css('left')) + 5
            });
        }
    });
    $container4.on("click", function(event) {
        var eventLeft = event.pageX - $container4.offset().left - 15;
        animateTo(eventLeft);
    });
    animateTo("50%");
    function animateTo(_left) {
        $dragMe4.animate({
            left: _left
        }, 'slow', 'linear');
        $viewBefore4.animate({
            width: _left
        }, 'slow', 'linear');
    }
})(jQuery);


