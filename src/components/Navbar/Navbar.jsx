import { IoMdSearch } from "react-icons/io";
import Logo from "../../assets/logo.png";
import { FaCaretDown, FaCartShopping } from "react-icons/fa6";
import DarkMode from "../DarkMode";

const Menu = [
  {
    id: 1,
    name: "Home",
    link: "/#",
  },

  {
    id: 2,
    name: "Top Rated",
    link: "/#services",
  },

  {
    id: 3,
    name: "Kids Wear",
    link: "/#s",
  },

  {
    id: 4,
    name: "Electronics",
    link: "/#",
  },
];


const Dropdownlink=[
    {
        id:1,
        name:"Trending Products",
        link:'/#'
    },
    {
        id:2,
        name:"Best Selling",
        link:'/#'
    },

    {
        id:3,
        name:"Top Rated",
        link:'/#'
    },

    

]
function Navbar() {
  return (
    <div className=" shadow-md bg-white dark:bg-gray-900 dark:text-white duration-200 relative ">
      {/* upper Navbar  */}
      <div className="bg-primary/40 py-2">
        <div className="container flex justify-between items-center">
          <div>
            <a href="" className="font-bold text-2xl sm:text-3xl flex gap-2">
              <img src={Logo} alt="" className="w-10 uppercase" />
              Shopsy
            </a>
          </div>
          {/* search bar and other  */}
          <div className="flex justify-between items-center gap-4">
            <div className="relative group hidden sm:block">
              <input
                type="text"
                placeholder="Search"
                className="w-[200px] sm:w-[200px] group-hover:w-[300px] transition-all duration-300 rounded-full border border-gray-300 px-2 py-1 focus:oultine-none focus:border focus:border-primary  dark:border-gray-500 dark:bg-gray-800 "
              />
              <IoMdSearch className=" text-gray-500 group-hover:text-primary absolute top-1/2 -translate-y-1/2 right-3" />
            </div>
            <button
              onClick={() => alert("Ordering not available yet")}
              className=" bg-gradient-to-r from-primary to-secondary transition-all duration-200 text-white py-1 px-4 rounded-full flex items-center gap-3 group"
            >
              <span className=" group-hover:block hidden transition-all duration-200">
                Order
              </span>
              <FaCartShopping className=" text-xl text-white drop-shadow-sm cursor-pointer" />
            </button>
            {/* dark button switch  */}
            <div>
              <DarkMode />
            </div>
          </div>
        </div>
      </div>

      {/* lower Navbar  */}
      <div className="flex  justify-center">
        <ul className="hidden sm:flex gap-4 items-center">
          {Menu.map((data) => (
            <li key={data.id}>
              <a
                className="inline-block px-4 hover:text-primary duration-200"
                href={data.link}
              >
                {data.name}
              </a>
            </li>
          ))}

          {/* simple drop down  */}
          <li className="group relative cursor-pointer ">
            <a href="#" className=" flex items-center gap-[2px] py-2 ">
              Trending Products
              <span>
                <FaCaretDown className=" transition-all duration-200 group-hover:rotate-180" />
              </span>
            </a>

            <div className="absolute z-[9999] hidden group-hover:block w-[150px] rounded-md bg-white p-2 text-black shadow-md ">
              <ul>
                {Dropdownlink.map((data)=>(
                    <li key={data.id}>
                        <a className="inline-block w-full rounded-md p-2 hover:bg-primary/20" href={data.link}>{data.name}</a>
                    </li>
                ))}
                </ul>  
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
