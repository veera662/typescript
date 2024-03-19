//const ADMIN = 0;
//const READ_ONLY =1;
//const AUTHOR=2;

enum Role{ADMIN = 5,READ_ONLY = 6,AUTHOR = 7};

const person = {   
  name: 'Veera',
  age: 30,
  hobbies: ['sports', 'cooking'],
  role: Role.ADMIN
};

if(person.role === Role.ADMIN){
console.log('is Admin');
}


