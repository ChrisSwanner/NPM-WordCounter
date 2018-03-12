

export function wordCount(entry) {
  wordArray = entry.split(" ");
  count = wordArray.length;
  return count;
}

export function isLetter(str) {
  return str.length === 1 && str.match(/[a-z]/i);
}

export function vowelCount(entry) {
  lowerEntry = entry.toLowerCase();
  charArray = lowerEntry.split("");
  vowelArray = [];

  charArray.forEach(function(char){
    if (char.match(/^[aeiou]$/i)) {
      vowelArray.push(char);
    }
  });

  return vowelArray.length;
}

export function consCount(entry) {
  lowerEntry = entry.toLowerCase();
  charArray = lowerEntry.split("");
  conArray = [];

  charArray.forEach(function(char){
    if (char.match(/^[bcdfghjklmnpqrstvwxyz]$/i)) {
      conArray.push(char);
    }
  });

  return conArray.length;
}

export function getTeaser (entry) {
  entryArray = entry.split(" ");
  resultArray = [];
  for (i = 0; i < 8; i++) {
    if (i>0 && entryArray[i-1].includes('.')){
      break;
    }
    resultArray.push(entryArray[i]);
  }

  return resultArray.join(" ");
}
