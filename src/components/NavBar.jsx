import { Link } from 'react-router-dom';
import FramerWrapper from './FramerWrapper';
import fusionLogo from "../../public/fusionLogo.png"
import {motion} from "framer-motion"
function NavBar() {
  return (
    <FramerWrapper>
    <header className="sticky top-0 z-50 bg-background/75 py-6 backdrop-blur-sm">
      <ul className="flex  text-gray-500 sm:gap-8 justify-between sm:justify-normal  ">
        <Link to="/">
      
        <li className="hover:text-white cursor-pointer flex gap-4"
        >    <motion.img  initial={{ rotate: 0 }}
            animate={{ rotate: 360 }}
            transition={{ duration: 10, repeat: Infinity, ease: "linear" }} src={fusionLogo} height={48} width={48}/> <p>home</p> </li></Link>
         <Link to="/work"> <li className="hover:text-white cursor-pointer">work</li></Link>
         <Link to="/projects"> <li className="hover:text-white cursor-pointer">projects</li></Link>
          <Link to="/technologies"><li className="hover:text-white cursor-pointer">technologies</li></Link>
         <Link to="/contact"> <li className="hover:text-white cursor-pointer">contact</li></Link>
      </ul>
    </header>
    </FramerWrapper>
  );
}

export default NavBar;
