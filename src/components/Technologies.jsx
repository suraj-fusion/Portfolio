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
import Technology from "./Technology";
function Technologies() {
  return (
    <FramerWrapper>
      <div className="font-bold text-4xl mt-8 mb-6 text-blue-200">
        tech i know. ⚙
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-3 border p-2 rounded gap-6 sm:gap-8">
        <Technology
          title="Javascript"
          src={jsLogo}
          link="https://www.javascript.com"
        />
        <Technology title="React" src={reactLogo} link="https://react.dev/" />
        <Technology title="Next JS" src={nextLogo} link="https://nextjs.org/" />
        <Technology
          title="React Native"
          src={reactLogo}
          link="https://reactnative.dev/"
        />
        <Technology
          title="Mongo DB"
          src={mongoLogo}
          link="https://www.mongodb.com/"
        />
        <Technology
          title="Prisma"
          src={prismaLogo}
          link="https://www.prisma.io/"
        />
        <Technology
          title="Docker"
          src={dockerLogo}
          link="https://www.docker.com/"
        />
        <Technology
          title="PostgreSQL"
          src={postgreLogo}
          link="https://www.postgresql.org/"
        />
        <Technology
          title="MySQL"
          src={mysqlLogo}
          link="https://www.mysql.com/"
        />
        <Technology
          title="CSS"
          src={cssLogo}
          link="https://en.wikipedia.org/wiki/CSS"
        />
        <Technology
          title="Tailwind"
          src={tailwindLogo}
          link="https://tailwindcss.com/"
        />
        <Technology title="Git" src={gitLogo} link="https://git-scm.com/" />
        <Technology
          title="GitHub"
          src={githubLogo}
          link="https://github.com/"
        />
        <Technology
          title="Express.js"
          src={expressLogo}
          link="https://expressjs.com/"
        />
        <Technology
          title="Cloudflare Workers"
          src={cloudflareLogo}
          link="https://workers.cloudflare.com/"
        />
        <Technology title="NPM" src={npmLogo} link="https://www.npmjs.com/" />
      </div>
    </FramerWrapper>
  );
}

export default Technologies;
