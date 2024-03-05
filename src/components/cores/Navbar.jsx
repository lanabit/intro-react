import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <>
      <div className="fixed w-[100%] mx-3 p-10 justify-between flex flex-row">
        <div className="font-syne flex items-center bg-neutral-950 text-neutral-50 p-7 h-[50px] rounded-lg">
          <Link to="/">
            <span className="font-medium text-2xl tracking-wider">Wulan Tsabita</span>
          </Link>
        </div>
        <div className="flex flex-row">
          <Link to="/contact-me">
            <span className="font-syne flex justify-between items-center bg-neutral-950 text-neutral-50 p-5 h-[50px] rounded-lg mx-8">Contact Me</span>
          </Link>
          <Link to="/works">
            <span className="font-syne flex justify-between items-center bg-neutral-950 text-neutral-50 p-5 h-[50px] rounded-lg">Works</span>
          </Link>
        </div>
      </div>
    </>
  );
}
