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
    });

    $("button#reset").click(function(){
      thermostat.reset()
      console.log(thermostat.temperature)
      $("h2#temperature-display").text("20 ºC");
      });


});
