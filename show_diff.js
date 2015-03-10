setTimeout(start, 2000);

function start(){//if the title is correct and it looks like it's for specs
	if(document.getElementsByTagName("title")[0].innerHTML === "Jasmine Specs" && (/localhost:\d{4}\/specs#?/.test(document.URL) || /^localhost:\d{4}\/specs\?spec=/.test(document.URL))){
		
		//show the diff for every div with class name "result-message"
		var divs = document.getElementsByTagName("div");
		for(var i = 0; i < divs.length; i++){
			if(divs[i].className == "result-message"){
				showDiff(divs[i]);
			}
		}
	}
}

function showDiff(div){
	//console.log(div.innerText);
	var diff = getDiff(div.innerText);
	var diff_html = "<div><table style=\"background-color: #FFF; font-size: 10pt\"><tr style=\"background-color: #faa\"><td>Expected:</td><td>" + diff.expected + "</td></tr><tr style=\"background-color: #afa\"><td>Actual:</td><td>" + diff.actual + "</td></tr><tr><td colspan=\"2\"><a href=\"http://github.com/Nateowami/JasmineDiff/\">JasmineDiff</a> version 0.1 for Jasmine 2.0.1</td></tr></table</div>";
	div.innerHTML += diff_html;
}

function getDiff(text){
	var actual = text.substring(10, text.indexOf(" to equal "));
	var expected = text.substring(text.indexOf(" to equal ")+11, text.length-1);
	var diff = JsDiff.diffChars(expected, actual);
	
	var diff_expected = "", diff_actual = "";
	
	diff.forEach(function(part){
		if(part.removed){
			diff_expected += "<span style=\"background-color: #ff4444\">" + escapeHtml(part.value) + "</span>";
			foundDiff = true;
		}
		else if(part.added){
			diff_actual += "<span style=\"background-color: #44ff44\">" + escapeHtml(part.value) + "</span>";
			foundDiff = true;
		}
		else{
			var value = escapeHtml(part.value)
			diff_expected += value;
			diff_actual += value;
		}
	});
	return {expected: diff_expected, actual: diff_actual};
}

//from http://stackoverflow.com/questions/24816/escaping-html-strings-with-jquery
function escapeHtml(string) {
	var entityMap = {
	"&": "&amp;",
	"<": "&lt;",
	">": "&gt;",
	'"': '&quot;',
	"'": '&#39;',
	"/": '&#x2F;',
	" ": '&nbsp;'//not part of original
	};
	return String(string).replace(/[ &<>"'\/]/g, function (s) {
		return entityMap[s];
	});
}
