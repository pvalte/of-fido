const { Pets } = require('../models');

const petsdata = [
  {
    //petId: NULL,    
    petName:'Sandy', 
    age: 2,
    sex: 'F',
    type: 'Dog', 
    breed: 'Mixed',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
  },
  {
    //petId: NULL,    
    petName:'Lido',
    age: 5,
    sex: 'M',
    type: 'Dog', 
    breed: 'Poodle',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elaliquait.'
  },
  {
   // petId: NULL,    
    petName:'Lido',
    age: 5,
    sex: 'M',
    type: 'Dog', 
    breed: 'Poodle',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elaliquait.'
  },
  {
    //petId: NULL,    
    petName:'Cinnamon ',
    age: 7, 
    sex: 'F',
    type: 'Cat', 
    breed: 'Domestic Short Hair',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elaliquait.'
  },
  {
    //petId: NULL,    
    petName: 'Muray', 
    age: 1, 
    sex: 'M',
    type: 'Cat', 
    breed: 'Abyssinian',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elaliquait.'
  },
  {
    //petId: NULL,    
    petName: 'Ori', 
    age:  3, 
    sex: 'F', 
    type: 'Other', 
    breed: 'American Rabbit',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elaliquait.'
  },
  {
   // petId: NULL,    
    petName: 'Zwili',
    age:  4, 
    sex: 'M', 
    type: 'Other', 
    breed: 'Mini lop',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elaliquait.'
  },
  {
   // petId: NULL,    
    petName: 'Liam',
    age:  10, 
    sex: 'M', 
    type: 'Dog', 
    breed: 'Mixed',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elaliquait.'
  },
  {
    //petId: NULL,    
    petName: 'Adele', 
    age:  12, 
    sex: 'F', 
    type: 'Dog', 
    breed: 'Labrador Retriever', 
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elaliquait.'
  },
  {
    //petId: NULL,    
    petName: 'Julianne', 
    age:  .6,  
    sex: 'F', 
    type: 'Cat',   
    breed: 'Domestic Short Hair', 
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elaliquait.' 
  },
  {
    //petId: NULL,    
    petName: 'Keto', 
    age:  1, 
    sex: 'M', 
    type: 'Cat',   
    breed: 'Domestic Short Hair', 
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elaliquait.' 
  },
  {
    //petId: NULL,    
    petName: 'Auqua',
    age:  1, 
    sex: 'F', 
    type: 'Other',    
    breed: 'American Rabbit',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elaliquait.' 
  },
  {
   // petId: NULL,    
    petName: 'Copper', 
    age: 2, 
    sex: 'M', 
    type: 'Other',    
    breed: 'American Rabbit',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elaliquait.' 
  },
  {
   // petId: NULL,    
    petName: 'Bobo', 
    age: .5, 
    sex: 'M', 
    type: 'Cat',      
    breed: 'Maine Coon',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elaliquait.' 
  },
  {
   // petId: NULL,    
    petName: 'Princess', 
    age: .6,   
    sex: 'F', 
    type: 'Dog',       
    breed: 'German Shepard', 
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elaliquait.' 
  }
];

const seedPets = () => Pets.bulkCreate(petsdata);

module.exports = seedPets;
