//1. string
let fname = 'Bronco';
let lname = "CPP;"
let fullName =  `${fname} ${lname}`;
console.log(typeof fname);

//2. number
let evenNumber = 10;
let pi = 3.14;
console.log(typeof pi);

//3. boolean
let hasTicket = true;
let passExam = false;
console.log(typeof passExam);

//4. undefined
let index;
console.log(typeof index);

//5. null
let idx = null;
console.log(typeof idx);

//6. symbol
const secretKey = Symbol();

//7. object
let userCustomizedChoice = "customized username";
let cppCourse = {
    "name": 'CS 2250', 
    'hours': 3,
    semester: 2025,
    "School Name": "Cal Poly Pomona",
    [userCustomizedChoice]: "User name",
}
//access object's key value
console.log(cppCourse.name);
console.log(cppCourse['hours']);
console.log(cppCourse.hours);
console.log(cppCourse["School Name"]);
console.log(cppCourse[userCustomizedChoice]);

// modify the key's value
cppCourse.name = 'Web Development';
cppCourse["School Name"] = "CPP";

//adding new key-value pair
cppCourse['location'] = "Pomona, Cpp";
cppCourse['Location'] = "CA, USA";
console.log(cppCourse);




