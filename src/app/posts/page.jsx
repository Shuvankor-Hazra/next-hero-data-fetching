// import { getPosts } from '@/services/postApi';
import Link from 'next/link';
import { redirect } from 'next/navigation';
import React from 'react';

export const metadata = {
    title: "Posts | Next Hero",
    description: "Posts Page",
};

const getPosts = async () => {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/posts`);
    const data = await res.json();
    // if(data){
    //     redirect(`/posts/${data[0].id}`)
    // }
    return data;
}

const PostPage = async () => {
    const postsData = await getPosts();
    return (
        <div className='my-14'>
            <h6 className='text-3xl my-5 text-center'>All Posts</h6>
            <div className='grid grid-cols-4 gap-6'>
                {
                    postsData?.slice(0, 12).map(({ title, body, id }) => (
                        <div key={id} className='border-2 p-6'>
                            <h5>Title: {title}</h5>
                            <h5>Description: {body}</h5>
                            <button className='bg-red-300 px-4 py-2 mt-3'><Link href={`/posts/${id}`}>See Details</Link></button>
                        </div>
                    ))
                }
            </div>
        </div>
    );
}

export default PostPage;
