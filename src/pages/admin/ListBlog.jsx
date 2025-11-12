import { useEffect, useState } from "react";
import {assets, blog_data } from "../../assets/assets";
import TableData from "../../components/admin/TableData";
const ListBlog = () =>{
    const [blogData, setBlogData] = useState([]);

    const fetchBlogs = async () =>{
        setBlogData(blog_data);
    }

    console.log(blogData);
    useEffect(  () =>{
        fetchBlogs();
    }, []);

    return <>
        <div>
            <div className="p-6 bg-white rounded-2xl shadow-md">
				{/* latest blogs */}
				<div className="flex">
					<img src={assets.dashboard_icon_4} alt="Latest blogs" className="mr-4 p-3"/>
					<h2 className="pt-3 pb-3 font-bold">All Blogs</h2>
				</div>
				{/* table */}
				<table className="w-full border-collapse">
					<thead className="bg-gray-100">
						<tr className="text-left text-gray-600 uppercase text-sm">
							<th className="py-3 px-4">#</th>
							<th className="py-3 px-4">Blog Title</th>
							<th className="py-3 px-4">Date</th>
							<th className="py-3 px-4">Status</th>
							<th className="py-3 px-4 text-center">Actions</th>
						</tr>
					</thead>
					{/* table head ends */}

					{/* table body */}
					<tbody>
						{blogData.map((blog, index) => (
							<TableData key={blog._id} blog={blog} index={index} />
						))}
					</tbody>
				</table>
			</div>
        </div>
    </>
}

export default ListBlog;