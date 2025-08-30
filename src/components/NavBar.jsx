import { Link } from "react-router-dom";
import FramerWrapper from "./FramerWrapper";
import fusionLogo from "../../public/fusionLogo.png";
import { motion } from "framer-motion";
function NavBar() {
  return (
    <FramerWrapper>
      <header className="sticky top-0 z-50 bg-background/75 py-6 backdrop-blur-sm">
        <ul className="flex  text-gray-500 sm:gap-8 justify-between sm:justify-normal  ">
          <Link to="/">
            <motion.li
              whileHover={{
                scale: 1.1,
              }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
              className="hover:text-white cursor-pointer flex gap-2"
            >
              <motion.img
                initial={{ rotate: 0 }}
                animate={{ rotate: 360 }}
                transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                src={fusionLogo}
                height={48}
                width={48}
                className="hidden sm:block"
              />
              <p>home</p>
            </motion.li>
          </Link>
          <Link to="/work">
            <motion.li
              whileHover={{
                scale: 1.1,
              }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
              className="hover:text-white cursor-pointer"
            >
              work
            </motion.li>
          </Link>
          <Link to="/projects">
            <motion.li
              whileHover={{
                scale: 1.1,
              }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
              className="hover:text-white cursor-pointer"
            >
              projects
            </motion.li>
          </Link>
          <Link to="/technologies">
            <motion.li
              whileHover={{
                scale: 1.1,
              }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
              className="hover:text-white cursor-pointer"
            >
              technologies
            </motion.li>
          </Link>
          <Link to="/contact">
            <motion.li
              whileHover={{
                scale: 1.1,
              }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
              className="hover:text-white cursor-pointer"
            >
              contact
            </motion.li>
          </Link>
        </ul>
      </header>
    </FramerWrapper>
  );
}

export default NavBar;
