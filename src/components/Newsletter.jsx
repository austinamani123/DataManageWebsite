import React from 'react'

const Newsletter = () => {
  return (
    <div className="w-full bg-black py-16 px-4 lg:grid grid-cols-2 md:grid md:grid-cols-2">
      <div className="flex flex-col items-center my-4 md:items-start md:justify-start lg:ml-12">
        <p className="text-white md:text-3xl sm:text-2xl text-xl font-bold ">Want tips & tricks to optimize your flow?</p>
        <p className="text-white text-xl py-3">Sign up to our newsletter and stay up to date.</p>
      </div>
      <div className="lg:ml-24">
        <form className="flex flex-col md:flex-row items-center  w-full">
          <input type="text" placeholder="Enter your email" className="my-5 rounded-lg md:w-[260px] sm:w-[300px] w-400px p-3" />
          <button className="bg-[#00df9a] rounded-lg p-3 mx-4 w-[172px] lg:w-[140px]">Notify me</button>
        </form>
        <div className="flex flex-col items-center  md:flex md:flex-col md:items-start py-4 text-md lg:grid lg:grid-flow-row">
        <p className="text-white mr-1">We care about the protection of your data.Read our</p><p className="text-[#00df9a] underline">Privacy Policy.</p>
        </div>
      </div>
    </div>
  )
}

export default Newsletter