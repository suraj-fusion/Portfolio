import profile from "../../public/profile.jpeg";
import downloadIcon from "../../public/download.svg";
import linkedInLogo from "../../public/linkedInLogo.svg";
import githubLogo from "../../public/githubLogo.svg";
import xLogo from "../../public/xLogo.svg";
import leetcodeLogo from "../../public/leetcodeLogo.svg";
import FramerWrapper from "./FramerWrapper";
function Introduction() {

  function handleResumeDownload(){
     const link = document.createElement("a");
    link.href = "/Resume (8).pdf";   
    link.download = "Suraj_Raj_Resume.pdf"; 
    link.click();
  }
  return ( <FramerWrapper>
    <div className="grid sm:grid-cols-2 grid-cols-1 gap-8">
      <div className="flex flex-col gap-4 order-2 sm:order-1 items-center sm:items-start">
        <div className="font-bold text-4xl mt-8 text-blue-200">hi suraj here 👋</div>
        <div> 24-year-old software developer from India 🇮🇳.</div>
        <div className="sm:max-w-[90%] ">
         I enjoy building full-stack web applications, solving data structures and algorithms puzzles, and tackling challenging coding problems. When I’m not immersed in creating web solutions, you’ll often find me perfecting my coffee brewing skills to keep my programming energy high. I’m passionate about exploring the cutting edge of web development and am always eager to learn and share new technological insights.
        </div>
        <div className="flex gap-7 items-center w-full"> 
          
            <div className="flex">
              <button onClick={handleResumeDownload} class="inline-flex items-center whitespace-nowrap min-w-fit rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 border border-input bg-background shadow-sm hover:bg-gray-700 hover:text-accent-foreground h-9 px-4 py-2 gap-1">
                <span class="font-semibold">Resume</span>
                <img src={downloadIcon} />
              </button>
            </div>
         
          <a href="https://www.linkedin.com/in/suraj-raj-9401b7200/" target="_">
            <img src={linkedInLogo} width={20} height={20} />
          </a>
          <a href="https://github.com/suraj-fusion" target="_">
            <img src={githubLogo} width={20} height={20} />
          </a>
          <a href="https://x.com/Suraj46476457/" target="_">
            <img src={xLogo} width={20} height={20} />
          </a>
           <a href="https://takeuforward.org/plus/profile/suraj-fusion" target="_">
            <img src={leetcodeLogo} width={20} height={20} />
          </a>
        </div>
      </div>
      <div className="flex flex-col order-1 sm:order-2 items-center sm:items-start justify-center">
        <img src={profile} height={300} width={300} className="rounded " />
      </div>
    </div>
    </FramerWrapper>
  );
}

export default Introduction;
