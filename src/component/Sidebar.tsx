import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import {
  HomeIcon,
  UserIcon,
  CogIcon,
  Bars3Icon,
  XMarkIcon,
  CalendarIcon,
  UserGroupIcon,
  PlusIcon,
} from "@heroicons/react/24/outline";
import { useTranslation } from "react-i18next";
import {
  FaTachometerAlt,
  FaImage,
  FaThList,
  FaBox,
  FaUsers,
  FaClipboardList,
  FaTags,
  FaBlog,
  FaSignOutAlt,
  FaLayerGroup,
} from "react-icons/fa";
import { LiaAngleDownSolid } from "react-icons/lia";
import { LiaAngleUpSolid } from "react-icons/lia";
import Button from "@mui/material/Button";
import { IoBagCheckOutline } from "react-icons/io5";
import { FiUsers } from "react-icons/fi";
import { RiProductHuntLine } from "react-icons/ri";
import { BiCategory } from "react-icons/bi";
import { BsCardImage } from "react-icons/bs";
import { RxDashboard } from "react-icons/rx";
import { FaRegImages } from "react-icons/fa";
import AddHomeSlider from "../CommenPages/AddHomeSlider";
import AddNewCategory from "../CommenPages/AddNewCategory";
import AddSubCategory from "../CommenPages/AddSubCategory";

interface SidebarProps {
  isOpen: boolean;
}
const Sidebar: React.FC<SidebarProps> = ({ isOpen }) => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const [isOpenHomeSlide, setisOpenHomeSlide] = useState(false);
  const [isOpenCat, setisOpenCat] = useState(false);
  const [isOpenSubCat, setisOpenSubCat] = useState(false);
  const [openMenus, setOpenMenus] = useState<{ [key: string]: boolean }>({
    homeSlides: false,
    category: false,
    products: false,
    banners: false,
    blogs: false,
  });

  const toggleMenu = (menu: string) => {
    setOpenMenus({ [menu]: !openMenus[menu] });
  };

  const handleClickOpen = () => {
    setisOpenHomeSlide(true);
  };

  const handleClose = () => {
    setisOpenHomeSlide(false);
  };

  const handleCatClickOpen = () => {
    setisOpenCat(true);
  };

  const handleCatClose = () => {
    setisOpenCat(false);
  };

  const handleSubCatClickOpen = () => {
    setisOpenSubCat(true);
  };

  const handlSubCatClose = () => {
    setisOpenSubCat(false);
  };

  return (
    <aside
      className={`bg-white shadow-md h-screen transition-all duration-300 ${
        isOpen ? "w-72  p-4" : "w-0 overflow-hidden"
      }`}
    >
      {/* Logo */}
      <div className="flex items-center space-x-2 mb-6">
        <img src="/logo.png" alt="Logo" className="h-10 w-10" />
        <div>
          <h2 className="font-bold text-lg">CLASSYSHOP</h2>
          <p className="text-xs text-gray-500">BIG MEGA STORE</p>
        </div>
      </div>

      {/* Menu */}
      <ul className="space-y-2 text-sm">
        <li>
          <Button
            onClick={() => navigate("/app/dashboard")}
            className="flex items-center space-x-2 text-gray-700 font-medium cursor-pointer !w-full !justify-start"
          >
            <RxDashboard className="text-[17px] text-gray-700" />
            <span className="text-gray-700">Dashboard</span>
          </Button>
        </li>

        {/* Home Slides */}
        <li>
          <Button
            onClick={() => toggleMenu("homeSlides")}
            className="flex !justify-between items-center cursor-pointer text-gray-700 font-medium !w-full"
          >
            <div className="flex items-center space-x-2">
              <BsCardImage className="text-[17px] text-gray-700" />
              <span className="text-gray-700">Home Slides</span>
            </div>
            <span>
              {openMenus.homeSlides ? (
                <LiaAngleUpSolid className="text-[15px] text-gray-700" />
              ) : (
                <LiaAngleDownSolid className="text-[15px] text-gray-700" />
              )}
            </span>
          </Button>
          <div
            className={`transition-all duration-500 overflow-hidden ${
              openMenus.homeSlides
                ? "max-h-40 opacity-100"
                : "max-h-0 opacity-0"
            }`}
          >
            <ul className="pl-8 text-gray-500 text-sm mt-1 space-y-1 list-disc">
              <li
                className="cursor-pointer"
                onClick={() => navigate("/app/homeSlider")}
              >
                Home Banners List
              </li>
              <li className="cursor-pointer" onClick={handleClickOpen}>
                Add Home Banner Slide
              </li>
            </ul>
          </div>
        </li>

        {/* Category */}
        <li>
          <Button
            onClick={() => toggleMenu("category")}
            className="flex !justify-between items-center cursor-pointer text-gray-700 font-medium !w-full"
          >
            <div className="flex items-center space-x-2">
              <BiCategory className="text-[17px] text-gray-700" />
              <span className="text-gray-700">Category</span>
            </div>
            <span>
              {openMenus.category ? (
                <LiaAngleUpSolid className="text-[15px] text-gray-700" />
              ) : (
                <LiaAngleDownSolid className="text-[15px] text-gray-700" />
              )}
            </span>
          </Button>
          <div
            className={`transition-all duration-500 overflow-hidden ${
              openMenus.category ? "max-h-40 opacity-100" : "max-h-0 opacity-0"
            }`}
          >
            <ul className="pl-8 text-gray-500 text-sm mt-1 space-y-1 list-disc">
              <li
                className="cursor-pointer"
                onClick={() => navigate("/app/categoryList")}
              >
                Category List
              </li>
              <li className="cursor-pointer" onClick={handleCatClickOpen}>
                Add A Category
              </li>
              <li
                className="cursor-pointer"
                onClick={() => navigate("/app/subcategory")}
              >
                Sub Category List
              </li>
              <li className="cursor-pointer" onClick={handleSubCatClickOpen}>
                Add A Sub Category
              </li>
            </ul>
          </div>
        </li>

        {/* Products */}
        <li>
          <Button
            onClick={() => toggleMenu("products")}
            className="flex !justify-between items-center cursor-pointer text-gray-700 font-medium !w-full"
          >
            <div className="flex items-center space-x-2">
              <RiProductHuntLine className="text-[17px] text-gray-700" />
              <span className="text-gray-700">Products</span>
            </div>

            <span>
              {openMenus.products ? (
                <LiaAngleUpSolid className="text-[15px] text-gray-700" />
              ) : (
                <LiaAngleDownSolid className="text-[15px] text-gray-700" />
              )}
            </span>
          </Button>
          <div
            className={`transition-all duration-500 overflow-hidden ${
              openMenus.products ? "max-h-40 opacity-100" : "max-h-0 opacity-0"
            }`}
          >
            <ul className="pl-8 text-gray-500 text-sm mt-1 space-y-1 list-disc">
              <li
                onClick={() => navigate("/app/productList")}
                className="cursor-pointer"
              >
                Product List
              </li>
              <li className="cursor-pointer">Product Upload</li>
              <li className="cursor-pointer">Add Product RAMS</li>
              <li className="cursor-pointer">Add Product WEIGHT</li>
              <li className="cursor-pointer">Add Product SIZE</li>
            </ul>
          </div>
        </li>

        {/* Users */}
        <li>
          <Button className="flex items-center space-x-2 text-gray-700 font-medium cursor-pointer !w-full !justify-start">
            <FiUsers className="text-[17px] text-gray-700" />
            <span className="text-gray-700">Users</span>
          </Button>
        </li>

        {/* Orders */}
        <li>
          <Button className="flex items-center space-x-2 text-gray-700 font-medium cursor-pointer !w-full !justify-start">
            <IoBagCheckOutline className="text-[17px] text-gray-700" />
            <span className="text-gray-700">Orders</span>
          </Button>
        </li>

        {/* Banners */}
        <li>
          <Button
            onClick={() => toggleMenu("banners")}
            className="flex !justify-between items-center cursor-pointer text-gray-700 font-medium !w-full"
          >
            <div className="flex items-center space-x-2">
              <FaRegImages className="text-[17px] text-gray-700" />
              <span className="text-gray-700">Banners</span>
            </div>
            <span>
              {openMenus.banners ? (
                <LiaAngleUpSolid className="text-[15px] text-gray-700" />
              ) : (
                <LiaAngleDownSolid className="text-[15px] text-gray-700" />
              )}
            </span>
          </Button>
          <div
            className={`transition-all duration-500 overflow-hidden ${
              openMenus.banners ? "max-h-40 opacity-100" : "max-h-0 opacity-0"
            }`}
          >
            <ul className="pl-8 text-gray-500 text-sm mt-1 space-y-1 list-disc">
              <li className="cursor-pointer">Home Banner List</li>
              <li className="cursor-pointer">Add Home Banner</li>
              <li className="cursor-pointer">Home Banner List 2</li>
              <li className="cursor-pointer">Add Banner</li>
            </ul>
          </div>
        </li>

        {/* Blogs */}
        <li>
          <Button
            onClick={() => toggleMenu("blogs")}
            className="flex !justify-between items-center cursor-pointer text-gray-700 font-medium !w-full"
          >
            <div className="flex items-center space-x-2">
              <FaBlog className="text-[17px] text-gray-700" />
              <span className="text-gray-700">Blogs</span>
            </div>
            <span>
              {openMenus.blogs ? (
                <LiaAngleUpSolid className="text-[15px] text-gray-700" />
              ) : (
                <LiaAngleDownSolid className="text-[15px] text-gray-700" />
              )}
            </span>
          </Button>
          <div
            className={`transition-all duration-500 overflow-hidden ${
              openMenus.blogs ? "max-h-40 opacity-100" : "max-h-0 opacity-0"
            }`}
          >
            <ul className="pl-8 text-gray-500 text-sm mt-1 space-y-1 transition-all duration-700 list-disc">
              <li className="cursor-pointer">Blog List</li>
              <li className="cursor-pointer">Add Blog</li>
            </ul>
          </div>
        </li>

        {/* Manage Logo */}
        <li>
          <Button className="flex items-center space-x-2 text-gray-700 font-medium cursor-pointer !w-full !justify-start">
            <FaLayerGroup className="text-[17px] text-gray-700" />
            <span className="text-gray-700">Manage Logo</span>
          </Button>
        </li>

        {/* Logout */}
        <li>
          <Button className="flex items-center space-x-2 text-gray-700 font-medium cursor-pointer !w-full !justify-start">
            <FaSignOutAlt className="text-[17px] text-gray-700" />
            <span className="text-gray-700">Logout</span>
          </Button>
        </li>
      </ul>
      <AddHomeSlider handleClose={handleClose} open={isOpenHomeSlide} />
      <AddNewCategory handleClose={handleCatClose} open={isOpenCat} />
      <AddSubCategory handleClose={handlSubCatClose} open={isOpenSubCat} />
    </aside>
  );
};

export default Sidebar;
