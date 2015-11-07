
    var MaxLength = 20; /* writing HTML */

    document.write('<div data-role="page" id="list">');

    document.write('<div data-role="header" data-position="fixed">');

    document.write('<h1><span id="widgetTitle">...</span>');

    document.write('<span style="font-size: x-small"></span></h1>');

    document.write('</div>');

    document.write('<div data-role="content">');

    document.write('<ul data-role="listview" data-filter="true" id="articleList">');

    for (var i = 1; i <= MaxLength; i++)
    {
        document.write('<li id="list' + i + '"><a href="#article' + i + '" id="link' + i + '">&nbsp;</a></li>');
    }

    document.write('</ul>'+'</div>'+'</div>');

    for (i = 1; i <= MaxLength; i++)
    {
        document.write('<div data-role="page" id="article' + i + '">');

        document.write('<div data-role="header" data-position="inline">');

        document.write('<a href="#list" data-role="button" data-icon="home" data-back="true">Home</a>');

        document.write('<h1 id="articleHeader' + i + '">&nbsp;"');

        document.write('</h1>');

        document.write('<a href="#" id="openButton' + i + '" data-role="button" data-icon="plus"' + 'class="ui-btn-right" rel="external">Open</a>');

        document.write('</div>');

        document.write('<div data-role="content">');

        // LÃ¤gger till FLV video till
        document.write('<embed  wmode="transparent" style="right: 200px;" id="video' + i + '" width="640" height="480" name="plugin" src=""' +
                'type="application/x-shockwave-flash"pluginspage=http://www.macromedia.com/go/getflashplayer">');

        // Skriver ut text om artikeln
        document.write('<div id="articleContent' + i + '" class="articleContent"></div>');

        // Skriver ut URL fÃ¶r filmklippet
        document.write('<p id="MovieReference' + i + '"></p>');

        document.write('<div data-role="controlgroup" data-type="horizontal">');

        // Knapp fÃ¶r fÃ¶rgÃ¥ende artikel
        document.write('<a id="prev" href="#article' + String(i - 1) + '" data-role="button" data-icon="arrow-l"'
                + 'data-inline="true" class="prevButton">Prev</a>');

        // Knapp fÃ¶r nÃ¤sta artikel
        document.write('<a id="next" href="#article' + String(i + 1) + '" data-role="button" data-icon="arrow-r"'
                + 'data-inline="true" class="nextButton" data-iconpos="right">Next</a>');

        document.write('</div>' + '</div>' + '</div>');
    }
    /* JSONP */
    $(function()
    {
        var x = getOnlineFeed('http://www.aftonbladet.se/rss.xml');
    });

    function OnHashChange (event)
    {
        for (var i = 1; i <= sessionStorage.lengthy; i++)
        {
         if("#article" + i == document.location.hash)
         {
          ParseVideos("https://www.flashback.org/external.php?type=rss");
          return;
         }
        }
    }


    function ParseVideos(url)
    {
        if (window.XMLHttpRequest)
        {
            xmlhttp=new XMLHttpRequest();
        }
        else
        {
            xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
        }

        xmlhttp.onreadystatechange=function()
        {
            if (xmlhttp.readyState==4 && xmlhttp.status==200)
            {
                var z = 1;

                var movie = new Array();
                $(xmlhttp.responseText).find('enclosure').each(function()
                {
                    movie[z] = $(this).attr('url');
                    z += 1;
                })

                alert("Successfully parsed RSS website!");

                var url = document.URL;

                url = url.toString();

                var ref = url.substr(url.length-1, url.length);

                $('#MovieReference' + ref).append("URL: " + movie[ref]);
                $('#video' + ref).attr('src',"http://blip.tv/scripts/flash/blipplayer.swf?autoStart=false&file=" + movie[ref]);
            }
        }

        xmlhttp.open("GET",url,true);
        xmlhttp.send();
    }




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

        script.setAttribute('src',      // ListEntries variabeln gÃ¶r det mÃ¶jligt att parsa RSS feeden.
                'http://ajax.googleapis.com/ajax/services/feed/load?callback=ListEntries&hl=ja&output=json-in-script&q='
                        + encodeURIComponent(url) +
                        '&v=1.0&num=' +
                        MaxLength);
        script.setAttribute('type', 'text/javascript');
        document.documentElement.firstChild.appendChild(script);
    };

