import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="flex justify-between items-center px-8 py-6 border-b border-[#00F7FF]/10 sticky top-0 bg-black/80 backdrop-blur-md z-50">
      <Link to="/" className="text-2xl font-black tracking-tighter text-white">
        NEXGEN<span className="text-accent drop-shadow-[0_0_8px_#00F7FF]">ACADEMY</span>
      </Link>
      
      <div className="hidden md:flex space-x-10 text-sm font-bold tracking-widest uppercase">
        <Link to="/courses" className="hover:text-accent transition-all duration-300">Courses</Link>
        <Link to="/digital-products" className="hover:text-accent transition-all duration-300">Digital Products</Link>
        <Link to="/contact" className="hover:text-accent transition-all duration-300">Contact Us</Link>
      </div>
    </nav>
  );
};
export default Navbar;