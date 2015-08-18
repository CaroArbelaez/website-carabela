var flickrId = '127775416@N07';
var behanceId = 'designerpreis';
var be_api_key = 'WI2EE4ZoMLS1BX9fT1qpIAGqe7Mq3gUV';
var pLimit = 8;

/* Dribbble Shots using Jribbble plugin */
/*$(document).ready(function() {
 $.jribbble.getShotsByPlayerId("powdah", function(e) {
 var t = [];
 $.each(e.shots, function(e, n) {
 t.push('<li><a href="' + n.url + '">');
 t.push('<img src="' + n.image_url + '" ');
 t.push('alt="' + n.title + '"><span class="d-hover">' + n.title + "<p>view on dribbble</p></span></a></li>")
 });
 $(".thumbs").html(t.join(""))
 }, {page: 1, per_page: 8})
 });*/

function mapProject(project) {
    var n = {
        url: project.url,
        title: project.name,
        image_url: project.covers['404'],
        fields: project.fields.join()
    };
    return n;
}

$(document).ready(function() {
    be(be_api_key);
    be.user.projects(behanceId, function(data) {
        var t = [];
        console.log(data);
        var projects = data.projects;
        for (i = 0; i < pLimit && i < projects.length; i++) {
            var n = mapProject(projects[i]);
            t.push('<li><a href="' + n.url + '">');
            t.push('<img src="' + n.image_url + '" ');
            t.push('alt="' + n.title + '"><span class="d-hover">' + n.title +
                    "<p>" + n.fields.toLowerCase() + "</p></span></a></li>");
        }
        $(".thumbs").html(t.join(""));
    });
});
$(function() {
    $(".service").hover(function() {
        $("#networks").addClass($(this).data("network")).addClass("active");
        $("#networks p").html($(this).data("tip"));
    }, function() {
        $("#networks").removeClass();
        $("#networks p").html("You can find me all over the web");
    });
});
jQuery(document).ready(function() {
    $("#landing").height($(window).height());
    $(window).resize(function() {
        $("#landing").height($(window).height());
        $("#landing").css("min-height", "600px");
    });
    $("#hero").height($(window).height());
    $(window).resize(function() {
        $("#hero").height($(window).height());
        $("#hero").css("min-height", "600px");
    });
    $("#work").height($(window).height());
    $(window).resize(function() {
        $("#work").css('min-height', $(window).height() + 'px');
        $(".showcase-info").css("min-height", "360px");
    });
    $("#photo").height($(window).height());
    $(window).resize(function() {
        $("#photo").css('min-height', ($(window).height()) + 'px');
        $("#photo").css("min-height", "360px");
    });
    $("#networks").height($(window).height());
    $(window).resize(function() {
        $("#networks").css('min-height', $(window).height() + 'px');
        $("#networks").css("min-height", "600px");
    });
});
jQuery(document).ready(function(e) {
    e(".scroll").click(function(t) {
        t.preventDefault();
        e("html,body").animate({scrollTop: e(this.hash).offset().top}, 1e3);
    });
});
jQuery(document).ready(function(e) {
    $.flickr.getPublicPhotos(flickrId, function(photos) {
        var gallery = blueimp.Gallery(
                document.getElementById('pictures').getElementsByTagName('a'),
                {
                    container: '.blueimp-gallery-carousel',
                    carousel: true
                }
        );
        gallery.add(photos);
        $(".slide").click(function() {
            window.open('https://www.flickr.com/photos/' + flickrId);
        });
    });
});