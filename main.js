
document.getElementById('button').addEventListener('click', function(){
  var loading = document.getElementById('wait');
  loading.style.display = "block";
  var word = document.getElementById('input').value;
  var apiUrl1 = "http://api.wordnik.com:80/v4/word.json/";
  var apiUrl2 ="/definitions?limit=200&includeRelated=true&sourceDictionaries=webster&useCanonical=false&includeTags=false&api_key=63280c6c8c8196b97200707d5db0a2cc9bf0047fa36011ef9";

  var getData = apiUrl1 + word + apiUrl2;

  var myRequest = new XMLHttpRequest();
  myRequest.open('GET', getData);
  myRequest.onload = function (){
    var loading = document.getElementById('wait');
    loading.style.display = "none";
    var myData = JSON.parse(myRequest.responseText);
    var container = document.getElementById('result');
    //var resultText = document.createElement('p');
    container.innerText = myData[0].text;

  };


  myRequest.send();

});
