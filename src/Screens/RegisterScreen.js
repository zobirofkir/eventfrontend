import React from 'react'

const RegisterScreen = () => {
  return (
    <div className='flex justify-center items-center h-screen bg-gray-100 bg-bg-image bg-no-repeat bg-cover'>
        <div className='bg-gray-700 text-white p-8 rounded-lg shadow-lg w-96'>
            <h2 className='text-2xl font-bold mb-6 text-center'>Register</h2>
            <form>
            <div className='mb-4'>
                <label htmlFor='email' className='block text-sm font-medium text-gray-700'>
                    username
                </label>
                <input type='name' id='name' name='name' placeholder='Enter your name' className='mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm' required />
            </div>

            <div className='mb-4'>
                <label htmlFor='email' className='block text-sm font-medium text-gray-700'>
                Email
                </label>
                <input type='email' id='email' name='email' placeholder='Enter your email' className='mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm' required />
            </div>

            <div className='mb-4'>
                <label htmlFor='phone' className='block text-sm font-medium text-gray-700'>
                phone
                </label>
                <input type='phone' id='phone' name='phone' placeholder='Enter your phone' className='mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm' required />
            </div>

            <div className='mb-4'>
                <label htmlFor='password' className='block text-sm font-medium text-gray-700'>
                Password
                </label>
                <input type='password'  id='password' name='password'  placeholder='Enter your password' className='mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm' required/>
            </div>

            <div className='mb-4'>
                <label htmlFor='retype-password' className='block text-sm font-medium text-gray-700'>
                Retype Password
                </label>
                <input type='retype-password'  id='retype-password' name='retype-password'  placeholder='Enter your retype-password' className='mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm' required/>
            </div>

            <button type='submit' className='w-full bg-black text-white py-2 px-4 rounded-md hover:bg-white hover:text-black ease-out transform focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-opacity-50'>
                Register
            </button>
            </form>
            <a className='mt-5 text-white font-bold' href='/'>Already Have An Account!</a>
        </div>
    </div>
  )
}

export default RegisterScreen