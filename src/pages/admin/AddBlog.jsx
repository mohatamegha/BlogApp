import { useRef, useState } from "react";
import { assets } from "../../assets/assets";
import Editor from "../../components/admin/Editor";

const AddBlog = () => {
    const [image, setImage] = useState(false);
    const [title, setTitle] = useState("");
    const [subTitle, setSubTitle] = useState("");
    const [content, setContent] = useState("");
    const [category, setCategory] = useState("Select category");
    const [isPublished, setIsPublished] = useState(false);
    const quillRef = useRef();

    const handleEditorChange = (delta, oldDelta, source) => {
        if (source === "user") {
            const editor = quillRef.current;
            if (editor) setContent(editor.root.innerHTML);
        }
    };

    const handleTitleChange = (e) => setTitle(e.target.value);
    const handleSubTitleChange = (e) => setSubTitle(e.target.value);
    const handleThumbnailUpload = (e) => {
        const file = e.target.files[0];
        setImage(file);
    };
    
    const onSubmitHandler = (e) =>{
        e.preventDefault();
        console.log({
            title, subTitle, category, content
        });
        setTitle("");
        setSubTitle("");
        setCategory("Select category");
        setIsPublished(false);
        setImage(false);
        setContent("");

        if (quillRef.current) {
            quillRef.current.setText("");  // resets editor to empty
        }
        alert("Blog submitted successfully!");
    };

    return (
        <div className="p-6 bg-white rounded-2xl shadow-md max-w-3xl mx-auto mt-4">
            <h2 className="text-2xl font-bold mb-6 text-gray-800 border-b pb-3">Add New Blog</h2>

            <form onSubmit={onSubmitHandler} className="space-y-6">
                {/* Thumbnail Upload */}
                <div className="w-40">
                    <p className="text-gray-700 font-medium mb-2">Upload Thumbnail:</p>
                    <label
                        htmlFor="image"
                        className="flex items-start rounded-lg p-4 text-center cursor-pointer hover:bg-gray-50 transition"
                    >
                        <img
                            src={image ? URL.createObjectURL(image) : assets.upload_area}
                            alt="Upload thumbnail"
                            className="-mt-3 -mb-5 -ml-3 rounded-md"
                        />
                        <input
                            type="file"
                            id="image"
                            hidden
                            required
                            onChange={handleThumbnailUpload}
                        />
                    </label>
                </div>

                {/* Title */}
                <div>
                    <p className="text-gray-700 font-medium mb-2">Title:</p>
                    <input
                        type="text"
                        value={title}
                        onChange={handleTitleChange}
                        placeholder="Enter the title"
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400"
                    />
                </div>

                {/* Subtitle */}
                <div>
                    <p className="text-gray-700 font-medium mb-2">Sub Title:</p>
                    <input
                        type="text"
                        value={subTitle}
                        onChange={handleSubTitleChange}
                        placeholder="Enter the sub title"
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400"
                    />
                </div>

                {/* Description */}
                <div>
                    <p className="text-gray-700 font-medium mb-2">Blog Description:</p>
                    <div className="border border-gray-300 rounded-lg p-2 min-h-[300px] bg-white h-[300px]">
                        <Editor ref={quillRef} onTextChange={handleEditorChange}/>
                    </div>
                </div>

                {/* Submit */}
                <div className="flex justify-end">
                    <button
                        type="submit"
                        className="bg-indigo-600 text-white px-6 py-2 rounded-lg hover:bg-indigo-700 transition"
                    >
                        Publish Blog
                    </button>
                </div>
            </form>
        </div>
    );
};

export default AddBlog;