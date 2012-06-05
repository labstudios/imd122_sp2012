$(document).ready(function(){
	var paragraphs = $("article header + p"); //grabs what you want to affect. Standard CSS selectors can be used between the quotes
	paragraphs.each(function(i, c){ //goes through all the items
		var par = $(c); //makes the element into a jquery object
		var text = par.html(); //gets the paragraph content
		var firstChar = text.substr(0, 1); //gets the first letter
		var endText = text.substr(1); //gets all other text
		firstChar = "<sup>" + firstChar + "</sup>"; //wraps the first letter in <sup> tags
		text = firstChar + endText; //puts it all together
		par.html(text); //replaces the tag content with the updated text
	});
});