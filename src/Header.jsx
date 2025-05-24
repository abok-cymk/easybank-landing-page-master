import Navbar from "./components/Navbar";

export default function Header() {
  return (
    <header className="relative h-screen">
      <Navbar />
      <div className="flex lg:gap-10
       flex-col-reverse lg:flex-row justify-between max-w-6xl mx-auto px-6 pt-10 lg:pt-24">
        {/* Text Content */}
        <div className="w-full lg:w-1/2 text-center lg:text-left z-10 lg:py-24 lg:pl-8">
          <h1 className="text-3xl lg:text-5xl text-dark-blue mb-6 leading-tight font-400 max-w-md">
            Next generation digital banking
          </h1>
          <p className="text-grayish-blue mb-8 text-base">
            Take your financial life online. Your Easybank account will be a
            one-stop-shop for spending, saving, budgeting, investing, and much
            more.
          </p>
          <button
            type="button"
            className="bg-gradient-to-r from-lime-green to-bright-cyan px-8 py-3 text-sm/6 rounded-full shadow cursor-pointer text-light-grayish-blue font-semibold transition hover:opacity-80"
          >
            Request Invite
          </button>
        </div>
        {/* Image Content */}
        <div className="w-full lg:w-1/2 relative flex justify-center lg:justify-end mb-10 lg:mb-0">
          {/* Background SVG */}
          <img
            src="/bg-intro-mobile.svg"
            alt=""
            className="block lg:hidden absolute top-0 left-1/2 -translate-x-1/2 w-[120%] max-w-none pointer-events-none select-none"
            aria-hidden="true"
          />
          <img
            src="/bg-intro-desktop.svg"
            alt=""
            className="hidden lg:block absolute -top-32 -right-1/2 w-[900px] max-w-none pointer-events-none select-none"
            aria-hidden="true"
          />
          {/* Mockup Image */}
          <img
            src="/image-mockups.png"
            alt="App mockups"
            className="relative z-10 w-[90%] max-w-[400px] lg:max-w-none lg:w-[600px] lg:-right-40 lg:-top-30"
            draggable="false"
          />
        </div>
      </div>
    </header>
  );
}
