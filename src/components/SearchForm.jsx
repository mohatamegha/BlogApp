import { Search } from 'lucide-react';

const SearchForm = () => {
    return (
        <form className="w-full max-w-2xl mx-auto">
            <div className="relative flex items-center">
                <input 
                    type="text" 
                    placeholder="Search for blogs"
                    className="w-full px-6 py-4 pr-32 text-gray-700 bg-white border border-gray-200 rounded-full shadow-sm focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent placeholder:text-gray-400"
                />
                <button 
                    type="submit"
                    className="absolute right-2 px-6 py-2.5 bg-gradient-to-r from-purple-600 to-blue-600 text-white font-medium rounded-full hover:shadow-lg hover:scale-105 transition-all duration-200 flex items-center gap-2"
                >
                    <Search className="w-4 h-4" />
                    Search
                </button>
            </div>
        </form>
    );
};

export default SearchForm;