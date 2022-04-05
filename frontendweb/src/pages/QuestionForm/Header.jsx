import React from "react";

function Header() {
  return (
    <div className="header">
      <div className="header_info">
      <button className="rounded-full">Save Changes</button>
      <h1 class="text-3xl font-bold underline">
    Hello world!
  </h1>
      </div>
      <div className="header_search">
      <button className="rounded-full">Save Changes</button>
        <input type="text" name="search" />
      </div>
      <div className="header_right">
      <button className="rounded-full">Save Changes</button>

      </div>
    </div>
  );
}

export default Header;
