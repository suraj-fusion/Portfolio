import extensionImage from "../../public/extension.png"
import usePopCornImage from "../../public/usePopCorn.png"
import blogFusionImage from "../../public/blogFusion.png"
import bloodAssitImage from "../../public/bloodAssit.png"

function Projects() {
  return (
    <>
      <div className="font-bold text-4xl mt-8 mb-6 text-blue-200">
        my projects.👨‍💻
      </div>
      <article className="mt-8 flex flex-col gap-8 pb-16">
        <section className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          <div className="rounded-xl border bg-card text-card-foreground shadow flex flex-col">
            <div className="flex flex-col space-y-1.5 p-6">
              <a href="https://chromewebstore.google.com/detail/tubequiz/nhodeopkbjdjckmagfiggdagijjbleen">
                <img
                  alt="Tube Quiz"
                  loading="lazy"
                  width={500}
                  height={300}
                  src={extensionImage}
                  style={{ color: "transparent" }}
                />
              </a>
            </div>
            <div className="p-6 pt-0 flex flex-col gap-2">
              <h3 className="font-semibold leading-none tracking-tight">
                Tube Quiz
              </h3>
              <div className="prose max-w-full text-pretty font-sans text-xs text-muted-foreground dark:prose-invert">
                <p>
                  Developed a  web extension that helps YouTube learners reinforce their understanding by generating multiple-choice questions (MCQs) from video content for self-assessment
                </p>
              </div>
            </div>
            <div className="p-6 pt-0 flex h-full flex-col items-start justify-between gap-4">
              <div className="mt-2 flex flex-wrap gap-1">
                {[
                  "Javascript",
                  "HTML",
                  "CSS",
                ].map((tech) => (
                  <div
                    key={tech}
                    className="inline-flex items-center rounded-md border font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80 px-1 py-0 text-[10px]"
                  >
                    {tech}
                  </div>
                ))}
              </div>
              <div className="flex flex-row flex-wrap items-start gap-1">
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://github.com/suraj-fusion/TubeQuiz"
                >
                  <div className="items-center rounded-md border font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-primary text-primary-foreground shadow hover:bg-primary/80 flex gap-2 px-2 py-1 text-[10px]">
                    {/* GitHub SVG */}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="lucide lucide-github size-3"
                    >
                      <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path>
                      <path d="M9 18c-4.51 2-5-2-7-2"></path>
                    </svg>
                    Source
                  </div>
                </a>
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://chromewebstore.google.com/detail/tubequiz/nhodeopkbjdjckmagfiggdagijjbleen"
                >
                  <div className="items-center rounded-md border font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-primary text-primary-foreground shadow hover:bg-primary/80 flex gap-2 px-2 py-1 text-[10px]">
                    {/* Globe SVG */}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="lucide lucide-globe size-3"
                    >
                      <circle cx="12" cy="12" r="10"></circle>
                      <path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"></path>
                      <path d="M2 12h20"></path>
                    </svg>
                    Website
                  </div>
                </a>
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://x.com/Suraj46476457/status/1932460644894458163"
                >
                  <div className="items-center rounded-md border font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-primary text-primary-foreground shadow hover:bg-primary/80 flex gap-2 px-2 py-1 text-[10px]">
                    {/* YouTube SVG */}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="lucide lucide-youtube size-3"
                    >
                      <path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17"></path>
                      <path d="m10 15 5-3-5-3z"></path>
                    </svg>
                    Demo
                  </div>
                </a>
              </div>
            </div>
          </div>

        
          <div className="rounded-xl border bg-card text-card-foreground shadow flex flex-col">
            <div className="flex flex-col space-y-1.5 p-6">
              <a href="https://use-pop-corn-six.vercel.app/">
                <img
                  alt="usePopCorn"
                  loading="lazy"
                  width={500}
                  height={300}
                  decoding="async"
                  className="h-40 w-full object-cover object-top"
                  src={usePopCornImage}
             
                  style={{ color: "transparent" }}
                />
              </a>
            </div>
            <div className="p-6 pt-0 flex flex-col gap-2">
              <h3 className="font-semibold leading-none tracking-tight">
                usePopCorn
              </h3>
              <div className="prose max-w-full text-pretty font-sans text-xs text-muted-foreground dark:prose-invert">
                <p>
                Built a dynamic and interactive frontend web application that enables users to seamlessly search for movies, view detailed information, rate them based on their preferences, and curate a 'watched' list 
                </p>
              </div>
            </div>
            <div className="p-6 pt-0 flex h-full flex-col items-start justify-between gap-4">
              <div className="mt-2 flex flex-wrap gap-1">
                {[
                  "ReactJS",
                  "Javascript",
                  "CSS"
                ].map((tech) => (
                  <div
                    key={tech}
                    className="inline-flex items-center rounded-md border font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80 px-1 py-0 text-[10px]"
                  >
                    {tech}
                  </div>
                ))}
              </div>
              <div className="flex flex-row flex-wrap items-start gap-1">
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://github.com/suraj-fusion/usePopCorn"
                >
                  <div className="items-center rounded-md border font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-primary text-primary-foreground shadow hover:bg-primary/80 flex gap-2 px-2 py-1 text-[10px]">
                    {/* GitHub SVG */}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="lucide lucide-github size-3"
                    >
                      <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path>
                      <path d="M9 18c-4.51 2-5-2-7-2"></path>
                    </svg>
                    Source
                  </div>
                </a>
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://use-pop-corn-six.vercel.app/"
                >
                  <div className="items-center rounded-md border font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-primary text-primary-foreground shadow hover:bg-primary/80 flex gap-2 px-2 py-1 text-[10px]">
                    {/* Globe SVG */}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="lucide lucide-globe size-3"
                    >
                      <circle cx="12" cy="12" r="10"></circle>
                      <path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"></path>
                      <path d="M2 12h20"></path>
                    </svg>
                    Website
                  </div>
                </a>
              </div>
            </div>
          </div>

        
          <div className="rounded-xl border bg-card text-card-foreground shadow flex flex-col">
            <div className="flex flex-col space-y-1.5 p-6">
              <a href="https://daily-journal-two.vercel.app/">
                <img
                  alt="Blog Fusion"
                  loading="lazy"
                  width={500}
                  height={300}
                  decoding="async"
                  className="h-40 w-full object-cover object-top"
                  src={blogFusionImage}
                  style={{ color: "transparent" }}
                />
              </a>
            </div>
            <div className="p-6 pt-0 flex flex-col gap-2">
              <h3 className="font-semibold leading-none tracking-tight">
                Blog Fusion
              </h3>
              <div className="prose max-w-full text-pretty font-sans text-xs text-muted-foreground dark:prose-invert">
                <p>
                 Developed A web app to publish my blogs.All data gets stored on MongoDB Atlas
                </p>
              </div>
            </div>
            <div className="p-6 pt-0 flex h-full flex-col items-start justify-between gap-4">
              <div className="mt-2 flex flex-wrap gap-1">
                {["HTML", "CSS", "Javascript", "Node.js","Express.js","MongoDB"].map(
                  (tech) => (
                    <div
                      key={tech}
                      className="inline-flex items-center rounded-md border font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80 px-1 py-0 text-[10px]"
                    >
                      {tech}
                    </div>
                  )
                )}
              </div>
              <div className="flex flex-row flex-wrap items-start gap-1">
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://github.com/suraj-fusion/BlogFusion"
                >
                  <div className="items-center rounded-md border font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-primary text-primary-foreground shadow hover:bg-primary/80 flex gap-2 px-2 py-1 text-[10px]">
                    {/* GitHub SVG */}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="lucide lucide-github size-3"
                    >
                      <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path>
                      <path d="M9 18c-4.51 2-5-2-7-2"></path>
                    </svg>
                    Source
                  </div>
                </a>
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://daily-journal-two.vercel.app/"
                >
                  <div className="items-center rounded-md border font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-primary text-primary-foreground shadow hover:bg-primary/80 flex gap-2 px-2 py-1 text-[10px]">
                    {/* Globe SVG */}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="lucide lucide-globe size-3"
                    >
                      <circle cx="12" cy="12" r="10"></circle>
                      <path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"></path>
                      <path d="M2 12h20"></path>
                    </svg>
                    Website
                  </div>
                </a>
              </div>
            </div>
          </div>
          <div className="rounded-xl border bg-card text-card-foreground shadow flex flex-col">
            <div className="flex flex-col space-y-1.5 p-6">
              <a href="https://github.com/suraj-fusion/BloodAssit">
                <img
                  alt="usePopCorn"
                  loading="lazy"
                  width={500}
                  height={300}
                  decoding="async"
                  className="h-40 w-full object-cover object-top"
                  src={bloodAssitImage}
             
                  style={{ color: "transparent" }}
                />
              </a>
            </div>
            <div className="p-6 pt-0 flex flex-col gap-2">
              <h3 className="font-semibold leading-none tracking-tight">
                Blood Assit
              </h3>
              <div className="prose max-w-full text-pretty font-sans text-xs text-muted-foreground dark:prose-invert">
                <p>
                An E blood Bank web appp where interested donors can register to donate blood Users can search with respect to city and blood type they require
                </p>
              </div>
            </div>
            <div className="p-6 pt-0 flex h-full flex-col items-start justify-between gap-4">
              <div className="mt-2 flex flex-wrap gap-1">
                {[
                  "HTML",
                  "CSS",
                  "python",
                  "Flask"
                ].map((tech) => (
                  <div
                    key={tech}
                    className="inline-flex items-center rounded-md border font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80 px-1 py-0 text-[10px]"
                  >
                    {tech}
                  </div>
                ))}
              </div>
              <div className="flex flex-row flex-wrap items-start gap-1">
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://github.com/suraj-fusion/BloodAssit"
                >
                  <div className="items-center rounded-md border font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-primary text-primary-foreground shadow hover:bg-primary/80 flex gap-2 px-2 py-1 text-[10px]">
                    {/* GitHub SVG */}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="lucide lucide-github size-3"
                    >
                      <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path>
                      <path d="M9 18c-4.51 2-5-2-7-2"></path>
                    </svg>
                    Source
                  </div>
                </a>
                 <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://www.youtube.com/watch?v=5elPDl3QQmk"
                >
                  <div className="items-center rounded-md border font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-primary text-primary-foreground shadow hover:bg-primary/80 flex gap-2 px-2 py-1 text-[10px]">
                    {/* YouTube SVG */}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="lucide lucide-youtube size-3"
                    >
                      <path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17"></path>
                      <path d="m10 15 5-3-5-3z"></path>
                    </svg>
                    Demo
                  </div>
                </a>
               
              </div>
            </div>
          </div>
        </section>
      </article>
    </>
  );
}

export default Projects;
