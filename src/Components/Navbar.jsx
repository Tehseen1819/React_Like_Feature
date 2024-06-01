import React from "react";

const Navbar = ({ songData }) => {
  return (
    <div className="flex justify-between p-4 ml-10 mr-10  items-center">
      <h2 className="text-lg text-orange-600 font-semibold ">Orange</h2>
      <div className="flex gap-2 text-white  font-semibold bg-orange-600 p-2 rounded-md">
        <h2>Favourites</h2>
        <h3>
          {songData.filter((item) => {
            return item.added;
          }).length}
        </h3>
      </div>
    </div>
  );
};

export default Navbar;
