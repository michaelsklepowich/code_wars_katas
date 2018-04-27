function abbrevName(name){
let personName = name.toUpperCase();
let nameArray = personName.split(' ');
let firstNameArray = nameArray[0].split('');
let lastNameArray = nameArray[1].split('');
let firstNameInitial = firstNameArray[0];
let lastNameInitial = lastNameArray[0];
let nameString = firstNameInitial + '.' + lastNameInitial;
return nameString;
}
