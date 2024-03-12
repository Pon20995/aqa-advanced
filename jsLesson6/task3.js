const car1 = {
  brand: 'Peugeot',
  model: '206',
  year: 2004,
};

const car2 = {
  brand: 'Honda',
  model: 'Civic',
  owner: 'Slava',
};

const car3 = { ...car1, ...car2 };
console.log(car3);
