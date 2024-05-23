import React from 'react'

const Touch = () => {
    const touchData = [
        "Your Name",
        "Your Email",
        "Your Phone",
    ]
    return (
        <div className='container'>
            <h1 className='a-2 text-[40px] a-700 text-center py-3 '>GET IN TOUCH</h1>
            <div className='pb-4  flex justify-center'> <img style={{ width: "60px" }} src="bulit-icon.png" alt="" /></div>
            <div>
                <form action="#" className=' w-[50%] mx-auto py-3 '>
                    {touchData.map((touchData) => {
                        return <div className='my-4'>
                            <input className='bg-[#EFEFEF] ps-3 py-[11px] w-100 rounded-[40px] ' type="text" placeholder={touchData} />
                        </div>
                    })}
                    <div className='my-4'>
                        <textarea className='bg-[#EFEFEF] ps-3 py-[30px] w-100 rounded-[40px]  ' placeholder='Massage'  ></textarea>
                    </div>
                    <div className='flex justify-center'><button className=' a_our_btn px-[50px] py-[12px] text-[16px] mt-2  bg-[#D07D6B] rounded-[5px] text-[#fefefd] hover:bg-[#4a4949] a-700     '>SEND</button></div>
                </form>
            </div>
        </div>
    )
}

export default Touch