var censoredWords = ['sad', 'bad', 'mad'];
var customCensoredWords = [];
function censor(inStr){
	for(idx in censoredWords){
		inStr = inStr.replace(censoredWords[idx], '****');
	}
	for(idx in customCensoredWords){
		inStr = inStr.replaceA(customCensoredWords[idx], '****');
	}
	return inStr;
}
function addCensordWord(word){
	customCensoredWords.push(word);
}
function getCensoredWords(){
	return getCensoredWords(customCensoredWords);
}
exports.censor = censor;
exports.addCensordWord = addCensordWord;
exports.getCensoredWords = getCensoredWords;