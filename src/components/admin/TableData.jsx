import { assets } from "../../assets/assets";

const TableData = ({ blog, index }) => {
  const date = new Date(blog.createdAt);

  return (
    <tr className="border-b hover:bg-gray-50 transition">
      <td className="py-3 px-4 font-medium text-gray-700">{index + 1}</td>
      <td className="py-3 px-4">{blog.title}</td>
      <td className="py-3 px-4 text-gray-600">{date.toLocaleDateString()}</td>
      <td className="py-3 px-4">
        <span
          className={`px-3 py-1 rounded-full text-sm font-medium ${
            blog.isPublished
              ? "bg-green-100 text-green-700"
              : "bg-yellow-100 text-yellow-700"
          }`}
        >
          {blog.isPublished ? "Published" : "Not Published"}
        </span>
      </td>
      <td className="py-3 px-4 flex items-center justify-center gap-4">
        <button className="text-blue-600 hover:underline text-sm">
          {blog.isPublished ? "Unpublish" : "Publish"}
        </button>
        <img
          src={assets.cross_icon}
          alt="delete"
          className="w-6 h-6 cursor-pointer hover:scale-110 transition-transform"
        />
      </td>
    </tr>
  );
};

export default TableData;
