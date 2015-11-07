
    /* JSONP */
    $(function()
    {
        var x = getOnlineFeed('http://www.aftonbladet.se/rss.xml');
    });


    var ListEntries = function(json)
    {
        if (!json.responseData.feed.entries) return false;

        $('#widgetTitle').text(json.responseData.feed.title);

        var ArticleLength = json.responseData.feed.entries.length;

        ArticleLength = (ArticleLength > MaxLength) ? MaxLength : ArticleLength;

        sessionStorage.lengthy = ArticleLength;

        for (var i = 1; i <= ArticleLength; i++)
        {
            var entry = json.responseData.feed.entries[i - 1];
            $('#link' + i).text(entry.title);
            $('#articleHeader' + i).text(entry.title);
            $('#openButton' + i).attr('href', entry.link);
            $('#articleContent' + i).append(entry.content);

        }
        $('#article1 .prevButton').remove();
        $('#article' + ArticleLength + ' .nextButton').remove();

        if (ArticleLength < MaxLength)
        {
            for (i = ArticleLength + 1; i <= MaxLength; i++)
            {
                $('#list' + i).remove();
                $('#article' + i).remove();
            }
        }
    };

    var getOnlineFeed = function(url)
    {
        var script = document.createElement('script');

        script.setAttribute('src',      // ListEntries variabeln gör det möjligt att parsa RSS feeden.
                'http://ajax.googleapis.com/ajax/services/feed/load?callback=ListEntries&hl=ja&output=json-in-script&q='
                        + encodeURIComponent(url) +
                        '&v=1.0&num=' +
                        MaxLength);
        script.setAttribute('type', 'text/javascript');
        document.documentElement.firstChild.appendChild(script);
    };