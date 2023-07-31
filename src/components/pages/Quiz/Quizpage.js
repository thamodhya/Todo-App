import React from 'react'
import { useState } from 'react';
import { FaPencilAlt, FaTimes } from 'react-icons/fa';
 
import Buttons from './Buttons';
import AddQuiz from './AddQuiz';
//import QuestionList from './QuestionList';
import EditQ from './EditQ';
import Del from '../Del';

function Quizpage() {
    const [showAddTask, setShowAddTask] = useState(false); // To reveal add task form
    return (
      <React.Fragment>
            <div style={{backgroundColor: "#ffffff"}}> 
      <div className='container' style={{backgroundColor:"ffffff"}}>
        <div className="container p-4"> 
              <div className="card" style={{ backgroundColor: "#70B9E6" }}>
              <div className="card-body">
                <h1 style={{ font: "25px" , color: "#ffffff" }}>NETS: UML Diagrams</h1>
              </div>
              </div>
              </div>
          <div className="container">
  
  {/* App Header that has open and App Name */}
  <Buttons showForm={() => setShowAddTask(!showAddTask)}  changeTextAndColor={showAddTask} />
  
  {/* Revealing of Add Task Form */}
  {showAddTask && <AddQuiz   />}
  </div>

      <div className='card'>
        <div className='container'> 
        <br></br>
        <p>Sample Question</p>

        <div class="input-group">
  <div class="input-group-text">
    <input class="form-check-input mt-0" type="radio" value="" name="flexRadioDefault" id="flexRadioDefault1" aria-label="Radio button for following text input"/>
  </div>
  <label type="text" class="form-control" for="flexRadioDefault1" aria-label="Text input with radio button">q1</label>
</div>
<br></br>
<div class="input-group">
  <div class="input-group-text">
    <input class="form-check-input mt-0" type="radio" value="" name="flexRadioDefault" id="flexRadioDefault2" aria-label="Radio button for following text input"/>
  </div>
  <label type="text" class="form-control" for="flexRadioDefault2" aria-label="Text input with radio button">q2</label>
</div>
<br></br>
<div class="input-group">
  <div class="input-group-text">
    <input class="form-check-input mt-0" type="radio" value="" name="flexRadioDefault" id="flexRadioDefault3" aria-label="Radio button for following text input"/>
  </div>
  <label type="text" class="form-control" for="flexRadioDefault3" aria-label="Text input with radio button">q3</label>
</div>
<br></br>
<div class="input-group">
  <div class="input-group-text">
    <input class="form-check-input mt-0" type="radio" value="" name="flexRadioDefault" id="flexRadioDefault4" aria-label="Radio button for following text input"/>
  </div>
  <label type="text" class="form-control" for="flexRadioDefault4" aria-label="Text input with radio button">q4</label>
</div>

<br></br>
<div className="container-fluid d-grid gap-2 d-md-flex justify-content-md-end">
<FaPencilAlt type="button" data-bs-toggle="modal" data-bs-target="#editkt" className="editIcon" class="rounded float-end" style={{color:"blue",justifyContent:"end"}}/>
    <EditQ/> 
<p><FaTimes type="button" className="delIcon" class="rounded float-end" style={{color:"red"}} data-bs-toggle="modal" data-bs-target="#del"/></p>
    <Del/>
                     </div>
<br></br>
      </div>

  {/* <QuestionList/> */}


  </div>
  <br></br>
   
  {/* <div class="d-grid gap-2 d-md-flex justify-content-md-end">  
  <button class="btn btn-primary" type="button">Submit</button>
</div> */}
<br></br>
<br></br>
<br></br>
<br></br>
  </div>

  </div>
      
        </React.Fragment>
  )
}

export default Quizpage