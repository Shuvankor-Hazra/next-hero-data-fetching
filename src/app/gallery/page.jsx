import Image from 'next/image';
import React from 'react';

const GalleryPage = () => {
    return (
        <div className='min-h-screen px-12 py-24'>
            <h5 className='text-3xl mb-12 text-center'>Gallery Page</h5>
            {
                [1, 2, 3, 4, 5]?.map((img) => (
                    <Image key={img} src={`/images/${img}.jpg`} alt='' height={'1080'} width={'1920'} className='mt-10'/>
                ))
            }
            {/* <Image src={'/images/1.jpg'} alt='' height={'1080'} width={'1920'}></Image> */}
        </div>
    );
}

export default GalleryPage;
