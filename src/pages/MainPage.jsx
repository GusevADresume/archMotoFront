import React from "react";
import Video from "../components/Video";
import TitleAndPhoto from "../components/TitleAndPhoto";
import MotorcuclesComp from "../components/MotorcuclesComp";
import ImageTextBlock from "../components/ImageTextBlock";
import ImageWallpaperText from "../components/ImageWallpaperText";
import ImageTextBlockRevers from "../components/ImageTextBlockRevers";

import Homepage_Video from "../assets/video/ARCH_Homepage_Video_6.mp4";
import MainPageFirstPhoto from "../assets/images/MainPageFirstPhoto.jpg";
import MainPageBlockWallpaper1 from "../assets/images/MainPageBlockWallpaper1.png";
import EngineWallpaper from "../assets/images/enginwallpaper.png";
import MainPageWallpaperImg from "../assets/images/wallpaperMainPage.png";
import MainPageApparel from "../assets/images/MainPageApparel.png";

export default function MainPage() {
  const mainVideo = "https://youtu.be/R_-BNDXyMg0";
  const firstBlock = [
    MainPageBlockWallpaper1,
    [
      "BESPOKE",
      "There is a unique feeling walking up to your machine, one that you co-designed and have entrusted us to curate. We offer a truly bespoke experience by working closely with our owners to tailor the aesthetics and ergonomics of their motorcycle. Our goal is to build the most immersive, compelling and bespoke motorcycle for riding enthusiasts.",
      "BESPOKE",
    ],
    "White",
  ];
  const secondBlock = [
    EngineWallpaper,
    [
      "ABOUT ARCH",
      "At ARCH Motorcycle we employ creativity and innovation to challenge conventional motorcycle design. We are driven by passion and a relentless commitment to develop the next chapter in the story of American motorcycling. ",
      "ABOUT",
    ],
    "Black",
  ];

  const apparel = [
    MainPageApparel,
    [
      "APPAREL",
      "Check out the complete line of genuine ARCH Motorcycle apparel and merchandise.",
      "https://apparel.archmotorcycle.com",
    ],
    "Black",
  ];

  const wallpaperBlock = [
    MainPageWallpaperImg,
    [
      "MADE IN CALIFORNIA",
      "ARCH Motorcycle planted roots in California long before the company was founded. The temperate climate is ideal for year-round riding and its diverse topography welcomes a sense of adventure, making it the perfect place for development. ",
    ],
  ];

  return (
    <>
    <div className="MainPage">
      <Video preview={Homepage_Video} url={mainVideo} />
      <TitleAndPhoto Photo={MainPageFirstPhoto} />
      <MotorcuclesComp />
      <ImageTextBlock content={firstBlock} />
      <div className="BlockHeader">
        <h1>“The next chapter in American motorcycling.”</h1>
      </div>
      <ImageTextBlock content={secondBlock} />
      <ImageWallpaperText content={wallpaperBlock} />
      <ImageTextBlockRevers content={apparel} />
    </div>
    </>
  );
}

