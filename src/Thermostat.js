function Thermostat() {
  this.temperature = 20;
  this.powerSavingMode = true;
}

Thermostat.prototype.up = function(){
  this.powerSavingMode ? this.maxTemp = 25 : this.maxTemp = 32;
  this.temperature == this.maxTemp ? this.temperature++ : this.temperature;
};

Thermostat.prototype.down = function () {
  this.temperature > 10 ? this.temperature-- : this.temperature;
};
