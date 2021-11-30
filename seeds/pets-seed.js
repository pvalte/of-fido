const { Pets } = require('../models');

const petsdata = [
  {   
   // petId: 500130,
    petname:'Sandy', 
    age: 2,
    sex: 'F',
    type: 'Dog', 
    breed: 'Mixed',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
},
  {
    //petId: 500131,     
    petname:'Lido',
    age: 5,
    sex: 'M',
    type: 'Dog', 
    breed: 'Poodle',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elaliquait.'
  },
   {
   //petId: 500132,     
   petname:'Abby',
    age: 1,
    sex: 'M',
    type: 'Dog', 
    breed: 'Mixed',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elaliquait.'
  },
  {
    //petId: 500133,     
    petname:'Cinnamon ',
    age: 7, 
    sex: 'F',
    type: 'Cat', 
    breed: 'Domestic Short Hair',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elaliquait.'
  },
  {
    //petId: 500134,     
    petname: 'Muray', 
    age: 1, 
    sex: 'M',
    type: 'Cat', 
    breed: 'Abyssinian',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elaliquait.'
  },
  {
    //petId: 500135,     
    petname: 'Ori', 
    age:  3, 
    sex: 'F', 
    type: 'Other', 
    breed: 'American Rabbit',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elaliquait.'
  },
  {
    //petId: 500136,    
    petname: 'Zwili',
    age:  4, 
    sex: 'M', 
    type: 'Other', 
    breed: 'Mini lop',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elaliquait.'
  },
  {
   //petId: 500137,    
   petname: 'Liam',
    age:  10, 
    sex: 'M', 
    type: 'Dog', 
    breed: 'Mixed',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elaliquait.'
  },
  {
    //petId: 500138,     
    petname: 'Adele', 
    age:  12, 
    sex: 'F', 
    type: 'Dog', 
    breed: 'Labrador Retriever', 
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elaliquait.'
  },
  {
  //petId: 500139,     
  petname: 'Julianne', 
    age:  .6,  
    sex: 'F', 
    type: 'Cat',   
    breed: 'Domestic Short Hair', 
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elaliquait.' 
  },
  {
  //petId: 500140,     
  petname: 'Keto', 
    age:  1, 
    sex: 'M', 
    type: 'Cat',   
    breed: 'Domestic Short Hair', 
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elaliquait.' 
  },
  {
   //petId: 500141,     
   petname: 'Auqua',
    age:  1, 
    sex: 'F', 
    type: 'Other',    
    breed: 'American Rabbit',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elaliquait.' 
  },
  {
  //petId: 500142,    
  petname: 'Copper', 
    age: 2, 
    sex: 'M', 
    type: 'Other',    
    breed: 'American Rabbit',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elaliquait.' 
  },
  {
  //petId: 500143,     
  petname: 'Bobo', 
    age: .5, 
    sex: 'M', 
    type: 'Cat',      
    breed: 'Maine Coon',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elaliquait.' 
  },
  {
    //petId: 500144,     
    petname: 'Princess', 
    age: .6,   
    sex: 'F', 
    type: 'Dog',       
    breed: 'German Shepard', 
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elaliquait.' 
  }
 ];

const seedPets = () => Pets.bulkCreate(petsdata);

module.exports = seedPets;