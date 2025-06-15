import React from 'react';
import FramerWrapper from './FramerWrapper';

function Contact() {
  const handleSubmit = (event) => {
    event.preventDefault(); // Prevent the default form submission

    const name = event.target.name.value;
    const email = event.target.email.value;
    const message = event.target.message.value;

    const subject = encodeURIComponent(`Message from ${name}`);
    const body = encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`);
  const mailtoLink = `mailto:surajrajgp@gmail.com?subject=${subject}&body=${body}`;

    window.location.href = mailtoLink;
  };

  return (
    <FramerWrapper>
      <div className="font-bold text-4xl mt-8 mb-6 text-blue-200">
        contact me.🌐
      </div>

      <main className="grow">
        <article className="mt-8 flex flex-col gap-8 pb-16">

          <form onSubmit={handleSubmit}> {/* Add onSubmit handler */}
            <div className="grid grid-cols-1 gap-2 sm:grid-cols-2">
              <div className="h-16">
                <input
                  className="flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-sm shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50"
                  id="name"
                  placeholder="Name"
                  autoComplete="given-name"
                  type="text"
                  name="name"
                />
              </div>
              <div className="h-16">
                <input
                  className="flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-sm shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50"
                  id="email"
                  placeholder="Email"
                  autoComplete="email"
                  type="email"
                  name="email"
                />
              </div>
              <div className="h-32 sm:col-span-2">
                <textarea
                  className="flex min-h-[60px] w-full rounded-md border border-input bg-transparent px-3 py-2 text-sm shadow-sm placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 resize-none"
                  rows={4}
                  placeholder="Leave feedback about the site, career opportunities or just to say hello etc."
                  autoComplete="Message"
                  name="message"
                ></textarea>
              </div>
            </div>
            <div className="mt-2">
              <button
                className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none bg-primary text-primary-foreground shadow hover:bg-primary/90 h-9 px-4 py-2 w-full disabled:opacity-50"
                type="submit" // Keep as type="submit" for form handling
              >
                <div className="flex items-center">
                  <span>Send Message</span>
                  <svg
                    width="15"
                    height="15"
                    viewBox="0 0 15 15"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="ml-2"
                  >
                    <path
                      d="M1.20308 1.04312C1.00481 0.954998 0.772341 1.0048 0.627577 1.16641C0.482813 1.32802 0.458794 1.56455 0.568117 1.75196L3.92115 7.50002L0.568117 13.2481C0.458794 13.4355 0.482813 13.672 0.627577 13.8336C0.772341 13.9952 1.00481 14.045 1.20308 13.9569L14.7031 7.95693C14.8836 7.87668 15 7.69762 15 7.50002C15 7.30243 14.8836 7.12337 14.7031 7.04312L1.20308 1.04312ZM4.84553 7.10002L2.21234 2.586L13.2689 7.50002L2.21234 12.414L4.84552 7.90002H9C9.22092 7.90002 9.4 7.72094 9.4 7.50002C9.4 7.27911 9.22092 7.10002 9 7.10002H4.84553Z"
                      fill="currentColor"
                      fillRule="evenodd"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                </div>
              </button>
              
            </div>
          </form>
        </article>
      </main>
    </FramerWrapper>
  );
}

export default Contact;