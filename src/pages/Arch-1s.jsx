import React from "react";
import { useEffect } from "react";
import Video from "../components/Video";
import ImageWallpaperText from "../components/ImageWallpaperText";
import BigCarousel from "../components/BigCarousel/BigCarousel";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import TextAndImageCarouselSmalle from "../components/TextAndImgCarousel/TextAndImageCarouselSmalle";
import TextAndImgCarousel from "../components/TextAndImgCarousel/TextAndImgCarousel";
import PhotoAndText from "../components/PhotoAndText";
import KeySpec from "../components/KeySpec";
import SmallGalery from "../components/SmallGalery/SmallGalery";
import Tailored from "../components/Tailored";
import HeaderAndText from "../components/HeaderAndText";
import Specifications from "../components/Specifications";
import {
  useTextAndImgCarousel,
  useBigCarousel,
  useFullSpec,
  useKeySpec,
} from "../store/store";

import Arch1SPrew from "../assets/video/ARCH-1S-Video_1.mp4";
import Wallpaper from "../assets/images/1s/Wallapaer1S.png";
import Logo1S from "../assets/images/1s/1s_CLEANFINAL-269x300.png";

import imgBlock from "../assets/images/1s/img_1S_11-copy.jpg";
import motorImg from "../assets/images/1s/img_1S_52-copy2.png";
import Gallery1 from "../assets/images/1s/1sGallery/Blue_Carbon1.jpg";
import Gallery2 from "../assets/images/1s/1sGallery/Gray_Carbon2.jpg";
import Gallery3 from "../assets/images/1s/1sGallery/Blue_Carbon3.jpg";
import Gallery4 from "../assets/images/1s/1sGallery/Blue_Carbon4.jpg";

export default function Arch1s() {
  const { galleryContentFetch, galleryContent1, galleryContentLoad, setLoad } =
    useTextAndImgCarousel((state) => ({
      galleryContentFetch: state.fetchBlock,
      galleryContent1: state.content,
      galleryContentLoad: state.loading,
      setLoad: state.setLoad,
    }));

  const { bigCContentFetch, bigCContent, bigCContentLoad } = useBigCarousel(
    (state) => ({
      bigCContentFetch: state.fetchBlock,
      bigCContent: state.content,
      bigCContentLoad: state.loading,
    })
  );

  const { fullSpecFetch, fullSpec, fullSpecLoad } = useFullSpec((state) => ({
    fullSpecFetch: state.fetchBlock,
    fullSpec: state.content,
    fullSpecLoad: state.loading,
  }));
  const { keySpecFetch, keySpec, keySpecLoad } = useKeySpec((state) => ({
    keySpecFetch: state.fetchBlock,
    keySpec: state.content,
    keySpecLoad: state.loading,
  }));

  useEffect(() => {
    galleryContentFetch("1S");
    bigCContentFetch("1S");
    fullSpecFetch("1S");
    keySpecFetch("1S");
  }, []);

  const WallpaperBlock = [
    Wallpaper,
    [
      "RACE INSPIRED",
      "The ARCH 1s draws influence from both cruiser and street sport riding to create a motorcycle that defies industry categorization. The 1s features the first production single-sided billet aluminum swingarm from ARCH. Rear/mid-mounted foot controls provide a more aggressive riding position.",
    ],
    [Logo1S],
  ];

  const imageAndText = [
    imgBlock,
    "photoTwhite",
    [
      "SPORT FORWARD",
      "The sport-influenced 1s provides a more aggressive riding position allowing for smoother transitions and harder cornering. Utilizing proprietary CNC-machined aluminum components and extensive use of carbon fiber throughout, the result is a race-inspired machine that redefines the Sport Cruiser.",
    ],
    "",
  ];

  const video = "https://youtu.be/Oc2bC0SoEd0";


  const gallery = ["", "", [Gallery1, Gallery2, Gallery3, Gallery4]];
  const header = ["“Redefining the American Sport Cruiser.”", ""];

  return (
    <div className="TextAndImgCarouselWraper">
      <Video url={video} preview={Arch1SPrew} />
      <div className="Wallpaper1sWite">
        <ImageWallpaperText content={WallpaperBlock} />
      </div>
      {!bigCContentLoad ? <BigCarousel content={bigCContent} /> : ""}
      <div>
        {!galleryContentLoad ? (
          window.innerWidth <= 980 ? (
            <TextAndImageCarouselSmalle content={galleryContent1} />
          ) : (
            <TextAndImgCarousel content={galleryContent1} />
          )
        ) : (
          ""
        )}
      </div>
      <HeaderAndText content={header} />

      <PhotoAndText content={imageAndText} />
      {!keySpecLoad ? <KeySpec content={[motorImg, keySpec]} /> : ""}
      <SmallGalery content={gallery} size={"bigImagesGallery"} />
      <Tailored />
      {!fullSpecLoad ? <Specifications content={fullSpec} /> : ""}
    </div>
  );
}
