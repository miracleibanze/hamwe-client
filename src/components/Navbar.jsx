import { useContext, useState } from "react";
import {
  angleDownSvg,
  checkSvg,
  globeSvg,
  handShake,
  nameLogo,
} from "../assets";
import { AppContext } from "./AppContext";
import MenuSvg from "../assets/svgs/MenuSvg";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();
  const { en, setEn } = useContext(AppContext);
  const [chooseLang, setChooseLang] = useState(false);
  const [menu, setMenu] = useState(false);
  const handleLanguage = (text) => {
    setEn(text === "true");
    setChooseLang(false);
    setMenu(false);
  };

  return (
    <div className="sticky top-0 w-full flex-between-hor bg-white h-[4rem] shadow-md px-4 z-[999]">
      <img
        src={nameLogo}
        alt="logoName"
        height={300}
        width={1100}
        className="h-12 w-auto"
        onClick={() => navigate("/")}
      />
      <div
        className={`md:flex-center-hor gap-3 ${
          menu
            ? "max-md:absolute max-md:bg-white max-md:left-0 max-md:right-0 max-md:top-full max-md:p-4 max-md:flex max-md:flex-col max-md:pt-12 max-md:gap-4 max-md:h-screen z-[50] max-md:slide-in overflow-hidden"
            : "hidden"
        }`}
      >
        <label
          htmlFor="language" // Links the label to the select
          className="md:border border-blue-400 p-2 relative md:h-12 flex items-center md:flex-row flex-col h-max hover:bg-zinc-200 w-full"
        >
          <span
            className="md:flex-center-hor flex-between-hor max-md:w-full gap-2"
            onClick={() => setChooseLang(!chooseLang)}
          >
            <span className="flex-center-hor gap-2">
              <img src={globeSvg} alt="globe" className="w-5 aspect-square" />
              {en ? "Choose language" : "Hitamo ururimi"}
            </span>
            <img src={angleDownSvg} className="w-4 h-4" />
          </span>
          {chooseLang && (
            <div className="absolute right-0 left-0 top-full flex-center-both z-[50] translate-y-1 px-2 py-4 bg-white list">
              <span onClick={() => handleLanguage("true")}>
                {en ? (
                  <img src={checkSvg} alt="check" className="w-5" />
                ) : (
                  <span className="w-5" />
                )}
                <span className="flex-1">English</span>
              </span>
              <span onClick={() => handleLanguage("false")}>
                {!en ? (
                  <img src={checkSvg} alt="check" className="w-5 h-5" />
                ) : (
                  <span className="max-w-5" />
                )}
                <span className="flex-1">Kinyarwanda</span>
              </span>
            </div>
          )}
        </label>

        <img
          src={handShake}
          alt="for sale banner"
          width={800}
          height={700}
          className="w-full h-auto object-right object-fit md:hidden"
        />

        <button
          className="md:px-6 px-3 bg-blue-500 button text-white body-1 flex items-center flex-nowrap min-w-max h-12 text-center"
          onClick={() => navigate("/browse")}
        >
          {en ? "Get Started" : "Tangira"}
        </button>
      </div>
      <MenuSvg
        openNavigation={menu}
        onClick={() => setMenu(!menu)}
        className="md:hidden"
      />
    </div>
  );
};

export default Navbar;
