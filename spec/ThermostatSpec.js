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





});
