const { Users } = require('../models');

const usersdata = [
  {
   userId:10230,    
   username: 'testUser01',
   email: 'testuser01@example.com',
   passwordHash: '123456789',
   registeredAt: '2021-11-18 14:00:45', 
   lastLogin: '2021-11-23 15:00:45',
   profile: 'testuser01'
  },
  {
    userId:10231,     
    username: 'testUser02',
   email: 'testuser02@example.com',
   passwordHash: '444446789',
   registeredAt: '2021-11-20 14:00:45', 
   lastLogin: '2021-11-23 15:00:45',
   profile: 'testuser22'
  },
  {
    userId:10233,    
    username:'testUser03',
   email: 'testuser03@example.com',
   passwordHash: '123455555',
   registeredAt: '2021-11-21 14:00:45', 
   lastLogin: '2021-11-23 15:00:45',
   profile: 'Adam123'
  },
  {
    userId:10234,    
    username:'testUser04',
    email: 'testuser04@example.com',
    passwordHash: '100001289',
    registeredAt: '2021-11-22 14:00:45', 
    lastLogin: '2021-11-23 15:00:45',
    profile: 'usertest1'
  },
  {
    userId:10235,    
    username:'testUser05',
    email: 'testuser05@example.com',
    passwordHash: '383456712',
    registeredAt: '2021-11-19 14:00:45',  
    lastLogin: '2021-11-23 15:00:45',
    profile: 'avatar01'
  },
  {
    userId:10236,     
    username:'testUser06',
    email: 'testuser06@example.com',
    passwordHash: '92005A789',
    registeredAt: '2021-11-17 14:00:45',  
    lastLogin: '2021-11-23 15:00:45',
    profile: 'minimeme'
  },
  {
    userId:10237,     
    username:'testUser07',
    email: 'testuser07@example.com',
    passwordHash: '111222333',
    registeredAt: '2021-11-20 14:00:45',  
    lastLogin: '2021-11-23 15:00:45',
    profile: 'JohnDoe'
  },
  {
    userId:10238,    
    username:'testUser08', 
    email: 'testuser08@example.com',
    passwordHash: 'Abc123987',
    registeredAt: '2021-11-21 14:00:45', 
    lastLogin: '2021-11-23 15:00:45',
    profile: 'JaneDoe'
  },
  {
    userId:10239,    
    username:'testUser09',  
    email: 'testuser09@example.com',
    passwordHash: 'Def05A111',
    registeredAt: '2021-11-22 14:00:45',
    lastLogin: '2021-11-23 15:00:45',
    profile: 'mellowYellow'
  },
  {
    userId:10240,     
    username:'testUser10', 
    email: 'testuser10@example.com',
    passwordHash:'234897abc', 
    registeredAt: '2021-11-18 14:00:45',
    lastLogin: '2021-11-23 15:00:45',
    profile: 'Lovehugs' 
  }
];

const seedUsers = () => Users.bulkCreate(usersdata);

module.exports = seedUsers;

