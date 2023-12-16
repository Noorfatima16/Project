import React from "react";
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import Navbar from './components/NavbarComp'
import Student from './components/Student'
import Course from './components/Course'
import Attendence from './components/Attendance'
import Dashboard from './components/Dashboard';
import  Management from "./components/Management";
import Students from "./components/Students"

// import   "./App.css"
function App() {
 
  return (
    <div className="App">

      <BrowserRouter >
<Navbar/>
<Routes>
  <Route path="/" element ={<Management/>}/>
    <Route path='/Student' element={<Student/>}/>
    <Route path='/Course' element={<Course/>}/>
    <Route path='/Attendence' element={<Attendence/>}/>
    <Route path='/Dashboard' element={<Dashboard/>}/>
    <Route path='/Students' element={<Students/>}/>
</Routes>



</BrowserRouter> 


</div>
  );
}

export default App;