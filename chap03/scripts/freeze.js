'use strict';

var pet = { type: 'スノーホワイト', name: 'キラ' };

// Object.preventExtensions(pet);
// Object.seal(pet);
// Object.freeze(pet);

pet.name = '山田キラ';
delete pet.type;
pet.weight = 42;