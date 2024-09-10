import React from 'react';

const UserSignup = () => {
    return (
        <div>
            <div className="flex p-5 justify-between">
                <div className="bg-sky-600 p-5 border rounded">
                    <p>Chart</p>
                </div>
                <div className="bg-sky-600 p-5 border rounded">
                    <p>Back</p>
                </div>
            </div>
            <div className='m-5 bg-sky-600 border rounded w-full p-5 '>
                Event Management System
            </div>
            <div className='m-5  border rounded w-full p-5 '>
                <form>
                    <div className='flex justify-around'>
                    <label htmlFor='username' className='bg-sky-600 border rounded w-1/5 p-5'>Username:</label>
                    <input type='text' id='username' name='username' className='bg-sky-600 w-1/5 border rounded p-5' />
                    </div>
                    <div className='flex justify-around'>
                    <label htmlFor='password' className='bg-sky-600 w-1/5 border rounded p-5'>Password:</label>
                    <input type='password' id='password' className='bg-sky-600 w-1/5 border rounded p-5' name='password' />
                    </div>
                    <div className='flex justify-around'>
                    <label htmlFor='email' className=' w-1/5 bg-sky-600 border rounded p-5'>Email:</label>
                    <input type='email' id='email' name='email' className='bg-sky-600 w-1/5 border rounded p-5' />
                    </div>
                    <button type='submit' className='bg-sky-600 w-2/5 mt-5 sm:mt-10 border rounded p-5'>Signup</button>
                </form>
            </div>
        </div>
    );
};

export default UserSignup;