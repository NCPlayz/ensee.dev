// create a react component that shows an image in the center
// and a button to click to change the image

import React, { useState } from "react";
import "./Image.css";

const images: string[] = [
  "https://cdn.discordapp.com/avatars/69198249432449024/04cb6ce4f2dd3788b8b738d37745c645.png?size=1024",
  "https://cdn.discordapp.com/avatars/121678432504512512/4aa155196579d7de5453aef235f7adec.png?size=1024",
  "https://cdn.discordapp.com/avatars/209270029290569740/6e64e28a66bcf17d5bcd6e59aeecdc38.png?size=1024",
  "https://cdn.discordapp.com/avatars/184385816066392064/52f844269c02e3b3ff8528fe4546dc76.png?size=1024",
  "https://cdn.discordapp.com/avatars/80088516616269824/39ec2502115271c24eb969018fcd8b55.png?size=1024",
  "https://cdn.discordapp.com/avatars/155863164544614402/5239945f1480c3384f1c5cf2452d465c.png?size=1024",
  "https://cdn.discordapp.com/avatars/318731657861398531/b1f433ffe3962b89fdc796a0ba272e87.png?size=1024",
  "https://cdn.discordapp.com/avatars/106429844627169280/a_5981d65209d78b8bf28fc47fb1bb9336.gif?size=1024",
];

export default function Image() {
  let [index, setIndex] = useState(0);

  return (
    <>
      <div className="imageDiv">
        {images.map((v, i) => {
          let className = "mainImage";
          if (i !== index) {
            className += " hidden";
          }
          return (
            <img
              key={i}
              className={className}
              src={v}
              alt="avatar"
              height={256}
              width={256}
            />
          );
        })}
      </div>
      <div>
        <button
          onClick={() => setIndex(index === images.length - 1 ? 0 : index + 1)}
        >
          Change Image
        </button>
      </div>
    </>
  );
}
