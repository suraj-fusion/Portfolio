import profile from "../../public/profile.png";
import downloadIcon from "../../public/download.svg";
import linkedInLogo from "../../public/linkedInLogo.svg";
import githubLogo from "../../public/githubLogo.svg";
import xLogo from "../../public/xLogo.svg";
import leetcodeLogo from "../../public/leetcodeLogo.svg";
function Introduction() {
  return (
    <div className="flex">
      <div className="flex flex-col gap-4">
        <div className="font-bold text-4xl mt-8 text-blue-200">hi suraj here 👋</div>
        <div> 24-year-old software developer from India 🇮🇳.</div>
        <div className="max-w-[90%]">
         I enjoy building full-stack web applications, solving data structures and algorithms puzzles, and tackling challenging coding problems. When I’m not immersed in creating web solutions, you’ll often find me perfecting my coffee brewing skills to keep my programming energy high. I’m passionate about exploring the cutting edge of web development and am always eager to learn and share new technological insights.
        </div>
        <div className="flex w-full gap-7 items-center"> 
          <a
            href="https://drive.google.com/file/d/1CN6WY-e46TUH4JziNKcV7xAKvDBNf1LX/view?usp=sharing"
            target="_"
          >
            <div className="flex">
              <button class="inline-flex items-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 border border-input bg-background shadow-sm hover:bg-gray-700 hover:text-accent-foreground h-9 px-4 py-2 gap-1">
                <span class="font-semibold">Resume</span>
                <img src={downloadIcon} />
              </button>
            </div>
          </a>
          <a href="https://www.linkedin.com/in/suraj-raj-9401b7200/" target="_">
            <img src={linkedInLogo} width={20} height={20} />
          </a>
          <a href="https://github.com/suraj-fusion" target="_">
            <img src={githubLogo} width={20} height={20} />
          </a>
          <a href="https://x.com/Suraj46476457/" target="_">
            <img src={xLogo} width={20} height={20} />
          </a>
           <a href="https://leetcode.com/u/suraj-fusion/" target="_">
            <img src={leetcodeLogo} width={20} height={20} />
          </a>
        </div>
      </div>
      <div className="flex flex-col justify-center">
        <img src={profile} height={1000} width={1100} className="rounded " />
      </div>
    </div>
  );
}

export default Introduction;
