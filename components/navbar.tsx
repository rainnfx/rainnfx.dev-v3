import Image from "next/image";
import svgIcon from "../src/app/MA.svg";

const Navbar = () => {
  return (
    <header className="App-header">
      <nav className="flex items-center">
        <div className="logo">
          <a>
            <Image src={svgIcon} alt="My SVG" width={105} height={105} />
          </a>
        </div>

        <div className="ml-auto mr-14">
          <ul className="flex space-x-4 cursor-pointer">
            <li className="text-lightest-slate text-sm hover:text-light-slate transition-colors">
              <span className="text-light-slate font-mono text-sm">01. </span>
              About
            </li>
            <li className="text-lightest-slate text-sm hover:text-light-slate transition-colors">
              <span className="text-light-slate font-mono text-sm hover:text-light-slate transition-colors">
                02.{" "}
              </span>
              Projects
            </li>
            <li className="text-lightest-slate text-sm hover:text-light-slate transition-colors">
              <span className="text-light-slate font-mono text-sm hover:text-light-slate transition-colors">
                03.{" "}
              </span>
              Contact
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
