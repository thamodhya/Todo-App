import React from 'react'
import { useState } from 'react';
import { FaPencilAlt, FaTimes } from 'react-icons/fa';
import { Link } from "react-router-dom";

import AddArticle from './AddArticle';
import Header from '../Header';
import pdf from './pdf.png';
import Del from '../Del';
import EditArticle from './EditArticle';
 
function Article() {
    const [showAddTask, setShowAddTask] = useState(false); // To reveal add task form
  return (
    <div>
        <div className="container">

{/* App Header that has open and App Name */}
<Header showForm={() => setShowAddTask(!showAddTask)} changeTextAndColor={showAddTask}  />

{/* Revealing of Add Task Form */}
{showAddTask && <AddArticle   />}
 <br></br>
<div className='card'> 
<div className="card-body" style={{backgroundColor:"#DDEDF8"}}>
    <div class="col-lg-12">
    <h3 style={{ font: "25px" , color: "#000000" }}>Article 01</h3>
    <div> 
    <FaPencilAlt type="button" data-bs-toggle="modal" data-bs-target="#editarticle" className="editIcon" class="rounded float-end" style={{color:"blue",justifyContent:"end"}}/>
    <EditArticle/> 
    </div> 
    </div>

    <div class="col-lg-12">
    <p>Introduction of Article 01</p>
    <div> 
    <p><FaTimes type="button" className="delIcon" class="rounded float-end" style={{color:"red"}} data-bs-toggle="modal" data-bs-target="#del"/></p>
    <Del/>
    </div>

    <p> <Link to='/article/View'><img src={pdf} height='20px' width='20px' alt='pdf'></img></Link> </p>
    </div>
     
</div>
</div>
 </div>
</div> 
    
  )
}

export default Article