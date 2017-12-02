

var apiUrl1 = "http://api.wordnik.com:80/v4/word.json/";
var apiUrl2 ="/definitions?limit=200&includeRelated=true&sourceDictionaries=webster&useCanonical=false&includeTags=false&api_key=63280c6c8c8196b97200707d5db0a2cc9bf0047fa36011ef9";
var word = document.getElementById('input').value;
var getData = apiUrl1 + word + apiUrl2;

  console.log(getData);

document.getElementById('button').addEventListener('click', function(){
  console.log(word);
  /*var myRequest = new XMLHttpRequest();
  myRequest.open('GET', getData);
  myRequest.onload = function (){
    var myData = JSON.parse(myRequest.responseText);
    console.log(myData[0].text);
  };
  myRequest.send();
  */
});
