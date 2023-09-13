import { useState } from "react";


const Blogs = () => {
    const [blogs, setBlogs] = useState([])

    useEffect(() => {
        fetch('blogs.json')
        .then(res=> res.json())
        .then(data=> seBlogs(data))
    },[])


    return (
        <div>
            
        </div>
    );
};

export default Blogs;