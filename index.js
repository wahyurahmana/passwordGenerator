function changeVocals(str) {
	let nextVokal = "bjvfp";
	let vokal = "aiueo";
	let result = ""
	let count = 0
	for(let i = 0; i < str.length;i++){
		let huruf = str[i]
		for(let j = 0; j < vokal.length;j++){
			if(huruf.toLowerCase() === vokal[j]){
				result += nextVokal[j]
				count++
				break
			}else{
				count = 0
			}
		}
		if (count === 0 ) {
			result+= huruf
		}
	}
	return result
}

function reverseWord(str){
	let result = ""
	for(let i = str.length-1; i >= 0; i--){
		result += str[i]
	}
	return result
}

function setLowerUpperCase(str){
	let lowerCase = str.toLowerCase()
	let upperCase =str.toUpperCase()
	let result = ""

	for(let i = 0; i < str.length;i++){
		for(let j = 0; j < lowerCase.length; j++){
			if (str[i] === lowerCase[j]) {
				result += str[i].toUpperCase()
				break
			}
		}
		for(let j = 0; j < upperCase.length; j++){
			if (str[i] === upperCase[j]) {
				result += str[i].toLowerCase()
				break
			}
		}
	}
	return result

}

function removeSpace(str) {
	let result = ""
	for(let i = 0; i < str.length; i++){
		if (str[i] === " ") {
			continue
		}
		result += str[i]
	}
	return result
}

function passwordGenerator(str) {

	if (str.length < 5) {
		return "Minimal Karakter Yang Di Inputkan Adalah 5"
	}

	let changeVocalsData = changeVocals(str)
	//console.log(changeVocalsData)
	let reverseWordData = reverseWord(changeVocalsData)
	//console.log(reverseWordData)
	let setLowerUpperCaseData = setLowerUpperCase(reverseWordData)
	//console.log(setLowerUpperCaseData)
	let removeSpaceData = removeSpace(setLowerUpperCaseData)
	return removeSpaceData
}
console.log(passwordGenerator("Sergei Dragunov"))