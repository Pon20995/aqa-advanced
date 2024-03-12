const agePetro = 16;
const ageStacy = 18;
const ageVlad = 45;

const adultAge = 18;

const adultVerification1 = agePetro >= adultAge;
const adultVerification2 = ageStacy >= adultAge;
const adultVerification3 = ageVlad >= adultAge;

console.log(`Petro is ${agePetro} years old`);
console.log(`The person is adult: ${adultVerification1}`);
console.log('---------------------------------------------');
console.log(`Stacy is ${ageStacy} years old`);
console.log(`The person is adult: ${adultVerification2}`);
console.log('---------------------------------------------');
console.log(`Vlad is ${ageVlad} years old`);
console.log(`The person is adult: ${adultVerification3}`);
