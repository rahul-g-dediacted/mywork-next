import { GrClose } from "react-icons/gr";

export function toggleMenu() {
  if (document.getElementById("filter_menu")?.classList.contains("hidden")) {
    document.getElementById("filter_menu")?.classList.remove("hidden");
    document.getElementById("filter_menu")?.classList.add("block");
  } else {
    document.getElementById("filter_menu")?.classList.remove("block");
    document.getElementById("filter_menu")?.classList.add("hidden");
  }
}

export const Filter = () => {
  return (
    <div
      id="filter_menu"
      className="hidden h-screen w-full absolute z-20 top-0 left-0  bg-white "
    >
      <div className="text-center bg-primary-500 rounded-t-xl relative">
        <h1 className="text-white font-medium py-3">Filter</h1>
        <GrClose
          onClick={() => toggleMenu()}
          className="cursor-pointer text-2xl absolute top-3 text-white left-3"
        />
      </div>
      <div className="p-6">
        <p>Location</p>
        <input
          type="text"
          placeholder="Type and select"
          className="p-2 rounded-lg border w-11/12"
        />
        <p className="mt-6">Price Above</p>
        <select className="w-11/12 p-2 mt-1 rounded cursor-pointer">
          <option value="12$ /hr">12$ /hr</option>
          <option value="15$ /hr">15$ /hr</option>
          <option value="14$ /hr">14$ /hr</option>
        </select>
        <p className="mt-6">Duration</p>
        <div className="flex items-center justify-start mt-2">
          <input type="number" className="border w-14 p-2 rounded" value="1" />
          <p className="ml-2">Day(s)</p>
        </div>
        <div className="flex flex-col items-center mx-auto mt-4 w-2/4">
          <button
            onClick={() => toggleMenu()}
            className="w-full font-semibold text-sm bg-gradient-to-r from-primary-400 to-primary-500 hover:to-primary-400 text-white py-2 px-8 rounded cursor-pointer uppercase"
          >
            CLEAR Filters
          </button>

          <button
            onClick={() => toggleMenu()}
            className="w-full  text-sm mt-2 bg-white hover:to-primary-400 border py-2 px-8 rounded cursor-pointer uppercase"
          >
            Apply Filters
          </button>
        </div>
      </div>
    </div>
  );
};
