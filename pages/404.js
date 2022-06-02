import { useRouter } from 'next/router';
import React, { useEffect } from 'react';

const ErrorPage = () => {

    // auto redirect to home page after second (thats given)

    const router  = useRouter()

    useEffect(()=>{
        setTimeout(() => {
            router.push("/")
        }, 3000);
    },[])

    return (
        <div className='flex items-center justify-center text-center mt-20'>
            <h2 className='text-4xl'>404</h2>
            <h2 className='text-2xl'>Page Not Found </h2>
        </div>
    );
};

export default ErrorPage;