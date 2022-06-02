import React from 'react';
import {useRouter} from "next/router"

const pageNo = () => {

    // dynamic routing 

    const router = useRouter()
    const pageNumber = router.query.pageNo
    return (
        <div>

            <h2>My Blog {pageNumber} is Content</h2>
            
        </div>
    );
};

export default pageNo;