import reverieLogo from "../../public/reverieLogo.png"


function Experiences() {
  return (
    <>
      <div className="font-bold text-4xl mt-8 mb-6 text-blue-200">
        my work experiences.💻
      </div>
      <div className="rounded-xl border bg-card text-card-foreground shadow">
        <div className="p-0">
          <ul className="ml-10 border-l">
            <li className="relative ml-10 py-4">
              <a
                target="_blank"
                className="absolute -left-16 top-4 flex items-center justify-center rounded-full bg-white"
                href="https://reverieinc.com/"
              >
                <span className="relative flex shrink-0 overflow-hidden rounded-full size-12 border">
                  <span className="flex h-full w-full items-center justify-center rounded-full bg-muted">
                    <img src={reverieLogo} />
                  </span>
                </span>
              </a>
              <div className="flex flex-1 flex-col justify-start gap-1">
                <time className="text-xs text-muted-foreground">
                  <span>Jul 2024</span>
                  <span> - </span>
                  <span>Present</span>
                </time>
                <h2 className="font-semibold leading-none">
                  Reverie Language Technologies
                </h2>
                <p className="text-sm text-muted-foreground font-bold ">
                  Product Engineer
                </p>
                <ul className="ml-4 list-outside list-disc">
                  <li className="prose pr-8 text-sm dark:prose-invert font-semibold">
                    Tech Stack: NextJs,ReactJs, TypeScript, NodeJs, ExpressJs,
                    MongoDB,PostgreSQL
                  </li>
                  <li className="prose pr-8 text-sm dark:prose-invert">
                    Working on a live project called Indocord, a web application
                    for building multilingual AI powered chatbots and voicebots
                  </li>
                  <li className="prose pr-8 text-sm dark:prose-invert">
                    Fixed 50+ frontend bugs, improving application stability and
                    performance
                  </li>
                  <li className="prose pr-8 text-sm dark:prose-invert">
                    Helped setup authentication flow in keycloak and created a
                    custom otp authenticator provider
                  </li>
                  <li className="prose pr-8 text-sm dark:prose-invert">
                    Streamlined frontend-backend integration with Moleculer JS
                  </li>
                </ul>
              </div>
            </li>
            <li className="relative ml-10 py-4">
              <a
                target="_blank"
                className="absolute -left-16 top-4 flex items-center justify-center rounded-full bg-white"
                href="https://www.sportzzbook.com"
              >
                <span className="relative flex shrink-0 overflow-hidden rounded-full size-12 border">
                  <span className="flex h-full w-full items-center justify-center rounded-full bg-muted">
                      <img src={reverieLogo} />
                  </span>
                </span>
              </a>
              <div className="flex flex-1 flex-col justify-start gap-1">
                <time className="text-xs text-muted-foreground">
                  <span>Sep 2023</span>
                  <span> - </span>
                  <span>June 2024</span>
                </time>
                <h2 className="font-semibold leading-none">
                  Reverie Language Technologies
                </h2>
                <p className="text-sm text-muted-foreground font-bold">
                  Product Engineering Intern
                </p>
                <ul className="ml-4 list-outside list-disc">
                  <li className="prose pr-8 text-sm dark:prose-invert font-semibold">
                    Tech Stack: JavaScript, ReactJs, NodeJs,MongoDB,
                  </li>
                  <li className="prose pr-8 text-sm dark:prose-invert">
                    Contributed to the initial development of Indocord, focusing
                    on frontend components in React JS.
                  </li>
                  <li className="prose pr-8 text-sm dark:prose-invert">
                    Implemented foundational features and assisted with
                    debugging to improve application stability.
                  </li>
                </ul>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default Experiences;
