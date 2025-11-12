const Newsletter = () => {
    return (
        <div className="flex flex-col justify-center items-center gap-6 py-16 px-4 bg-gray-50">
            <h1 className="text-black text-4xl font-extrabold text-center">Never Miss a Blog!</h1>
            <h3 className="text-gray-700 text-center max-w-xl">
                Subscribe to get the latest blog, new tech, and exclusive news.
            </h3>
            <form className="flex w-full max-w-md justify-between gap-4 border border-gray-300 rounded-full px-4 py-2">
                <input
                    className="flex-1 text-gray-600 outline-none bg-transparent placeholder-gray-400"
                    type="email"
                    placeholder="Enter your email"
                    required
                />
                <button
                    type="submit"
                    className="bg-primary text-white px-6 py-2 rounded-full hover:bg-primary/90 transition"
                >
                    Subscribe
                </button>
            </form>
        </div>
    )
}
export default Newsletter;
