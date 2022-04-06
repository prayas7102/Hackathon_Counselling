import React from "react";

function Header() {
  return (
    <div className="header">
      <div className="header_info">
        <button>nav-icons</button>
        <button>doc-icons</button>
      </div>
      <div className="header_search">
        <button className="">search</button>
        
        <label class="relative block">
  <span class="absolute inset-y-0 left-0 flex items-center pl-2">
    <svg class="h-5 w-5 fill-slate-300" viewBox="0 0 20 20"/>
  </span>
  <input class="placeholder:italic placeholder:text-slate-400 block bg-white w-full border border-slate-300 rounded-md py-2 pl-9 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm" placeholder="Search for anything..." type="text" name="search"/>
</label>
        
      </div>
      <div className="header_right">
        <button className="">AppIcon</button>
        <button className="">Avatar</button>
      </div>
    </div>
  );
}

export default Header;
