// JavaScript File
$(document).ready(function() {

          $("#btn").click(function(){
         var input3 = $("#input1").val();
          
          $.getJSON(
     
      "https://api.giphy.com/v1/gifs/search?q="+ input3 + "&api_key=dc6zaTOxFJmzC",
      
      function(response) {
        console.log(response);
        $("#gif").append("<img src=" + response.data[0].images.original.url + ">");
         $("#gif").append("<img src=" + response.data[1].images.original.url + ">");
          $("#gif").append("<img src=" + response.data[2].images.original.url + ">");
         $("#gif").append("<img src=" + response.data[3].images.original.url + ">");
        $("#gif").append("<img src=" + response.data[4].images.original.url + ">");
        
      });
    $("#gif").show(); 
  });
 $("#btnc").click(function(){
     $("#input3").remove();
     $("#gif").hide();
 })
});