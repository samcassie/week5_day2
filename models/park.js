const Park = function(name, ticket_price){
    this.name = name;
    this.ticket_price = ticket_price;
    this.dinosaurs = [];
};

Park.prototype.addDinosaur = function(dinosaur){
    this.dinosaurs.push(dinosaur)
};

Park.prototype.removeDinosaur = function(dinosaur){
    this.dinosaurs.splice(this.dinosaurs.indexOf(dinosaur), 1)
};

// Park.prototype.mostPopularDinosaur = function(){
//     let popularDinosaur = '';
//     let popularValue = 0;
//     for (let dinosaur in this.dinosaurs){
//         if (dinosaur.guestsAttractedPerDay > popularValue){
//             popularValue = dinosaur.guestsAttractedPerDay;
//             popularDinosaur = dinosaur.name;
//         }
//     }
//     return popularDinosaur;
// }

Park.prototype.findSpecies = function(species){
    result = []
    for (let dinosaur in this.dinosaurs){
        if ((dinosaur.species) == species){
            result.push(dinosaur.name)
        }
    }
    return result
}


module.exports = Park;
