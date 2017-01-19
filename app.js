


function getWordCount(text) {
	return text.length;
}

function avgWordsPerSentence(text) {
	var numOfSentences = text.match(/[.!?]+/g) ? text.match(/[.!?]+/g).length : 1;
	var wordCount = tokenizeText(text).length;
	return (wordCount / numOfSentences).toFixed(2);
}

function getDistinctWordCount(text) {
	var distinctWords = [];
	for(var i = 0; i < text.length; i++) {
		if(distinctWords.indexOf(text[i]) === -1){
			distinctWords.push(text[i]);
		}
	}
	return distinctWords.length;
}

function tokenizeText(text) {
  return text.toLowerCase().match(/\b[^\s]+\b/g).sort();
}

function reportOnString(text) {
	var token = tokenizeText(text);
	var wordCount = getWordCount(token);
	var avgWrdLength = token.join("").length / token.length;
	avgWrdLength = avgWrdLength.toFixed(2);
	var distinctWordCount = getDistinctWordCount(token);
	var avgSentenceLength = avgWordsPerSentence(text);


	var textReport = $('.text-report');
	textReport.find('.word-count').text(wordCount);
	textReport.find('.unique-word-count').text(distinctWordCount);
	textReport.find('.avg-word-length').text(avgWrdLength);
	textReport.find('.avg-sentence-length').text(avgSentenceLength);
	textReport.removeClass('hidden');
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

