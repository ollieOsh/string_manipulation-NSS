function validate(event) {
	text.value = text.value.replace(/[^a-zA-Z]+/, '');

	if(event.keyCode === 13){
		doIt();
	}
}

function reversal(str) {
	str = str.split('').reverse().join('');
	document.getElementById('reversal').innerHTML =
	"Reversed: " + str;
	return str;
}

function alphabits(str) {
	document.getElementById('alphabits').innerHTML =
	"Alphabetized: " + str.split('').sort().join('');
}

function palindrome(str) {
	if(str === reversal(str)) {
		document.getElementById('palindrome').innerHTML =
		"Your string is a palindrome"
	}
	else {
		document.getElementById('palindrome').innerHTML =
		"";
	}
}

function doIt() {
	testString = text.value;
	reversal(testString);
	alphabits(testString);
	palindrome(testString);
}

var testString = "",
	text = document.getElementById('txt'),
	btn = document.getElementById('btn');

text.onkeyup = validate;
btn.onclick = doIt;