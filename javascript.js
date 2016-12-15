// JavaScript File
$(document).ready(function() {

   $.getJSON(
     
      "https://api.giphy.com/v1/gifs/search?q=meme&api_key=dc6zaTOxFJmzC",
     
     
      function(response) {
        console.log(response);
        $("#gif").append("<img src=" + response.data[0].images.original.url + ">");
         $("#gif").append("<img src=" + response.data[1].images.original.url + ">");
          $("#gif").append("<img src=" + response.data[2].images.original.url + ">");
         $("#gif").append("<img src=" + response.data[3].images.original.url + ">");
        $("#gif").append("<img src=" + response.data[4].images.original.url + ">");
        
      });
  });

