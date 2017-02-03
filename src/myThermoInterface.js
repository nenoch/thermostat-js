$( document ).ready(function() {

  var thermostat = new Thermostat();

  $("p#PSM").text("Power Saving Mode ON");

  $("button#power-saving").click(function(){
    thermostat.powerSavingModeSwitcher()
    if (thermostat.powerSavingMode == true) {
      $("p#PSM").text("Power Saving Mode ON");
      $("p#PSM").removeClass("bg-info");
      $("p#PSM").addClass("bg-success");
    } else {
      $("p#PSM").text("Power Saving Mode OFF");
      $("p#PSM").removeClass("bg-success");
      $("p#PSM").addClass("bg-info");
    }
    updateUsage()
    });

    $("button#reset").click(function(){
      thermostat.reset()
      $("h2#temperature-display").text("20 ºC");
      updateUsage()
    });

    $("button#up").click(function(){
      thermostat.up()
      $("h2#temperature-display").text(thermostat.temperature.toString() + "ºC");
      updateUsage()
    });

    $("button#down").click(function(){
      thermostat.down()
      console.log(thermostat.temperature)
      $("h2#temperature-display").text(thermostat.temperature.toString() + "ºC");
      updateUsage()
    });

     function updateUsage(){
       $("h3#usage-display").text(thermostat.currentUsage() + " Usage");
       if (thermostat.currentUsage() == "Low") {
         $("h3#usage-display").css('color', 'green');
       } else if (thermostat.currentUsage() == "Medium") {
         $("h3#usage-display").css('color', 'black');
       } else
        $("h3#usage-display").css('color', 'red');
     };


});
