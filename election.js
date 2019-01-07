document.addEventListener("DOMContentLoaded", function() {

 const AjaxRequestBtn = document.querySelector('#button');
 var list = document.querySelector('#list');
 var index = 0;

 AjaxRequestBtn.addEventListener('click', function() {
   const request = axios({
     url:'https://bb-election-api.herokuapp.com/',
     method: 'GET'
   })
   .then(function(responseData) {
      console.log(responseData);
      list.innerText = "";

    responseData.data.candidates.forEach( function (candidate) {
  
        var liTag = document.createElement('li');
        var h3Tag = document.createElement('h4');
        var h4Tag = document.createElement('p');
        h3Tag.innerText = "Name: " + candidate.name;
        h4Tag.innerText = "Votes: " + candidate.votes;
        liTag.append(h3Tag);
        liTag.append(h4Tag);
        list.append(liTag);
        index++;
      });
    });

  });



  // Imagination!

});
