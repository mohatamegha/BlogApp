import { Outlet, useNavigate } from "react-router";
import { assets } from "../../assets/assets";
import { useState } from "react";

const Layout = () => {
  const navigate = useNavigate();
  const logout = () => navigate("/");

  const [sidebarOption, setSidebarOption] = useState("Dashboard");

  const sidebarOptions = ["Dashboard", "Add Blogs", "Blog Lists", "Comments"];
  const logos = [
    assets.home_icon,
    assets.add_icon,
    assets.list_icon,
    assets.comment_icon
  ];

  const handleOptionClick = (option) => {
    setSidebarOption(option);
    navigate(`/admin/${option.toLowerCase().replace(" ", "")}`);
  };

  return (
    <div className="flex flex-col h-screen">
      {/* Navbar */}
      <div className="border-b border-gray-200 flex justify-between items-center h-20 px-6 sm:px-12 bg-white">
        <img
          src={assets.logo}
          onClick={() => navigate("/")}
          alt="logo"
          className="w-32 sm:w-40 cursor-pointer"
        />
        <button
          onClick={logout}
          className="text-sm px-6 sm:px-8 py-2 bg-primary text-white rounded-full cursor-pointer"
        >
          Logout
        </button>
      </div>

      {/* Main content */}
      <div className="flex flex-1 overflow-hidden">
        {/* Sidebar */}
        <div className="border-r border-gray-200 bg-white w-20 sm:w-56 flex flex-col py-6 items-center sm:items-start transition-all duration-300">
          {sidebarOptions.map((option, index) => (
            <div
              key={option}
              onClick={() => handleOptionClick(option)}
              className={`flex items-center sm:justify-start justify-center gap-3 w-full sm:px-6 py-3 my-1 cursor-pointer hover:bg-primary/10 transition-all duration-200
                ${
                  sidebarOption === option
                    ? "bg-primary/10 border-r-4 border-primary font-semibold text-primary"
                    : "text-gray-700"
                }`}
            >
            <div className="w-8 h-8 flex items-center justify-center">
                <img
                    src={logos[index]}
                    alt={option}
                    className="max-w-full max-h-full object-contain"
                />
            </div>

              {/* Hide text on small screens */}
              <span className="hidden sm:inline">{option}</span>
            </div>
          ))}
        </div>

        {/* Content area */}
        <div className="flex-1 p-6 overflow-y-auto bg-primary/10">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default Layout;
