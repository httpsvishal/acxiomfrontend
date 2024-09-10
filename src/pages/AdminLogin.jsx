

const AdminLogin = () => {
    return (
        <div>
            <div className='m-5 bg-sky-600 border rounded w-full p-5 '>
                Event Management System
            </div>
            <form>
                    <div className='flex justify-around'>
                    <label htmlFor='username' className='bg-sky-600 border rounded w-1/5 p-5'>Username:</label>
                    <input type='text' id='username' name='username' className='bg-sky-600 w-1/5 border rounded p-5' />
                    </div>
                    <div className='flex justify-around'>
                    <label htmlFor='password' className='bg-sky-600 w-1/5 border rounded p-5'>Password:</label>
                    <input type='password' id='password' className='bg-sky-600 w-1/5 border rounded p-5' name='password' />
                    </div>
                    <div className='flex gap-5 justify-end pe-14'>
                    <button type='submit' className='bg-sky-600 w-1/5 mt-5 sm:mt-10 border rounded p-5'>Login</button>
                    <button type='button' className='bg-red-600 w-1/5 mt-5 sm:mt-10 border rounded p-5'>Cancel</button>
                </div>
                </form>
    </div>
    )};

export default AdminLogin;