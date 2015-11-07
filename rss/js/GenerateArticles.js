
var MaxLength = 10; /* writing HTML */

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

        // Skriver ut text om artikeln
        document.write('<div id="articleContent' + i + '" class="articleContent"></div>');

        // Skriver ut URL för filmklippet
        document.write('<p id="MovieReference' + i + '"></p>');

        document.write('<div data-role="controlgroup" data-type="horizontal">');

        // Knapp för förgående artikel
        document.write('<a id="prev" href="#article' + String(i - 1) + '" data-role="button" data-icon="arrow-l"'
                + 'data-inline="true" class="prevButton">Prev</a>');

        // Knapp för nästa artikel
        document.write('<a id="next" href="#article' + String(i + 1) + '" data-role="button" data-icon="arrow-r"'
                + 'data-inline="true" class="nextButton" data-iconpos="right">Next</a>');

        document.write('</div>' + '</div>' + '</div>');
    }