function extractNameFromTemplate(str) {
  const comma = str.indexOf(',');
  const sign = str.indexOf('!');
  console.log(str.substring(comma + 2, sign));
}

extractNameFromTemplate('Hello, Chuck Norris!');
