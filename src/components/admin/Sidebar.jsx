import {useEffect, useState} from "react";
import {
  AiOutlineDashboard,
  AiOutlineUser,
  AiOutlineSetting,
} from "react-icons/ai";
import {TbReportAnalytics} from "react-icons/tb";
import {BsFilePostFill} from "react-icons/bs";
import {MdOutlineExitToApp} from "react-icons/md";
import {useLocation, Link, Outlet} from "react-router-dom";
import Navbar from "../../components/navbar/Navbar";
import userService from "../../Services/user.service";
import avatarDefault from "../../Resource/Image/avatar.png";

const sidebarItems = [
  {
    display: "Dashboard",
    to: "/admin",
    icons: <AiOutlineDashboard />,
    section: "",
  },
  {
    display: "User",
    icons: <AiOutlineUser />,
    to: "user",
    section: "/",
  },
  {
    display: "Post",
    icons: <BsFilePostFill />,
    to: "post",
    section: "/post",
  },
  {
    display: "Report",
    icons: <TbReportAnalytics />,
    to: "/report",
    section: "report",
  },
];
const Sidebar = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const location = useLocation();
  useEffect(() => {
    const curPath = window.location.pathname.split("/admin")[1];
    const activeItem = sidebarItems.findIndex(
      (item) => item.section === curPath
    );
    setActiveIndex(curPath.length === 0 ? 0 : activeItem);
  }, [location]);
  return (
    <div
      className="h-screen w-[250px] bg-[#f7f7f7] border-r border-black/20 fixed top-0
    left-0 "
    >
      <div className="menu-edit-user flex flex-col p-2 gap-4">
        <div className="heading font-bold text-xl text-center py-12 ">
          Admin Management
        </div>
        <div className="menu-items flex flex-col gap-4 px-4">
          {sidebarItems.map((item) => (
            <Link
              to={item.to}
              className="flex p-3 bg-primaryblue/50 w-full rounded-xl gap-2 cursor-pointer items-center"
            >
              <span className="text-xl">{item.icons}</span>
              <span className="text-black font-semibold text-base">
                {item.display}
              </span>
            </Link>
          ))}
        </div>
        <div className="bottom flex flex-col items-center mt-16 ">
          <div class="avatar">
            <div class="w-24 rounded-full">
              <img src={avatarDefault} />
            </div>
          </div>
          <div className=" text-lg font-semibold text-black">User Name</div>
          <div className=" text-sm font-semibold text-black/50 mb-8 mt-2">
            emaigl@gmail.com
          </div>
          <div className="flex gap-6 ">
            <button className="p-2 hover:bg-gray rounded text-xl border border-black/20">
              <AiOutlineSetting />
            </button>
            <button className="p-2 hover:bg-gray rounded text-xl border border-black/20">
              <MdOutlineExitToApp />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Sidebar;
