import React from 'react'
import "./ImageGrid.css"
import Image1 from "../../Images/Image1.png"
import Image2 from "../../Images/Image2.png"
import Image3 from "../../Images/Image3.png"
import Image4 from "../../Images/Image4.png"
import Image5 from "../../Images/Image5.png"
import Image6 from "../../Images/Image6.png"
import Image7 from "../../Images/Image7.png"

const ImageGrid: React.FC = () => {
  return (
    <div className='image-container'>
        <div className='image-1'>
          <img src={Image1} alt="" width={"100%"} />
        </div>
        <div className='image-2' >
        <img src={Image2} alt="" width={"100%"} />
        </div>
        <div className='image-3'>
            <img src={Image3} alt="" width={"100%"}/>
        </div>

        <div className='image-4'>
            <img src={Image4} alt="" width={"100%"}/>
        </div>
        <div className='image-5'>
            <img src={Image5} alt="" width={"100%"}/>
        </div>
        <div className='image-6'>
            <img src={Image6} alt="" width={"100%"}/>
        </div>
        <div className='image-7'>
            <img src={Image7} alt="" width={"100%"}/>
        </div>
       


    </div>
  )
}

export default ImageGrid
