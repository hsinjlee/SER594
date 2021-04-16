
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/courseDB', {useNewUrlParser: true, useUnifiedTopology: true});

const courseSchema = new mongoose.Schema({
    _id: { type: Number, required: [true, 'need an ID number' ]},
    course: { type: String, required: [true, 'need enter a course number such as SER 594'] },
    title: { type: String, required: [true, 'need enter a title such as Human Computer Interaction'] }
});

const Course = mongoose.model("Course", courseSchema);

const course1 = new Course({
    _id: 1,
    course: "SER 594",
    title: "Human Computer Interaction"
});

const course2 = new Course({
    _id: 2,
    course: "SER 516",
    title: "Software Agility"
});

const course3 = new Course({
    _id: 3,
    course: "SER 517",
    title: "Software Factory I"
});

// add course APP 


// Course.insertMany([course1], function(err){
//     if (err){
//         console.log(err);
//     } else {
//             // close monogoose connection
//             mongoose.connection.close();

//         console.log("Succesfully add course on courseDB");
//     }
// });


// show course API on what class you are enroll now

Course.find(function(err, courses){
    if (err){
        console.log(err);
    } else {
        
        // close monogoose connection
        mongoose.connection.close();

        // run all the quizDB
        console.log("Course enrolled now.");
        console.log(courses);
    }
});

// Withdraw course 

// Course.deleteOne({course: 'SER 594' }, function(err){
//     if (err){
//         console.log(err);
//     } else {
        
//         // close monogoose connection
//         mongoose.connection.close();
        
//         console.log("Successfully delete a course");
//     }    
// });