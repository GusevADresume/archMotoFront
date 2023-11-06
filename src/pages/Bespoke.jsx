import React from "react";
import { useEffect } from "react";
import Video from "../components/Video";
import TextAndImgCarousel from "../components/TextAndImgCarousel/TextAndImgCarousel";
import TextAndImageCarouselSmalle from "../components/TextAndImgCarousel/TextAndImageCarouselSmalle";
import ImageWallpaperText from "../components/ImageWallpaperText";
import MotoCarousel from "../components/MotoCarousel/MotoCarousel";
import HeaderAndText from "../components/HeaderAndText";
import { useTextAndImgCarousel } from "../store/store";

//images
import bespokeFirst from "../assets/video/bespoke_silent_6sec.mp4";
import bespokeWallpaper from "../assets/images/BespokeWallpaper.jpg";

export default function Bespoke() {
  const firstVideo = ["https://youtu.be/QMtSQi0XpsQ", bespokeFirst];
  const { galleryContentFetch, galleryContent1, galleryContentLoad, setLoad } =
  useTextAndImgCarousel((state) => ({
    galleryContentFetch: state.fetchBlock,
    galleryContent1: state.content,
    galleryContentLoad: state.loading,
    setLoad: state.setLoad
  }));

useEffect(() => {
  galleryContentFetch("BESPOKE");
}, []);

  const WallpaperBlock = [bespokeWallpaper, ["", ""]];

  const headerText = [
    "PREVIOUS BUILDS",
    "Browse through ARCH 1s  &  ARCH KRGT-1 previous build galleries. Select a bike in the top row, then pan through the photos beneath.",
  ];

  return (
    <div className="Bespoke">
      <Video preview={firstVideo[1]} url={firstVideo[0]} />
      <h1 className="BespokeHeader">
        “Our goal has always been to create a riding and ownership experience
        unlike any other.”
      </h1>
      {!galleryContentLoad ? (
        window.innerWidth <= 980 ? (
          <TextAndImageCarouselSmalle content={galleryContent1} />
        ) : (
          <TextAndImgCarousel content={galleryContent1} />
        )
      ) : (
        ""
      )}
      <ImageWallpaperText content={WallpaperBlock} />
      <HeaderAndText content={headerText} />
      <MotoCarousel />
    </div>
  );
}
