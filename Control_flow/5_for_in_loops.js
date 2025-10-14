const course = {
    name: 'cs 2250',
    duration: 75,
    'section': 3,
}
//For in loop requires [] no .name
for(const key in course){
    console.log(course[key]);
}

console.log(course.name);