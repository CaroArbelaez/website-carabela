(function(e) {
    "use strict";
    e.jribbble = {};
    var t = function(t, s) {
        e.ajax({type: "GET", url: "http://api.dribbble.com" + t, data: s[1] || {}, dataType: "jsonp", success: function(e) {
                e === undefined ? s[0]({error: !0}) : s[0](e)
            }})
    }, s = {getShotById: "/shots/$/", getReboundsOfShot: "/shots/$/rebounds/", getShotsByList: "/shots/$/", getShotsByPlayerId: "/players/$/shots/", getShotsThatPlayerFollows: "/players/$/shots/following/", getPlayerById: "/players/$/", getPlayerFollowers: "/players/$/followers/", getPlayerFollowing: "/players/$/following/", getPlayerDraftees: "/players/$/draftees/", getCommentsOfShot: "/shots/$/comments/", getShotsThatPlayerLikes: "/players/$/shots/likes/"}, o = function(e) {
        return function() {
            var s = [].slice.call(arguments), o = e.replace("$", s.shift());
            t(o, s)
        }
    };
    for (var r in s)
        e.jribbble[r] = o(s[r])
})(jQuery, window, document);