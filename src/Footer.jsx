import Button from "./components/Button";
import SocialLinks from "./components/SocialLinks";

export default function Footer () {
    return (
      <footer className="bg-slate-950 w-full py-10 px-8 text-grayish-blue">
        <div className="max-w-5xl mx-auto block my-3 lg:flex justify-between">
          <div className="block lg:flex justify-between gap-30">
            <div className="flex flex-col justify-between gap-5 lg:gap-0 items-center lg:items-start">
              <a href="#">
                <img src="/logo.svg" alt="Easybank" />
              </a>
              <SocialLinks />
            </div>
            <ul className="grid grid-cols-1 lg:grid-cols-2 gap-3 text-center lg:text-left py-8 lg:py-0 text-sm">
              <li>
                <a href="#" className="hover:text-lime-green">
                  About Us
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-lime-green">
                  Contact
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-lime-green">
                  Blog
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-lime-green">
                  Careers
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-lime-green">
                  Support
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-lime-green">
                  Privacy Policy
                </a>
              </li>
            </ul>
          </div>
          <div className="flex flex-col justify-between gap-5 lg:gap-0 text-center lg:text-right">
            <Button
              text="Request Invite"
              className="bg-gradient-to-r from-lime-green to-bright-cyan px-8 py-3 text-sm/6 rounded-full shadow cursor-pointer text-light-grayish-blue font-semibold transition hover:opacity-80 max-sm:mx-auto lg:ml-auto"
            />

            <p className="text-sm">© Easybank. All Rights Reserved</p>
          </div>
        </div>
      </footer>
    );
}