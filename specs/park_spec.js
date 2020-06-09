const assert = require('assert');
const Park = require('../models/park.js');
const Dinosaur = require('../models/dinosaur.js');

describe('Park', function() {

    let park;
    let dino1;
    let dino2;

    beforeEach(function () {
        park = new Park('Dino Land', 20);
        dino1 = new Dinosaur('T-Rex', 'carnivore', 50)
        dino2 = new Dinosaur('Triceratops', 'herbivore', 40)
    })

    it('should have a name', function(){
        const actual = park.name;
        assert.strictEqual(actual, 'Dino Land')
    });


    it('should have a ticket price', function(){
        const actual = park.ticket_price;
        assert.strictEqual(actual, 20)
    });

    it('should have a collection of dinosaurs', function(){
        const actual = park.dinosaurs;
        assert.deepStrictEqual(actual, [])
    });

    it('should be able to add a dinosaur to its collection', function(){
        park.addDinosaur(dino1);
        const actual = park.dinosaurs.includes(dino1);
        assert.deepStrictEqual(actual, true);
    });

    it('should be able to remove a dinosaur from its collection', function(){
        park.addDinosaur(dino1);
        park.addDinosaur(dino2);
        park.removeDinosaur(dino2);
        const actual = park.dinosaurs.includes(dino2);
        assert.deepStrictEqual(actual, false);
    });

    // it('should be able to find the dinosaur that attracts the most visitors', function(){
    //     park.addDinosaur(dino1);
    //     park.addDinosaur(dino2);
    //     const actual = park.mostPopularDinosaur();
    //     assert.strictEqual(actual, 'T-Rex')
    // });

    it('should be able to find all dinosaurs of a particular species', function(){
        park.addDinosaur(dino1);
        park.addDinosaur(dino2);
        const actual = park.findSpecies('carnivore');
        assert.strictEqual(actual, 'T-Rex')
    });

    it('should be able to calculate the total number of visitors per day');

    it('should be able to calculate the total number of visitors per year');

    it('should be able to calculate total revenue for one year');

});
