require('../../config/database');
const expect = require('chai').expect;
const Factory = require('./factory');
const Farm = require('../../api/farm/farm');


describe('Farms', function () {

    it(`deve criar 2 fazenda`, async function () {
        for (let i = 1; i <= 2; i++) {
            const farm = await Factory.build('aFarm');
            if (!await Farm.create(farm)) throw new Error('falha ao criar as fazendas de teste');
        }

        const farms = await Farm.find();
        expect(farms.length).to.be.equal(2);
    });

    it('deve encontrar 1 fazenda', async function () {
        const farms = await Farm.find({}, null, {limit: 1});
        expect(farms.length).to.be.equal(1);
    });

    it('deve remover 1 fazenda', async function() {
        const farms = await Farm.find({}, {limit: 1});
        await Farm.deleteOne({_id: farms[0]._id});
    });

    it('deve atualizar apenas o nome da fazenda', async function() {
        const buildFarm = await Factory.build('aFarm');
        const name = `Fazenda Teste`;

        const farm = await Farm.create(buildFarm);

        await Farm.updateOne(farm, {$set: {name}});
        const updatedFarm = await Farm.findById(farm._id);

        expect(updatedFarm.name).to.not.equal(buildFarm.name);
        expect(updatedFarm.name).to.equal(name);
    });

    it('deve resetar a coleção de fazendas', async function() {
        await Farm.deleteMany({});
    });
});