$(function () {
    var hash = window.location.hash;
    if (hash) {
        var container = $(hash + '.container');
        var containers = $('.container');
        var currentContainer = containers.filter(function () {
            if ($(this).css('display') === 'flex') {
                return true;
            }
        });
        if (container.length === 1 && !container.is(currentContainer) && container.css('display') !== 'flex' && $('.old-browser').css('display') === 'none') {
            containers.css({display: 'none'});
            container.css({display: 'flex'})
        }
    }

    $('.left').click(function (e) {
        e.preventDefault();
        var containers = $('.container');
        var currentContainer = containers.filter(function () {
            if ($(this).css('display') === 'flex') {
                return true;
            }
        });
        var prev = currentContainer.prev('.container');
        if (prev.length === 0) {
            prev = $('.container:last');
        }
        containers.css({display: 'none'});
        prev.css({display: 'flex'});
        if (prev.attr('id')) {
            window.location.hash = prev.attr('id');
        }
    });

    $('.right').click(function (e) {
        e.preventDefault();
        var containers = $('.container');
        var currentContainer = containers.filter(function () {
            if ($(this).css('display') === 'flex') {
                return true;
            }
        });
        var next = currentContainer.next('.container');
        if (next.length === 0) {
            next = $('.container:first');
        }
        containers.css({display: 'none'});
        next.css({display: 'flex'});
        if (next.attr('id')) {
            window.location.hash = next.attr('id');
        }
    });

    $('.colors').click(function () {
        $('body').toggleClass('light-colors');
    });
});