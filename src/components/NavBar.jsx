import { Link } from 'react-router-dom';

function NavBar() {
  return (
    <header className="sticky top-0 z-50 bg-background/75 py-6 backdrop-blur-sm">
      <ul className="flex gap-4 text-gray-500 sm:gap-8  ">
        <Link to="/"><li className="hover:text-white cursor-pointer">home</li></Link>
         <Link to="/work"> <li className="hover:text-white cursor-pointer">work</li></Link>
         <Link to="/projects"> <li className="hover:text-white cursor-pointer">projects</li></Link>
          <Link to="/technologies"><li className="hover:text-white cursor-pointer">technologies</li></Link>
         <Link to="/contact"> <li className="hover:text-white cursor-pointer">contact</li></Link>
      </ul>
    </header>
  );
}

export default NavBar;
