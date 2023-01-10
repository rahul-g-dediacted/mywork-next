export function toggleMenu() {
  if (document.getElementById("filter_menu")?.classList.contains("hidden")) {
    document.getElementById("filter_menu")?.classList.remove("hidden");
    document.getElementById("overlay__background")?.classList.remove("hidden");
    document.getElementById("filter_menu")?.classList.add("block");
    document.getElementById("overlay__background")?.classList.add("block");
  } else {
    document.getElementById("filter_menu")?.classList.remove("block");
    document.getElementById("overlay__background")?.classList.remove("block");
    document.getElementById("filter_menu")?.classList.add("hidden");
    document.getElementById("overlay__background")?.classList.add("hidden");
  }
}

// export const Filter = () => {
  export default function Filter (){

  return (
    <div
      id="filter_menu"
      className="hidden absolute z-20 top-[55px] right-0 w-[300px] bg-white p-6 shadow"
    >
      <p>Location</p>
      <select className="w-full p-2 mt-1 rounded cursor-pointer">
        <option value="">Type and select</option>
        <option value="12$ /hr">Egypt</option>
        <option value="15$ /hr">USA</option>
        <option value="14$ /hr">GERMANY</option>
      </select>
      <p className="mt-6">Price Above</p>
      <select className="w-full p-2 mt-1 rounded cursor-pointer">
        <option value="12$ /hr">12$ /hr</option>
        <option value="15$ /hr">15$ /hr</option>
        <option value="14$ /hr">14$ /hr</option>
      </select>
      <p className="mt-6">Duration</p>
      <div className="flex items-center justify-start mt-2">
        <input type="number" className="border w-14 p-2 rounded" value="1" />
        <p className="ml-2">Day(s)</p>
      </div>
      <div className="flex flex-col items-center mt-4">
        <button
          onClick={() => toggleMenu()}
          className="font-semibold text-sm bg-gradient-to-r from-primary-400 to-primary-500 hover:to-primary-400 text-white py-2 px-8 rounded cursor-pointer uppercase"
        >
          Apply to job
        </button>

        <button
          onClick={() => toggleMenu()}
          className=" text-sm mt-2 bg-white hover:to-primary-400 border py-2 px-8 rounded cursor-pointer uppercase"
        >
          Apply Filters
        </button>
      </div>
    </div>
  );
};
