<?php $title='RSS reader'; include(__DIR__ . '/../header.php'); ?> 

<div id='flash' width = "600" height = "600">
<h1> Om produkten </h1>

Denna produkt gör det möjligt att följa en RSS feed från en valfri sida och sedan laddar 10 st artiklar
från en hemsida. Funktionaliteten för denna produkt är att man kan läsa, filtrera och gå till den webbsida som
tillhandahåller artikeln.

Det problem som den löser är att man kan använda detta program på alla typer av enheter och operativsystem
(datorer, mobiltelefoner, plattor etc.) som stödjer HTML, CSS och Javascript. Det gör det enklare att få
en sammanfattad översikt över nyhetsartiklar som kan vara från vilken hemsida som har en RSS-feed (i detta fall är det Aftonbladets RSS feed).

(Allt material som hämtas automatiskt från RSS feeden använder standardiserade s.k. "tags", som representerar
artikelns titel, bild samt ingress.)

<h2> Installation & konfiguration </h2>

För att utnyttja denna produkt skall man inkludera följande JQuery och JQuery mobile bibliotek i header tag på en HTML sida.

På samma sida ska man inkludera de tre Javascript filer som ingår i produkten. Man länkar filerna genom s.k. "script" taggar:

<ul>Korrekt upplägg</ul>

<p>Header</p>
<p>
    &lt;script type='text/javascript' src='http://code.jquery.com/jquery-1.7.1.js'&gt;&lt;/script&gt; </br>
    &lt;script type='text/javascript' src="http://code.jquery.com/mobile/1.0.1/jquery.mobile-1.0.1.js"&gt;&lt;/script&gt; </br>
    &lt;script type='text/javascript' src="http://code.jquery.com/jquery-1.6.2.min.js"&gt;&lt;/script&gt; </br>
</p>
<p>Body</p>
<p>
&lt;script type='text/javascript'src="http://www.student.bth.se/~milc15/dbwebb-kurser/javascriptAjax/kmom0710/rss/js/GenerateLayout.js"&gt;&lt;/script&gt; </br>
&lt;script src="http://www.student.bth.se/~milc15/dbwebb-kurser/javascriptAjax/kmom0710/rss/js/GenerateArticles.js"&gt;&lt;/script&gt; </br>
&lt;script type='text/javascript' src="http://www.student.bth.se/~milc15/dbwebb-kurser/javascriptAjax/kmom0710/rss/js/FetchArticles.js"&gt;&lt;/script&gt; </br>
</p>


<h1> Github Källkod </h1>



<center>
<iframe src = "http://www.student.bth.se/~milc15/dbwebb-kurser/javascriptAjax/kmom0710/rss/index.php" height = "700" width = "600">
</iframe>
</center>
</div> <!-- end flash --> 

<?php $path=__DIR__; include(__DIR__ . '/../footer.php'); ?> 