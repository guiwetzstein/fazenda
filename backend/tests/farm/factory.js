const faker = require('faker');
const Factory = require('factory-girl').factory;
const Farm = require('../../api/farm/farm');

Factory.define('aFarm', Farm, {
    name: () => faker.random.arrayElement([
        'Fazenda do Céu',
        'Fazenda São João',
        'Cabanha do Alto do Morro',
        'Sítio da Dona Benta',
        'Recanto do Sabiá'
    ]),
    cnpj: () => faker.random.number()
});

module.exports = Factory;