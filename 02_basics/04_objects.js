// const tinderUser = new Object()
const tinderUser = {}

tinderUser.id = "123abc"
tinderUser.name = "Sammy"
tinderUser.isLoggedIn = true

// console.log(tinderUser);

const regularUser = {
    email: "some@gmail.com",
    fullname: {
        userfullname: {
            firstname: "Chhagan",
            middlename: "Ram"
        }
    }
}

// console.log(regularUser.fullname.userfullname.middlename);

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a", 4: "b"}
const obj4 = {5: "a", 6: "b"}

// const obj3 = {obj1, obj2}
// const obj3 = Object.assign({}, obj1, obj2, obj4)

const obj3 = {...obj1, ...obj2}
console.log(obj3);

const users = [
    {
        id: 1,
        email: "c@gmail.com"
    },
    {
        id: 1,
        email: "c@gmail.com"
    },
    {
        id: 1,
        email: "c@gmail.com"
    }
    
]

users[1].email
// console.log(tinderUser);

// console.log(Object.keys(tinderUser));
// console.log(Object.values(tinderUser));
// console.log(Object.entries(tinderUser));

// console.log(tinderUser.hasOwnProperty('isLoggedIn'));

const course = {
    coursename: "music playlist",
    price: "49",
    courseInstructor: "The Professor"
}

// course.courseInstructor

const {courseInstructor: instructor} = course

// console.log(courseInstructor)
console.log(instructor);

// json

// {
//     "name": "chhagan",
//     "coursename": "music playlist",
//     "price": "free"
// }

[
    {},
    {},
    {}
]