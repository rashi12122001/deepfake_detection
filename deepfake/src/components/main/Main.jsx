import React ,{useRef,useState}from 'react'
import './main.css'
import uploader from './image_uploader.png'
function Main() {
  const inputRef=useRef(null);
  const [image, setImage] = useState(null); 
  const image_click=() =>{
    inputRef.current.click();
  }
  const image_change=(event) =>{
    const file=event.target.files[0];
    setImage(file);
  }
  const elementsToHide = document.querySelectorAll('.hide-after-upload');
  elementsToHide.forEach(element => {
    element.style.display = 'none';
  });
  return (
    <div className='main'>
        <div className="left">
           <div className='image_area' onClick={image_click}>
           {image ? <img src={URL.createObjectURL(image)} alt=" " className='Dynamic_image'/> : <img src="./photo.png" alt=""/>}
     
            <span className='hide-after-upload'>click here to analyize</span>
            {/* <form action="">
                <input type="file" name="" id="" />
              </form> */}
            <img className='hide-after-upload' src={uploader} alt="image_icon" />
            <h3 className='hide-after-upload'>Upload Image</h3>
            <button className='hide-after-upload'>Upload</button>
           <input className='hide-after-upload' type="file" name="" id="" onChange={image_change} ref={inputRef} style={{display:"none"}}/>
           </div>
        </div>
        <div className="right">
         results
        </div>
    </div>
  )
}

export default Main