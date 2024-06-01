import React, { useState } from "react";
import Navbar from "./Components/Navbar";
import Card from "./Components/Card";
const App = () => {
  const data = [
    { image: "https://yt3.googleusercontent.com/h8MD_vlyduOrZhImECz-BbpKDpwZz5lPAATasuFDerIZDz8bpmcav4Ak7TdCNFzXvc5si4GK4g=s900-c-k-c0x00ffffff-no-rj", name: "Hero", artist: "Enrique Iglesias", added: false },
    { image: "https://images.genius.com/d4bf83c5821091e56e162b7df2fa194d.1000x1000x1.jpg", name: "STAY", artist: "Justin Bieber", added: false },
    { image: "https://hips.hearstapps.com/seventeen/assets/16/07/1455637159-gettyimages-510380932.jpg", name: "PILLOWTALK", artist: "ZAYN", added: false },
    { image: "https://hips.hearstapps.com/hmg-prod/images/pchelenepambrun-resized-1576190436.jpg?crop=1.00xw:0.668xh;0,0&resize=1200:*", name: "As it Was", artist: "Harry Styles", added: false },
    { image: "https://i.scdn.co/image/ab67616d00001e02e0450ba3fd83cf9048446477", name: "Starboy", artist: "The Weeknd", added: false },
  ];
const [songData,setSong]=  useState(data);
const update=(index)=>{
  setSong((prev)=>{
    return prev.map((item,idx)=>{
      if(idx===index)
        return {...item , added:!item.added}
      return item;
    })
  })

}
  return (
    <div className="w-full min-h-screen bg-zinc-200">
      <Navbar songData={songData}/>
      <div className=" ml-10 flex flex-wrap">
        {songData.map((obj,index)=>{
          return <Card data={obj} index={index} update={update}/>
        })}
      </div>
    </div>
  );
};

export default App;
