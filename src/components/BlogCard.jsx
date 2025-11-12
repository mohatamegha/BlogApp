import { useNavigate } from "react-router";

const Blog = ({blog}) => {
    
    const {image, category, title, description, _id} = blog;
    const summary = description
        .replace(/<[^>]+>/g, '')       // remove HTML tags
        .split(' ')                     // split into words
        .slice(0, 8)                   // take first 10 words
        .join(' ');             // join back and add "..."
    const navigate = useNavigate();
    return (
        <div onClick={ () => navigate(`/blog/${_id}`)} className="border border-gray-200 rounded-md ml-5 mr-5 mt-8 h-80 w-70 cursor-pointer transform hover:scale-105 hover:shadow-lg duration-200">
            <img src={image} alt="blog-image" className=" rounded-md w-full h-40"/> 
            <div className="ml-3 mt-3 mb-3 h-6 w-auto inline-block pl-1.5 pr-1.5 bg-primary/15 rounded-full">
                {category}
            </div>
            <div className="font-semibold text-sm ml-3 mr-3 mb-2">
               {title}
            </div>
            <div className="text-gray-600 text-sm ml-3 mr-3">
                {summary}
            </div>
        </div>
    )
};
export default Blog;