// Only change code below this line
class Thermostat {
  constructor(fah) {
    this._fah = fah;
  }
  get temperature() {
    return (this._fah - 32) * 5 / 9;
  }
  set temperature(inCel) {
    this._fah = inCel * 9.0 / 5 + 32;

  }
}
// Only change code above this line

const thermos = new Thermostat(76); // Setting in Fahrenheit scale
let temp = thermos.temperature; // 24.44 in Celsius
thermos.temperature = 26;
temp = thermos.temperature; // 26 in Celsius