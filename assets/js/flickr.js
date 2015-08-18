(function(e) {
    "use strict";
    e.flickr = {};
    var config = {
        api_key: '7d339e88487e7206c1bb8145476d6361'
    };
    
    e.flickr.getPublicPhotos = function getPublicPhotos(userId, callback) {
        $.ajax({
            url: 'https://api.flickr.com/services/rest/',
            data: {
                format: 'json',
                method: 'flickr.people.getPublicPhotos',
                api_key: config.api_key, // jshint ignore:line
                user_id: userId, // jshint ignore:line
                per_page: 5
            },
            dataType: 'jsonp',
            jsonp: 'jsoncallback'
        }).done(function(result) {
            var photos = [],
                    baseUrl;
            $.each(result.photos.photo, function(index, photo) {
                baseUrl = 'https://farm' + photo.farm + '.static.flickr.com/' +
                        photo.server + '/' + photo.id + '_' + photo.secret;
                photos.push(
                        {
                            title: photo.title,
                            href: baseUrl + '_h.jpg',
                            type: 'image/jpeg',
                        }
                );
            });
            callback(photos);
        }
        );
    };
})(jQuery, window, document);


