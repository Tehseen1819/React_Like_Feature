import React from "react";

const Card = ({data,index,update}) => {
  const {image,name,artist,added}=data;
  return (
    <div className=" relative w-52 bg-white rounded-md p-2 flex gap-5 pb-8 m-10">
      <div className="img h-14 w-14 rounded-md overflow-hidden bg-zinc-100">
        <img className="w-full h-full object-cover" src={image} alt="" />
      </div>
      <div className="text">
        <div className="name font-semibold text-md">{name}</div>
        <div className="artist text-sm ">{artist}</div>
      </div>
      <button onClick={()=>update(index)} className={`absolute text-sm bottom-0 left-1/2 whitespace-nowrap -translate-x-1/2 translate-y-1/2 ${added?"bg-teal-600":"bg-orange-600"} p-2 rounded-full`}>{added?"Added":"Add To Favourites"}</button>
    </div>
  );
};

export default Card;
