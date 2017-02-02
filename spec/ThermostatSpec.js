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

  it('can be reset to 20 degrees', function(){
    thermostat.reset()
    expect(thermostat.temperature).toEqual(20)
  });

  describe('Energy report', function() {
    it('low usage if temperature under 18 degrees', function(){
      thermostat.temperature = 17
      console.log(thermostat.currentUsage())
      expect(thermostat.currentUsage()).toEqual('Low')
    });
    it('medium usage if temperature between 18 and 25 degrees', function(){
      thermostat.temperature = 22
      expect(thermostat.currentUsage()).toEqual('Medium')
    });
    it('high usage if temperature >= 25 degrees', function(){
      thermostat.temperature = 26
      expect(thermostat.currentUsage()).toEqual('High')
    });
  });

  describe('Power saving mode', function() {

    it('is on by default', function(){
      expect(thermostat.powerSavingMode).toBeTruthy()
    });

    it('can be turned off', function(){
      thermostat.powerSavingModeSwitcher()
      expect(thermostat.powerSavingMode).toEqual(false)
    });

    it('Thermostat has maximum temperature of 25 degrees when on', function(){
      for(i = 0; i < 11; i++) {
        thermostat.up();
      }
      expect(thermostat.temperature).toEqual(25)
    });

    it('Thermostat has maximum temperature of 32 degrees when off', function(){
      thermostat.powerSavingModeSwitcher()
      for(i = 0; i < 20; i++) {
        thermostat.up();
      }
      expect(thermostat.temperature).toEqual(32)
    });

  });

});
