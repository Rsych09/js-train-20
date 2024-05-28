// Функція конструктор Vehicle
function Vehicle(brand, model, year, mileage) {
  this.brand = brand;
  this.model = model;
  this.year = year;
  this.mileage = mileage;

  this.valueOf = function() {
    return this.mileage;
  };

  this.toString = function() {
    return `${this.brand} ${this.model} ${this.year}`;
  };
}

// Конструктор Car, який розширює функціонал Vehicle
function Car(brand, model, year, mileage, fuelType, speed) {
  Vehicle.apply(this, [brand, model, year, mileage]);

  this.fuelType = fuelType;
  this.speed = speed;

  this.toString = function() {
    return `${this.brand} ${this.model} ${this.year} - ${this.fuelType}`;
  };

  this.accelerate = function(increase) {
    this.speed += increase;
    console.log(`Автомобіль ${this.brand} ${this.model} прискорився до швидкості ${this.speed} км/год`);
  };

  this.brake = function(decrease) {
    this.speed -= decrease;
    console.log(`Автомобіль ${this.brand} ${this.model} зменшив до швидкості ${this.speed} км/год`);
  };
}

// Функція конструктор Truck
function Truck(
  brand,
  model,
  year,
  mileage,
  color,
  engineType,
  towingCapacity,
  fuelType,
  transmissionType,
  doors,
  weight
) {
  Vehicle.call(this, brand, model, year, mileage);

  this.color = color;
  this.engineType = engineType;
  this.towingCapacity = towingCapacity;
  this.fuelType = fuelType;
  this.transmissionType = transmissionType;
  this.doors = doors;
  this.weight = weight;

  this.specific = function(weight) {
    if (weight > this.towingCapacity) {
      console.log('Навантаження занадто важке для буксирування');
    } else {
      console.log('Тягнення навантаження...');
    }
  };
}

// Функція конструктор ElectricCar
function ElectricCar(brand, model, year, mileage, batteryCapacity) {
  if (!(this instanceof ElectricCar)) {
    throw new Error('Конструктор має бути викликаний з "new"');
  }

  Car.call(this, brand, model, year, mileage, 'Electric', 0);
  this.batteryCapacity = batteryCapacity;

  this.toString = function() {
    return `${this.brand} ${this.model} ${this.year} - Батарея: ${this.batteryCapacity} kWh`;
  };
}

// Приклади використання

// Створення об'єкту Car
let myCar = new Car('Audi', 'A6', 2018, 30000, 'Petrol', 0);

// Створення об'єкту Truck
let myTruck = new Truck('Toyota', 'Tundra', 2019, 20000, 'Red', 'V8', 10000, 'Gasoline', 'Automatic', 4, 5600);

// Виклик методів об'єкту Car
myCar.toString(); // Повертає рядок 'Audi A6 2018 - Petrol'
myCar.accelerate(50); // Виводить у консоль 'Автомобіль Audi A6 прискорився до швидкості 50 км/год'
myCar.brake(20); // Виводить у консоль 'Автомобіль Audi A6 зменшив до швидкості 30 км/год'

// Виклик методу specific об'єкту Truck
myTruck.specific(8000); // Виводить у консоль 'Тягнення навантаження...'
myTruck.specific(12000); // Виводить у консоль 'Навантаження занадто важке для буксирування'

// Створення об'єкту ElectricCar
let tesla = new ElectricCar('Tesla', 'Model S', 2020, 10000, 100);

// Виклик методу toString об'єкту ElectricCar
console.log(tesla.toString()); // Повертає рядок 'Tesla Model S 2020 - Батарея: 100 kWh'
