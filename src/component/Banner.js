import React from 'react';
import "./banner.css";
import "react-multi-carousel/lib/styles.css";
import { Carousel } from 'react-responsive-carousel';
const Banner = () => {
  const ourData=[
    {
     cardData:[
     
        {
          imgurl:"img-1.png",
         type:"TYPES OF COFFEE",
         disc:"",
         btn:""
        },
        {
          imgurl:"img-2.png",
         type:"BEAN VARIETIES",
         disc:"",
         btn:""
        },
        {
          imgurl:"img-3.png",
         type:"COFFEE & PASTRY",
         disc:"",
         btn:""
        },
        {
          imgurl:"img-4.png",
         type:"COFFEE TO GO",
         disc:"",
         btn:""
        },
     ]
    },
    {
     cardData:[
        {
          imgurl:"img-1.png",
         type:"TYPES OF COFFEE",
         disc:"",
         btn:""
        },
        {
          imgurl:"img-2.png",
         type:"BEAN VARIETIES",
         disc:"",
         btn:""
        },
        {
          imgurl:"img-3.png",
         type:"COFFEE & PASTRY",
         disc:"",
         btn:""
        },
        {
          imgurl:"img-4.png",
         type:"COFFEE TO GO",
         disc:"",
         btn:""
        },
     ]
    },
    {
     cardData:[
        {
          imgurl:"img-1.png",
         type:"TYPES OF COFFEE",
         disc:"",
         btn:""
        },
        {
          imgurl:"img-2.png",
         type:"BEAN VARIETIES",
         disc:"",
         btn:""
        },
        {
          imgurl:"img-3.png",
         type:"COFFEE & PASTRY",
         disc:"",
         btn:""
        },
        {
          imgurl:"img-4.png",
         type:"COFFEE TO GO",
         disc:"",
         btn:""
        },
     ]
    },
  ]
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };
  return (
    <Carousel responsive={responsive} showStatus={false} autoPlay interval={2000} infiniteLoop showArrows={false}>
      {ourData.map((values,index)=>{
        return  <section key={index} className='container my-5 a_carol'>
        <h1 className='a-2 text-[40px] a-700 text-center py-3 '>OUR COFFEE OFFER</h1>
      <div className='pb-4'> <img  style={{width:"60px"}} src="bulit-icon.png"  alt="" /></div>
      <div className="row">
        {values.cardData.map(({type,imgurl},index)=>{
          return <div key={index} className='col-12 col-md-3 a_banner_box'>
          <div className='text-center'>
            <div><img src={imgurl} alt="" /></div>
            <div>
              <h5 className='a-2 py-3  text-[22px] a-700'>{type}</h5>
              <h6 className='a-2 pb-4  text-[16px]'>looking at its layout. The point of</h6>
              <button  className=' a_our_btn px-[40px] py-[12px] text-[18px]  rounded-[5px] text-[#d78373] hover:text-[#3b3b3b]    '>READ MORE</button>
            </div>
          </div>
        </div>
        })}
        
      </div>
      </section>
      })}
    </Carousel>
  )
}

export default Banner