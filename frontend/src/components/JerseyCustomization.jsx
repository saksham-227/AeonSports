import React from 'react'

const JerseyCustomization = () => {

    const onSubmitHandler = (event) => {
        event.preventDefault();
    }

  return (
    <div className='text-center'>
        <p className='text-2xl font-medium text-gray-800'>Contact us to get your jerseys customized</p>
        <p className='text-gray-400 mt-3'>
        Let’s experience a perfect amalgamation of comfort and fashion in ous sports merchandise
        </p>
        <form onSubmit={onSubmitHandler} className='w-full sm:w-1/2 flex items-centergap-3 mx-auto my-6 border pl-3'>
            <input className='w-full sm:flex-1 outline-none' type='email' placeholder='Enter your email' required/>
            <button type='submit' className='bg-black text-white text-xs px-10 py-4'>Customize</button>
        </form>
        </div>
  )
}

export default JerseyCustomization