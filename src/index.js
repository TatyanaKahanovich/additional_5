module.exports = function check(str, bracketsConfig) {
	str = str.split("");
	var len = str.length;
	var arr = [];
	for (var i = 0; i < len; i++){
		for (var j = 0; j < bracketsConfig.length; j++){
			if(str[i] == bracketsConfig[j][0] && str[i] !== bracketsConfig[j][1]){
				arr.push(str[i]);
			}
			if(str[i] == bracketsConfig[j][1] && arr[arr.length-1] == bracketsConfig[j][0] && i > 0){
				arr.pop();
			}
		}
	}
	return arr.length === 0 ? true : false;
}