// courses

  //authorization (only teacher){
    //add
    //remove
    //edit
        //{create quiz}
            //add QUESTION
                //set correct options
                //set marks (max 10)
                //set passing marks
            //delete QUESTION
            //edit QUESTION                   }

    //authorization (only students){
      //enroll courses
      //take quiz
      //collect points

const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");

const app = express();

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));

mongoose.connect("mongodb://localhost:27017/coursesDB", { useNewUrlParser: true });

let login = new Boolean;
login = 0;

const userSchema = new mongoose.Schema({
  userName: String,
  password: String,
  fName: String,
  lName: String,
  userType: Boolean,
  courseId: Number
});
const User = mongoose.model("user", userSchema);
const defaultUser = new User({
  userName: "User1",
  password: "123",
  fName: "User",
  lName: "1",
  userType: 1,
  courseId: 0
});
defaultUser.save();

const questionSchema = new mongoose.Schema({
  id: String,
  questionNumber: Number,
  question: String,
  options: [{option: String, optionNo: Number}],
  correctOptions: Number
});
const Question = mongoose.model("question", questionSchema);

const defaultQuestion = new Question({
  id: 1,
  questionNumber: 1,
  question: "What is your Name?",
  options: [{option: "Dog", optionNo: 1},{option: "Cat" , optionNo: 2}],
});
defaultQuestion.save();

const quizSchema = new mongoose.Schema({
  id: Number,
  quizName: String,
  questions: [questionSchema]

});
const Quiz = mongoose.model("quiz", quizSchema);

const defaultQuiz = new Quiz({
  id: 1,
  quizName: "defaultQuiz",
  questions: defaultQuestion
});
defaultQuiz.save();

const courseSchema = new mongoose.Schema({
  courseId: String,
  courseName: String,
  quiz: [quizSchema]

});
const Course = mongoose.model("course", courseSchema);
const defaultCourse = new Course({
  courseId: 1,
  courseName: "Default Course",
  quiz: defaultQuiz
});
defaultCourse.save();


app.get("/", function (req , res) {
  //send login register page
});

app.get("/login", function (req , res){
  //send login page
})

app.post("/login", function (req , res) {

})

app.get("/register", function(req , res){
  //send register page
})

app.post("/register", function (req , res) {
  const newUser = new User({
    userName: req.body.userName,
    password: req.body.password,
    fName: req.body.fName,
    lName: req.body.lName,
    userType: req.body.userType,
  });
  newUser.save(function (err) {
    if(!err){
      console.log("Success");
      if (req.body.userType == 1) {
            login = 1;
            res.redirect("/teacher/"+req.body.userName);

      } else {
          console.log("Students");
      }

    } else{
      console.log(err);

    }

});
});


app.route("/teacher/:paramName")

.get(function(req, res){

  const user = req.params.paramName;
  User.find({userName: user },function(err, teacherData){
    if (!err) {
      res.send(teacherData);
    } else {
      res.send(err);
    }
  });
})

.post(function (req, res) {
  const course = req.params.paramName + Course.count()+1;
  const newCourse = new Course({
    courseName: req.body.courseName,
    courseId: course
  });

  newCourse.save(function(err){
    if (!err){
      res.send("Successfully added a new Course.");
      res.redirect("/teacher" + req.params.paramName);
    } else {
      res.send(err);
    }
  });
})

.delete(function (req , res) {

  itemID = req.body.checkbox ;
  Course.find({courseId: itemID},function(err, course){
    if (!err) {
        course.remove();
    } else {
      res.send(err);
    }
  });
  User.findOneAndUpdate({userName: req.params.paramName}, {$pull: {courseId: itemID}}, function(err, CourseList){
    if (err){
      console.log(err);

    }else {
      console.log(courseList);
      res.redirect("/teacher" + req.params.paramName);
    }
  });
})

.patch(function (req , res){
  //edit course
})






app.get("/students", function (req , res) {
    //show all the courses created by all the teachers

});





app.listen(3000, function() {
  console.log("Server started on port 3000");
});
