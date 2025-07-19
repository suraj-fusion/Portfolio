import FramerWrapper from "./FramerWrapper";
import reactLogo from "../../public/reactLogo.svg";
import jsLogo from "../../public/jsLogo.svg";
import nextLogo from "../../public/nextLogo.svg";
import mongoLogo from "../../public/mongoLogo.svg";
import prismaLogo from "../../public/prismaLogo.png";
import dockerLogo from "../../public/dockerLogo.svg";
import postgreLogo from "../../public/postgreLogo.svg";
import mysqlLogo from "../../public/mysqlLogo.svg";
import cssLogo from "../../public/cssLogo.svg";
import tailwindLogo from "../../public/tailwindLogo.svg";
import npmLogo from "../../public/npmLogo.svg";
import cloudflareLogo from "../../public/cloudFlareLogo.svg";
import gitLogo from "../../public/gitLogo.svg";
import githubLogo from "../../public/githubLogo.svg";
import expressLogo from "../../public/expressLogo.svg";
import { motion } from "framer-motion";
function Technologies() {
  return (
    <FramerWrapper>
      <div className="font-bold text-4xl mt-8 mb-6 text-blue-200">
        technologies i know. ⚙
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-3 border p-2 rounded gap-6 sm:gap-8">
        <a
          href="https://www.javascript.com/"
          className="flex px-6 gap-2"
          target="_"
        >
          <div className=" max-w-fit  py-1">JavaScript </div>
          <motion.img
            initial={{ rotate: 0 }}
            animate={{ rotate: 360 }}
            transition={{ duration: 5, repeat: Infinity, ease: "linear" }}
            src={jsLogo}
            height={24}
            width={24}
          />
        </a>
        <a href="https://react.dev/" className="flex px-6 gap-2" target="_">
          <div className=" max-w-fit  py-1">React </div>
          <motion.img
            initial={{ rotate: 0 }}
            animate={{ rotate: 360 }}
            transition={{ duration: 5, repeat: Infinity, ease: "linear" }}
            src={reactLogo}
            height={24}
            width={24}
          />
        </a>

        <a href="https://nextjs.org/" className="flex px-6 gap-2" target="_">
          <div className=" max-w-fit  py-1">Next JS </div>
          <motion.img
            initial={{ rotate: 0 }}
            animate={{ rotate: 360 }}
            transition={{ duration: 5, repeat: Infinity, ease: "linear" }}
            src={nextLogo}
            height={24}
            width={24}
          />
        </a>
        <a href="https://reactnative.dev/" className="flex px-6 gap-2" target="_">
          <div className=" max-w-fit  py-1">React Native</div>
          <motion.img
            initial={{ rotate: 0 }}
            animate={{ rotate: 360 }}
            transition={{ duration: 5, repeat: Infinity, ease: "linear" }}
            src={reactLogo}
            height={24}
            width={24}
          />
        </a>
        <a
          href="https://www.mongodb.com/"
          className="flex px-6 gap-2"
          target="_"
        >
          <div className=" max-w-fit  py-1">Mongo DB </div>
          <motion.img
            initial={{ rotate: 0 }}
            animate={{ rotate: 360 }}
            transition={{ duration: 5, repeat: Infinity, ease: "linear" }}
            src={mongoLogo}
            height={24}
            width={24}
          />
        </a>
        <a href="https://www.prisma.io/" className="flex px-6 gap-2" target="_">
          <div className=" max-w-fit  py-1">Prisma </div>
          <motion.img
            initial={{ rotate: 0 }}
            animate={{ rotate: 360 }}
            transition={{ duration: 5, repeat: Infinity, ease: "linear" }}
            src={prismaLogo}
            height={16}
            width={16}
          />
        </a>
        <a
          href="https://www.docker.com/"
          className="flex px-6 gap-2"
          target="_"
        >
          <div className=" max-w-fit  py-1">Docker </div>
          <motion.img
            initial={{ rotate: 0 }}
            animate={{ rotate: 360 }}
            transition={{ duration: 5, repeat: Infinity, ease: "linear" }}
            src={dockerLogo}
            height={24}
            width={24}
          />
        </a>
        <a
          href="https://www.postgresql.org/"
          className="flex px-6 gap-2"
          target="_"
        >
          <div className=" max-w-fit  py-1">PostgreSQL </div>
          <motion.img
            initial={{ rotate: 0 }}
            animate={{ rotate: 360 }}
            transition={{ duration: 5, repeat: Infinity, ease: "linear" }}
            src={postgreLogo}
            height={24}
            width={24}
          />
        </a>
        <a href="https://www.mysql.com/" className="flex px-6 gap-2" target="_">
          <div className=" max-w-fit  py-1">MySQL </div>
          <motion.img
            initial={{ rotate: 0 }}
            animate={{ rotate: 360 }}
            transition={{ duration: 5, repeat: Infinity, ease: "linear" }}
            src={mysqlLogo}
            height={24}
            width={24}
          />
        </a>
        <a
          href="https://en.wikipedia.org/wiki/CSS"
          className="flex px-6 gap-2"
          target="_"
        >
          <div className=" max-w-fit  py-1">CSS </div>
          <motion.img
            initial={{ rotate: 0 }}
            animate={{ rotate: 360 }}
            transition={{ duration: 5, repeat: Infinity, ease: "linear" }}
            src={cssLogo}
            height={24}
            width={24}
          />
        </a>
        <a
          href="https://tailwindcss.com/"
          className="flex px-6 gap-2"
          target="_"
        >
          <div className=" max-w-fit  py-1">Tailwind </div>
          <motion.img
            initial={{ rotate: 0 }}
            animate={{ rotate: 360 }}
            transition={{ duration: 5, repeat: Infinity, ease: "linear" }}
            src={tailwindLogo}
            height={24}
            width={24}
          />
        </a>
        <a href="https://git-scm.com/" className="flex px-6 gap-2" target="_">
          <div className=" max-w-fit  py-1">Git </div>
          <motion.img
            initial={{ rotate: 0 }}
            animate={{ rotate: 360 }}
            transition={{ duration: 5, repeat: Infinity, ease: "linear" }}
            src={gitLogo}
            height={24}
            width={24}
          />
        </a>
        <a href="https://github.com/" className="flex px-6 gap-2" target="_">
          <div className=" max-w-fit  py-1">GitHub </div>
          <motion.img
            initial={{ rotate: 0 }}
            animate={{ rotate: 360 }}
            transition={{ duration: 5, repeat: Infinity, ease: "linear" }}
            src={githubLogo}
            height={24}
            width={24}
          />
        </a>
        <a href="https://expressjs.com/" className="flex px-6 gap-2" target="_">
          <div className=" max-w-fit  py-1">Express.js</div>
          <motion.img
            initial={{ rotate: 0 }}
            animate={{ rotate: 360 }}
            transition={{ duration: 5, repeat: Infinity, ease: "linear" }}
            src={expressLogo}
            height={24}
            width={24}
          />
        </a>
        <a
          href="https://workers.cloudflare.com/"
          className="flex px-6 gap-2"
          target="_"
        >
          <div className=" max-w-fit  py-1">CloudFlare Workers </div>
          <motion.img
            initial={{ rotate: 0 }}
            animate={{ rotate: 360 }}
            transition={{ duration: 5, repeat: Infinity, ease: "linear" }}
            src={cloudflareLogo}
            height={24}
            width={24}
          />
        </a>
        <a href="https://www.npmjs.com/" className="flex px-6 gap-2" target="_">
          <div className=" max-w-fit  py-1">NPM </div>
          <motion.img
            initial={{ rotate: 0 }}
            animate={{ rotate: 360 }}
            transition={{ duration: 5, repeat: Infinity, ease: "linear" }}
            src={npmLogo}
            height={24}
            width={24}
          />
        </a>
      </div>
    </FramerWrapper>
  );
}

export default Technologies;
