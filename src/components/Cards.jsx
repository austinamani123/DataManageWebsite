import React from 'react'
import Single from '../assets/single.png'
import Double from '../assets/double.png'
import Triple from '../assets/triple.png'
const Cards = () => {
  return (
    <div className="bg-white flex flex-col items-center  md:flex md:flex-row py-24">
        <div className=" w-[440px] md:w-[360px] md:mr-[29px] lg:ml-16 flex flex-col items-center mb-12 shadow-xl hover:scale-105 duration-300">
            <img className="lg:w-[120px] md:w-[90px] w-[80px] md:ml-12 ml-10" src={Single} alt="/" />
            <p className="lg:text-2xl md:text-xl text-2xl font-bold pt-4 ml-4">Single User</p>
            <p className="lg:text-3xl md:text-2xl text-3xl font-bold py-3">$149</p>
            <div className="my-3 py-3 ml-4">
                <p className="lg:w-[300px] md:w-[200px] w-[440px] border-t p-2 text-center ">500 GB Storage</p>
                <p className="lg:w-[300px] md:w-[200px] w-[440px] border-t p-2 text-center">1 User Allowed</p>
                <p className="lg:w-[300px] md:w-[200px] w-[440px] border-b border-t p-2 text-center">Send up to 2 GB</p>
            </div>
            <button className="bg-[#00df9a] mb-4  lg:ml-[18px] md:ml-[24px] ml-4 lg:w-[190px] md:w-[150px] w-[240px] rounded-lg p-3 text-center">Start Trial</button>
        </div>
        <div className="w-[440px] md:w-[360px]  md:mr-[29px] flex flex-col items-center mb-12 shadow-xl hover:scale-105 duration-300">
            <img className="lg:w-[120px] md:w-[80px] w-[80px] lg:h-[90px] md:h-[50px]" src={Double} alt="/" />
            <p className="lg:text-2xl md:text-xl text-2xl font-bold pt-4 ml-4">Partnership</p>
            <p className="lg:text-3xl md:text-2xl text-3xl font-bold py-3">$199</p>
            <div className="my-3 py-3 ml-4">
                <p className="lg:w-[300px] md:w-[200px] w-[440px] border-t p-2 text-center ">1 TB Storage</p>
                <p className="lg:w-[300px] md:w-[200px] w-[440px] border-t p-2 text-center">3 Users Allowed</p>
                <p className="lg:w-[300px] md:w-[200px] w-[440px] border-b border-t p-2 text-center">Send up to 10 GB</p>
            </div>
            <button className="bg-[#00df9a] mb-4 lg:ml-[18px] md:ml-[24px] ml-4 lg:w-[190px] md:w-[150px] w-[240px] rounded-lg p-3 text-center">Start Trial</button>
        </div>
        <div className="w-[440px] md:w-[360px]  flex flex-col items-center mb-12 shadow-xl hover:scale-105 duration-300">
            <img className="lg:w-[120px] md:w-[80px] w-[80px] lg:h-[90px] md:h-[50px]" src={Triple} alt="/" />
            <p className="lg:text-2xl md:text-xl text-2xl font-bold pt-4 ml-4">Group Account</p>
            <p className="lg:text-3xl md:text-2xl text-3xl font-bold py-3">$299</p>
            <div className="my-3 py-3 ml-4">
                <p className="lg:w-[300px] md:w-[200px] w-[440px] border-t p-2 text-center ">5 TB Storage</p>
                <p className="lg:w-[300px] md:w-[200px] w-[440px] border-t p-2 text-center ">10 Users Allowed</p>
                <p className="lg:w-[300px] md:w-[200px] w-[440px] border-b border-t p-2 text-center">Send up to 20 GB</p>
            </div>
            <button className="bg-[#00df9a] mb-4 lg:ml-[20px] md:ml-[24px] ml-4 lg:w-[190px] md:w-[150px] w-[240px] rounded-lg p-3 text-center">Start Trial</button>
        </div>
    </div>
  )
}

export default Cards