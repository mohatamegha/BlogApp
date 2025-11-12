import { useParams } from "react-router";
import { assets, blog_data } from "../assets/assets";
import { useEffect, useState } from "react";
import NavBar from "../components/NavBar";

const Blog = () => {
    const id = useParams().id;
    const [currData, setCurrData] = useState(null);
    
    const fetchData = async()  => {
        const data = blog_data.find( (blog) => blog._id === id);
        setCurrData(data);
    }

    useEffect( () => {
        fetchData();
    }, [id]);

    console.log(currData);
    if (!currData) {
        return <div>Loading...</div>;
    }

    const formatDate = (isoDate) => {
    const date = new Date(isoDate);
    const day = date.getDate();
    const month = date.toLocaleString("en-US", { month: "long" });
    const year = date.getFullYear();

    // determine suffix
    const suffix =
        day % 10 === 1 && day !== 11
        ? "st"
        : day % 10 === 2 && day !== 12
        ? "nd"
        : day % 10 === 3 && day !== 13
        ? "rd"
        : "th";

    return `${day}${suffix} ${month}, ${year}`;
    };

    return (
        <div className="min-h-screen bg-cover bg-center"
            style={{ backgroundImage: `url(${assets.gradientBackground})` }}>
            <NavBar/>
            <div className="hero-section flex flex-col items-center mt-10 mb-10">
                <h3 className="mt-10 text-primary font-extrabold mb-3">Published on {formatDate(currData.createdAt)} </h3>
                <h5 className="text-4xl font-bold mt-4 mb-7">{currData.title} </h5>
                <h2 className="mb-8 ml-3 mt-3 h-6 w-auto inline-block pl-2 pr-2 bg-primary/15 rounded-full text-primary font-extrabold"> Megha Mohata </h2>
                <img src={currData.image} alt="blog-image" className="w-3/5 rounded-md mb-6"/>
                <div className="rich-text mx-25 my-10 mt-6" dangerouslySetInnerHTML={{ __html: currData.description }}></div>
            </div>
        </div>
    );
}

export default Blog;