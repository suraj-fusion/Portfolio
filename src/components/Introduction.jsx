import profile from "../../public/profile.png"
import downloadIcon from "../../public/download.svg"
function Introduction() {
  return (
    <div className="flex">
      <div className="flex flex-col gap-4">
        <div className="font-bold text-4xl mt-8">hi suraj here 👋</div>
        <div> 24-year-old software developer from India 🇮🇳.</div>
        <div className="max-w-[90%]">
          I like to develop full-stack web applications, solve DSA puzzles , and
          dive deep into coding challenges. When I'm not crafting web
          wonders,you'll find me brewing the perfect cup of coffee to fuel my
          next coding adventure. Passionate about pushing the boundaries of web
          development and always excited to learn and share new tech insights.
        </div>
        <a href="https://drive.google.com/file/d/1CN6WY-e46TUH4JziNKcV7xAKvDBNf1LX/view?usp=sharing" target="_">
          <div className="flex">
            <button class="inline-flex items-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 border border-input bg-background shadow-sm hover:bg-gray-700 hover:text-accent-foreground h-9 px-4 py-2 gap-1">
              <span class="font-semibold">Resume</span>
              <img src={downloadIcon} />
            </button>
          </div>
        </a>
      </div>
      <div className="flex flex-col justify-end">
        <img
          src={profile}
          height={1000}
          width={1100}
          className="rounded "
        />
      </div>
    </div>
  );
}

export default Introduction;
