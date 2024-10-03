import { appleImg, bagImg, searchImg } from "../utils";
import { navLists } from "../constants";

const Navbar = () => {
  return (
    <>
      <header className="w-full py-5 px-5 sm:px-10 flex justify-between items-center">
        <nav className="flex w-full screen-max-width">
          <img src={appleImg} alt="Apple" width={14} height={18} srcset="" />
          <div className="flex flex-1 justify-center max-sm:hidden">
            {navLists.map((nav, i) => (
              <div
                className=" px-5 cursor-pointer text-gray hover:text-white transition-all"
                key={i}
              >
                {nav}
              </div>
            ))}
          </div>
          <div className="flex gap-7 items-baseline max-sm:justify-end max-sm:flex-1">
            <img
              src={searchImg}
              alt="search"
              width={18}
              height={18}
              srcset=""
            />
            <img src={bagImg} alt="bag" width={18} height={18} srcset="" />
          </div>
        </nav>
      </header>
    </>
  );
};

export default Navbar;
