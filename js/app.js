/* using jquery method */

$(document).ready(init);

function init() {
	// body...
    getQuote();
	$('#new-quote').on("click", getQuote);
}

function getQuote () {
	var text;
	var author;
  /* getting the api file and putting it in the 'json' atribute */
    $.getJSON("https://api.forismatic.com/api/1.0/?format=jsonp&method=getQuote&jsonp=?&lang=en", function(json) {
		text = json.quoteText;
		 author = json.quoteAuthor;
        
		$('#qoute-text').text('"' + text + '"');

		 if (author == "") {
		 	$('#quote-author').text('- No author -');
		 } else {
			 $('#quote-author').text('- ' + author + ' -');
		 }
         $('#tweetQuote').attr('href', 'https://twitter.com/intent/tweet?text=' + text).attr('target', '_blank');

    });
}
