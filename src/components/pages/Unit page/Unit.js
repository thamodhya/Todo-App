import React from 'react'
import { useState } from 'react';
import { FaPencilAlt, FaTimes } from 'react-icons/fa';
import { Link } from "react-router-dom";

import AddKT from './AddKT';
import Header from '../Header';
import video from './video.png';
import Del from '../Del';
import EditKT from './EditKT';

function Unit() {
    const [showAddTask, setShowAddTask] = useState(false); // To reveal add task form
  return (
    <div>
        <div className="container">

{/* App Header that has open and App Name */}
<Header showForm={() => setShowAddTask(!showAddTask)}  changeTextAndColor={showAddTask} />

{/* Revealing of Add Task Form */}
{showAddTask && <AddKT   />}
 <br></br>
<div className='card'> 
<div className="card-body" style={{backgroundColor:"#DDEDF8"}}>
    <div class="col-lg-12">
    <h3 style={{ font: "25px" , color: "#000000" }}>KT Session 01</h3>
    <div> 
    <FaPencilAlt type="button" data-bs-toggle="modal" data-bs-target="#editkt" className="editIcon" class="rounded float-end" style={{color:"blue",justifyContent:"end"}}/>
    <EditKT/> 
    </div> 
    </div>

    <div class="col-lg-12">
    <p>Introduction of KT Session 01</p>
    <div> 
    <p><FaTimes type="button" className="delIcon" class="rounded float-end" style={{color:"red"}} data-bs-toggle="modal" data-bs-target="#del"/></p>
    <Del/>
    </div>
    </div>

    <p> <Link to='/Unit/View'><img src={video} height='20px' width='20px' alt='pdf'></img></Link> </p>
    </div>
     
</div>
</div>
 
</div> 
     
  )
}

export default Unit