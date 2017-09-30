module.exports = function check(str, bracketsConfig) {
	str = str.split("");
	let len = str.length,
	    arr = [];

	for (let i = 0; i < len; i++){
		for (let j = 0; j < bracketsConfig.length; j++){
			if(str[i] == bracketsConfig[j][1] && arr[arr.length - 1] == bracketsConfig[j][0]){
				arr.pop();
			} else if(str[i] == bracketsConfig[j][0]){
				arr.push(str[i]);
			}
		}
	}
	return arr.length == 0 &&  len % 2 == 0 ?  true : false;
}
