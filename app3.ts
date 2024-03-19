const persons:{
    name:string;
    age:number;
    hobbies:string[];
    role:[number,string]
} = {
  name: "Veera",
  age: 30,
  hobbies: ["sports", "cooking"],
  role:[2,'author']
};

persons.role.push('admin');
// persons.role[1]=10;
let Fac: any[];
Fac = ["Sports"];

console.log(persons.name);

for (const hobby of persons.hobbies) {
  console.log(hobby);
}
