import React from 'react'

const About = () => {
    return (
        <div className='container my-4 a_about_main'>
            <h1 className='a-2 text-[40px] a-700 text-center py-3 '>ABOUT OUR SHOP</h1>
            <div className='pb-4 flex justify-center'> <img style={{ width: "60px" }} src="bulit-icon.png" alt="" /></div>
            <div className="row position-relative ">
                <div className='col-12 col-md-3 flex  align-items-center'>
                    <div style={{boxShadow:" 0 0 30px 0"}} className='bg-[#fff] p-4 position-absolute left-[80px] w-[40%]  a_about_box'>
                        <h3 className='a-2 text-[34px] a-400 py-3'>Coffee distribution '</h3>
                        <p className='a-300 text-[19px] text-[#232222]'>has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editorhas a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editor</p>
                        <button  className=' a_our_btn a_res px-[40px] py-[12px] text-[18px] mt-5  rounded-[5px] text-[#d78373] hover:text-[#3b3b3b]    '>READ MORE</button>
                    </div>
                </div>
                <div className='col-12 col-md-9'>
                    <img  src="about-img.png" alt="" />

                </div>
            </div>
        </div>
    )
}

export default About