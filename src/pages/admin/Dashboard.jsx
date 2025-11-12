import { useEffect, useState } from "react";
import { assets, dashboard_data } from "../../assets/assets";
import TableData from "../../components/admin/TableData";

const Dashboard = () => {
	const [dashboardData, setDashboardData] = useState({
		blogs : 0,
		comments : 0,
		drafts : 0,
		recentBlogs: []
	});

	const fetchDashboardData = async()  => {
		setDashboardData(dashboard_data);
	}

	useEffect( () => {
		fetchDashboardData();
	}, []);

	return <>
		<div className="flex flex-row flex-wrap gap-5">
			<div className="flex bg-primary/8 h-20 w-45 rounded-lg items-center transition-transform transform hover:scale-105 hover:shadow-lg cursor-pointer duration-200">
				<img src={assets.dashboard_icon_1} className="m-2"/>
				<div className="m-2">
					<p className="font-bold text-2xl">
						{dashboardData.blogs}
					</p>
					<p className="text-gray-600">
						Blogs
					</p>
				</div>
			</div>

			<div className="flex bg-primary/8 h-20 w-45 rounded-lg items-center transition-transform transform hover:scale-105 hover:shadow-lg cursor-pointer duration-200">
				<img src={assets.dashboard_icon_2} className="m-2"/>
				<div className="m-2">
					<p className="font-bold text-2xl">
						{dashboardData.comments}
					</p>
					<p className="text-gray-600">
						Comments
					</p>
				</div>
			</div>

			<div className="flex bg-primary/8 h-20 w-45 rounded-lg items-center transition-transform transform hover:scale-105 hover:shadow-lg cursor-pointer duration-200">
				<img src={assets.dashboard_icon_3} className="m-2"/>
				<div className="m-2">
					<p className="font-bold text-2xl">
						{dashboardData.drafts}
					</p>
					<p className="text-gray-600">
						Drafts
					</p>
				</div>
			</div>

			{/* the entire table comp */}
			<div className="p-6 bg-white rounded-2xl shadow-md">
				{/* latest blogs */}
				<div className="flex">
					<img src={assets.dashboard_icon_4} alt="Latest blogs" className="mr-4 p-3"/>
					<h2 className="pt-3 pb-3 font-bold">Latest Blogs</h2>
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
						{dashboardData.recentBlogs.map((blog, index) => (
							<TableData key={blog._id} blog={blog} index={index} />
						))}
					</tbody>
				</table>
			</div>

		</div>
	</>
}

export default Dashboard;