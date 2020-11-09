function findLongestWord(str) {

if(typeof str==="string"){	
  var strSplit = str.split(' ');
  var longestWord = '';
  var len=0;
  for(var i = 0; i < strSplit.length; i++){
    if(strSplit[i].length > len){
				len = strSplit[i].length;
        longestWord = strSplit[i];
     }
  }
  return longestWord;
  }
  
  return "Non correct argument";
}


console.log(findLongestWord("duifh fidsfi iisndfidsiiii"));