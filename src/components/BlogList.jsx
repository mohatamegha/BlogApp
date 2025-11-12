import { useState } from "react";
import { motion } from "framer-motion";
import BlogCard from "./BlogCard";
import { blog_data } from "../assets/assets";
import { useAppContext } from "../context/AppContext";
import toast from "react-hot-toast";

const BlogList = () => {
    const {axios, blogs, input} = useAppContext();

    // const fetchBlogs = async () =>{
    //     try{
    //         const endpoint = input === '' ? '' : `category/${input}`;
    //         const {data} = await axios.post(`/public/blog${endpoint}`);
    //     }
    //     catch(error){
    //         toast.error(error.message);
    //     }
    // }

    const filteredBlogs = () => {
        if(input === ''){
            return blogs;
        }
        return blogs.filter( (blog) => {
            blog.title.toLowerCase().includes(input.toLowerCase())
        });
    }

    const categories = [
        "All",
        "Technology",
        "Startup",
        "Health",
        "Travel",
        "Food",
        "Lifestyle",
        "Finance",
        "Education",
        "Entertainment"
    ];
    // console.log(blog_data);
    const [selectedCategory, setSelectedCategory] = useState("All");
    return (
        <>
            {/* Category list */}
            <div className="flex items-center justify-center">       
                {
                    categories.map((category) => (
                        <button onClick={ () => setSelectedCategory(category)}
                        key={category} 
                        
                        className={`relative mx-1 px-4 py-1 rounded-full  transition-colors duration-200 
                            ${selectedCategory === category ? 'text-white' : 'text-gray-700 hover:bg-primary/10' }`}>
                                {/*Issue: the conditional styling of tailwind classes is not working */}
                            {selectedCategory === category && (
                                <motion.div
                                    layoutId="selectedCategory"
                                    className="absolute inset-0 bg-primary rounded-full"
                                    transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                                />
                            )}
                            <span className="relative z-10">{category}</span>
                        </button>  
                    ))
                }
            </div>
            {/* showing all blogs */}
            <div className="flex flex-wrap justify-center">
                {
                    filteredBlogs().map( (blog) => {
                        if(selectedCategory === "All" || blog.category === selectedCategory){
                            return <BlogCard key={blog._id} blog={blog} />
                        }
                        return null;
                    })
                }
            </div>
        </>
    )
};
export default BlogList;