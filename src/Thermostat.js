function Thermostat() {
  this.temperature = 20;
  this.powerSavingMode = true;
  this.PSM_ON_MAX_TEMP = 25
  this.PSM_OFF_MAX_TEMP = 32
  this.maxTemp = this.PSM_ON_MAX_TEMP
  this.minTemp = 10

}

Thermostat.prototype.up = function(){
  this.powerSavingMode ? (this.maxTemp = this.PSM_ON_MAX_TEMP) : (this.maxTemp = this.PSM_OFF_MAX_TEMP);
  this.temperature == this.maxTemp ? this.temperature : this.temperature++;
};

Thermostat.prototype.down = function () {
  this.temperature > this.minTemp ? this.temperature-- : this.temperature;
};

Thermostat.prototype.powerSavingModeSwitcher = function () {
  if (this.powerSavingMode == true) {
    this.powerSavingMode = false
    console.log("Power Saving Mode OFF")
  } else {
    this.powerSavingMode = true
    console.log("Power Saving Mode ON")
  }
};

Thermostat.prototype.reset = function () {
  this.temperature = 20;
};

Thermostat.prototype.currentUsage = function () {
  if (this.temperature < 18) {
    return 'Low'
  } else if (this.temperature < 25) {
    return 'Medium'
  } else { return 'High' }
};
