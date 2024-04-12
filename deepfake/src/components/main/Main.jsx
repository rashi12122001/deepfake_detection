import React from 'react'
import './main.css'
import image from './image_uploader.png'
function Main() {
  return (
    <div className='main'>
        <div className="left">
           <div className='image_area'>
            <span>Select or drop an image to analyize</span>
            {/* <form action="">
                <input type="file" name="" id="" />
            </form> */}
            <img src={image} alt="image_icon" />
            <h3>Upload Image</h3>
           <button className="select_image">Select Image</button>
           </div>
        </div>
        <div className="right">
         results
        </div>
    </div>
  )
}

export default Main