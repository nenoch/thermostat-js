describe('Thermostat', function() {

  beforeEach(function(){
    thermostat = new Thermostat;
  });

  it('Thermostat starts at 20 degrees', function(){
    expect(thermostat.temperature).toEqual(20)
  });

  it('increases temperature', function(){
    thermostat.up()
    expect(thermostat.temperature).toEqual(21)
  });

  it('decreases temperature', function(){
    thermostat.down()
    expect(thermostat.temperature).toEqual(19)
  });

  it('has a minimum temperature of 10 degrees', function() {
    for(i = 0; i < 11; i++) {
      thermostat.down();
    }
    expect(thermostat.temperature).toEqual(10)
  });

  describe('Power saving mode on', function() {
    it('Thermostat has maximum temperature of 25 degrees', function(){
      for(i = 0; i < 11; i++) {
        thermostat.up();
      }
      expect(thermostat.temperature).toEqual(25)
    });
  });

});
