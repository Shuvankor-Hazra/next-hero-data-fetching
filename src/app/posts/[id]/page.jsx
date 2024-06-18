
import React from 'react';

const getDetailsPosts = async (id) => {
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
    const data = await res.json();
    return data;
}

// export const metadata = {
//     title: "Post Details",
//     description: "This is from post details",
// };

export const generateMetadata = async ({ params }) => {
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${params.id}`);
    const postData = await res.json();
    return {
        title: `Post Details ${postData.title}`,
        description: postData.body,
        keywords: postData.body.split(' ')
    }
}

const PostDetailsPage = async ({ params }) => {
    const { title, body } = await getDetailsPosts(params.id)
    console.log(params.id);
    return (
        <div className='h-screen'>
            <h6>Title: {title}</h6>
            <h6>Description: {body}</h6>
        </div>
    );
}

export default PostDetailsPage;
