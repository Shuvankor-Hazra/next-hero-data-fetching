"use client"
import React from 'react';

const Page = () => {
    const handleRegister = async (e) => {
        e.preventDefault();
        const newUser = {
            name: e.target.name.value,
            email: e.target.email.value,
            password: e.target.password.value,
            image: e.target.image.value,
            type: e.target.type.value,
        }
        const resp = await fetch('http://localhost:3000/api/auth/signup/new-user', {
            method: 'POST',
            body: JSON.stringify(newUser),
            headers: {
                'content-type': 'application/json'
            }
        })
        console.log(resp);
    }

    return (
        <div className='flex items-center justify-center my-20'>
            <div>
                <h5 className='text-xl font-semibold mb-6'>Sign Up with Email and Password </h5>
                <div>
                    <form onSubmit={handleRegister} action="">

                        <label htmlFor="name">Name</label> <br />
                        <input type="name" name="name" id="" placeholder='Your Name' className='outline-none border-2 p-3 text-slate-700' /><br /><br />

                        <label htmlFor="email">Email</label> <br />
                        <input type="email" name="email" id="" placeholder='Your Email' className='outline-none border-2 p-3 text-slate-700' /><br /><br />

                        <label htmlFor="password">Password</label> <br />
                        <input type="password" name="password" id="" placeholder='Your Password' className='outline-none border-2 p-3 text-slate-700' /><br /><br />

                        <label htmlFor="image">Image</label> <br />
                        <input type="text" name="image" id="" placeholder='Your Image' className='outline-none border-2 p-3 text-slate-700' /><br /><br />

                        <label htmlFor="type">Type</label> <br />
                        <select name="type" id="" placeholder='User type' className='outline-none border-2 p-3 text-slate-700'>
                            <option value="admin">Admin</option>
                            <option value="moderator">Moderator</option>
                            <option value="member">Member</option>
                        </select><br /><br />

                        <button className='bg-red-300 px-6 py-3 rounded-full'>Register</button>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Page;
