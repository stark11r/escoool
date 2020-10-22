import React, { useState } from "react";
import {
  Switch,
  Route,
  BrowserRouter as Router,
  Redirect,
} from "react-router-dom";
import Navigation from "./Components/Navigation";
import SignupWrapper from "./Login/SignupWrapper";
import LoginWrapper from "./Login/LoginWrapper";
import HomePage from "./HomePage";
import Student from "./Student";
import Teacher from "./Teacher";
import userContext from "./Login/LoginContext";
import CreateCourse from "./Teacher/CreateCourse";
import Quiz from "./Teacher/Quiz";
import CreateQuiz from "./Teacher/CreateQuiz";

function App() {
  const [user, setUser] = useState(null);
  const handleLogin = (user) => {
    setUser(user);
  };
  const handleCreateEditCourse = (course) => {
    console.log(user, course);
  };
  return (
    <userContext.Provider value={user}>
      <Router>
        <Navigation />
        <Switch>
          <Route path="/quiz">
            <Quiz />
          </Route>
          {/* <Route path="/create-course">
            <CreateCourse handleCreateEditCourse={handleCreateEditCourse} />
          </Route> */}
          <Route path="/create-quiz">
            <CreateQuiz />
          </Route>
          <Route path="/student-signup" exact>
            <SignupWrapper handleLogin={handleLogin} />
          </Route>
          <Route path="/student-login" exact>
            <LoginWrapper handleLogin={handleLogin} />
          </Route>
          <Route path="/teacher-login" exact>
            <LoginWrapper handleLogin={handleLogin} />
          </Route>
          <Route path="/teacher-signup" exact>
            <SignupWrapper handleLogin={handleLogin} />
          </Route>
          <Route path="/teacher" exact>
            <Teacher handleCreateEditCourse={handleCreateEditCourse} />
          </Route>
          <Route path="/student">
            <Student />
          </Route>
          <Route path="/">
            <HomePage />
          </Route>
          <Redirect to="/" />
        </Switch>
      </Router>
    </userContext.Provider>
  );
}

export default App;
