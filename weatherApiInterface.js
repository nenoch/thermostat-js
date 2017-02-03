$( document ).ready(function() {

  $("#myform").submit(function(event){
    event.preventDefault();
    var city = $("input#selectedcity").val();
    // $.ajax({
    //     url: url,
    //     jsonp: "callback",
    //     dataType: "jsonp",
    //     success: function(data){
    //       console.log(data)
    //       $("#city").append(data.name);
    //       $("#temp").append(data.main["temp"]+"c");
    //     }
    // });
      $.get('http://api.openweathermap.org/data/2.5/weather?q='+city+'&units=metric&APPID=08486ba26d41f73f0d1fc1f3d48c37ff',function(data){
        $("#city").text("City: "+data.name);
        $("#temp").text("Temperature: "+data.main["temp"]+"ºc");
        $("#weather").text("Weather: "+data.weather[0]["description"]);
      });
    });
});
