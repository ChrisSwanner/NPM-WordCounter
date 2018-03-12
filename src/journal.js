

export function wordCount(entry) {
  var wordArray = entry.split(" ");
  var count = wordArray.length;
  return count;
}

export function isLetter(str) {
  return str.length === 1 && str.match(/[a-z]/i);
}

export function vowelCount(entry) {
  var lowerEntry = entry.toLowerCase();
  var charArray = lowerEntry.split("");
  var vowelArray = [];

  charArray.forEach(function(char){
    if (char.match(/^[aeiou]$/i)) {
      vowelArray.push(char);
    }
  });

  return vowelArray.length;
}

export function consCount(entry) {
  var lowerEntry = entry.toLowerCase();
  var charArray = lowerEntry.split("");
  var conArray = [];

  charArray.forEach(function(char){
    if (char.match(/^[bcdfghjklmnpqrstvwxyz]$/i)) {
      conArray.push(char);
    }
  });

  return conArray.length;
}

export function getTeaser (entry) {
  var entryArray = entry.split(" ");
  var resultArray = [];
  var i;
  for (i = 0; i <= 8; i++) {
    resultArray.push(entryArray[i]);
    if (i>0 && entryArray[i-1].includes('.')){
      break;
    }
  }

  return resultArray.join(" ");
}
