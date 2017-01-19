


function getWordCount(text) {
	return text.length;
}

function tokenizeText(text) {
  return text.toLowerCase().match(/\b[^\s]+\b/g).sort();
}

function reportOnString(text) {
	var token = tokenizeText(text);
	var wordCount = getWordCount(token);
	var avgWrdLength = token.join("").length / token.length;
	

}

function getInput() {
	$('#user-input').submit(function(event) {
		event.preventDefault();
		var inputVal = $('#user-text').val();
		reportOnString(inputVal);
	})
}

$(function() {
	getInput();
})

