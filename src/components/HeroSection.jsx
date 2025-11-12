import { useEffect } from "react";
import { assets } from "../assets/assets";

const HeroSection = () => {
    useEffect(() => {

    }, []);

    return (
        <div className="h-110 flex items-center justify-center relative" style={{ backgroundImage: `url(${assets.gradientBackground})` }}>
            <div className="max-w-4xl mx-auto text-center space-y-6">
                {/* Main Heading */}
                <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold text-gray-800 leading-tight">
                    Your own{' '}
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-blue-600">
                        blogging
                    </span>
                    <br />
                    platform.
                </h1>

                {/* Description */}
                <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
                    This is your space to think out loud, to share what matters, and to write 
                    without filters. Whether it's one word or a thousand, your story starts right here.
                </p>
                {/* Gradient effect */}

                <form className="w-full max-w-2xl mx-auto">
                    <div className="relative flex items-center">
                        <input 
                        type="text" placeholder="Search for blogs"
                        onChange={() => {}}
                        className="w-full px-6 py-4 pr-32 text-gray-700 bg-white border border-gray-200 rounded-full shadow-sm placeholder:text-gray-400"
                        required/>
                        <button type="submit" onClick={() => {}}
                        className="absolute right-2 px-6 py-2.5 bg-gradient-to-r from-purple-600 to-blue-600 text-white font-medium rounded-full"
                        >
                            Search
                        </button> 
                    </div>
                </form>
                <div className="absolute inset-0 bg-gradient-to-b from-transparent from-90% via-white/10 via-70% to-white pointer-events-none"></div>
            </div>
        </div>
    );
};

export default HeroSection;