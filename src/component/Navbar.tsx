import { RiMenu2Fill } from "react-icons/ri";

interface NavbarProps {
  toggleSidebar: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ toggleSidebar }) => {
  return (
    <nav className="w-full h-16 bg-white shadow flex items-center px-4 justify-between">
      <button onClick={toggleSidebar} className="text-2xl text-gray-800">
        <RiMenu2Fill />
      </button>
      <h1 className="text-xl font-semibold">Dashboard</h1>
    </nav>
  );
};

export default Navbar;
