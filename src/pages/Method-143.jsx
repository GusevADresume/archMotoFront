import React from "react";
import { useEffect } from "react";
import Video from "../components/Video";
import ImageWallpaperText from "../components/ImageWallpaperText";
import BigCarousel from "../components/BigCarousel/BigCarousel";
import HeaderAndText from "../components/HeaderAndText";
import PhotoAndText from "../components/PhotoAndText";
import KeySpec from "../components/KeySpec";
import SmallGalery from "../components/SmallGalery/SmallGalery";
import Tailored from "../components/Tailored";
import {
  useTextAndImgCarousel,
  useBigCarousel,
  useKeySpec,
} from "../store/store";

import Wallpaper from "../assets/images/method143/method143.jpg";
import LogoMethod from "../assets/images/method143/method_logo_white_35h.png";
import slide1 from "../assets/images/method143/carousel/ARCH-METHOD-143-slide-1.jpg";
import slide2 from "../assets/images/method143/carousel/ARCH-METHOD-143-slide-2.jpg";
import slide3 from "../assets/images/method143/carousel/ARCH-METHOD-143-slide-3.jpg";
import imgBlock from "../assets/images/method143/img_meth_21_2.jpg";
import motorImg from "../assets/images/method143/meth_eng_opt_1.jpg";
import Gallery1 from "../assets/images/method143/gallery/meth_gallery_1_feature.jpg";
import Gallery2 from "../assets/images/method143/gallery/meth_gallery_2_D.jpg";
import Gallery3 from "../assets/images/method143/gallery/meth_gallery_4_B.jpg";
import Gallery4 from "../assets/images/method143/gallery/meth_gallery_4_feature_1.jpg"

import prev from "../assets/video/ARCH_Method_143_Video_1.mp4";

export default function Method143() {

const { bigCContentFetch, bigCContent, bigCContentLoad } = useBigCarousel(
  (state) => ({
    bigCContentFetch: state.fetchBlock,
    bigCContent: state.content,
    bigCContentLoad: state.loading,
  })
);

const { keySpecFetch, keySpec, keySpecLoad } = useKeySpec((state) => ({
  keySpecFetch: state.fetchBlock,
  keySpec: state.content,
  keySpecLoad: state.loading,
}));

useEffect(() => {
  bigCContentFetch("METHOD-143");
  keySpecFetch("METHOD-143");
}, []);


  const video = ["https://youtu.be/2jmkSTY6haI", prev];
  const WallpaperBlock = [
    Wallpaper,
    [
      "ADVANCED DESIGN",
      "The ARCH Method 143 is the ultimate production motorcycle. Created to realize an ambition of what could be achieved in motorcycle design, and to offer the opportunity for ownership of a motorcycle normally unavailable to the public, a concept… A concept led by the design idea of layers and materials including carbon fiber, aluminum and fine leather. ",
    ],
    [LogoMethod],
  ];
  const imagesSlide = [slide1, slide2, slide3];
  const header = [
    "“The Method 143 concept was created to push the limits of what could be achieved in motorcycle design.”",
    "",
  ];
  const imageAndText = [
    imgBlock,
    "photoTblack",
    [
      "LIMITED PRODUCTION",
      "Limited to 23 units worldwide, each Method 143 will be assembled by our dedicated staff in our Los Angeles, California facility.",
    ],
    "Black",
  ];

  const keySpecBlock = [
    motorImg,
    {
      "Displacement (cc)": "2343",
      "Dry Weight (lbs.)": "532",
      "Torque (ftlb @ RPM)": "151",
      "Tank Capacity (Gallons US)": "4.2",
    },
  ];
  const gallery = ["", "", [Gallery1, Gallery2, Gallery3, Gallery4]];

  return (
    <div className="Method143">
      <Video url={video[0]} preview={video[1]} />
      <ImageWallpaperText content={WallpaperBlock} color={"White"} />
      {!bigCContentLoad ? <BigCarousel content={bigCContent} /> : ""}
      <HeaderAndText content={header} />
      <PhotoAndText content={imageAndText} />
      {!keySpecLoad ? <KeySpec content={[motorImg,keySpec]} color={"specBlack"} /> : ""}
      <SmallGalery content={gallery} size={"bigImagesGallery"} />
      <Tailored color={"specBlack"}/>
    </div>
  );
}
