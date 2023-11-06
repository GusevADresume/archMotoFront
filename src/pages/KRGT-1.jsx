import React from "react";
import { useEffect } from "react";
import Video from "../components/Video";
import ImageWallpaperText from "../components/ImageWallpaperText";
import BigCarousel from "../components/BigCarousel/BigCarousel";
import TextAndImageCarouselSmalle from "../components/TextAndImgCarousel/TextAndImageCarouselSmalle";
import TextAndImgCarousel from "../components/TextAndImgCarousel/TextAndImgCarousel";
import HeaderAndText from "../components/HeaderAndText";
import PhotoAndText from "../components/PhotoAndText";
import Tailored from "../components/Tailored";
import SmallGalery from "../components/SmallGalery/SmallGalery";
import KeySpec from "../components/KeySpec";
import Specifications from "../components/Specifications";
import {
  useTextAndImgCarousel,
  useBigCarousel,
  useKeySpec,
  useFullSpec,
} from "../store/store";

import videoPrewie from "../assets/video/ARCH_KRGT1_Video_6.mp4";
import wallp from "../assets/images/krgt1/krgt1.png";
import logo from "../assets/images/krgt1/krgt1-logo-300.png";

import imgKrgt1 from "../assets/images/krgt1/img_krgt1_37.jpg";

import Gallery1 from "../assets/images/krgt1/galery/img_gallery_C_2.jpg";
import Gallery2 from "../assets/images/krgt1/galery/img_gallery_F_1_1.jpg";
import Gallery3 from "../assets/images/krgt1/galery/img_gallery_F_3.jpg";
import Gallery4 from "../assets/images/krgt1/galery/img_gallery_F_4.jpg";
import motorImg from "../assets/images/krgt1/KRGT-1-engine_opt_1.jpg";

export default function KRGT() {
  const video = ["https://youtu.be/HkU8KlwJeWc", videoPrewie];

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

  const { keySpecFetch, keySpec, keySpecLoad } = useKeySpec((state) => ({
    keySpecFetch: state.fetchBlock,
    keySpec: state.content,
    keySpecLoad: state.loading,
  }));

  const { fullSpecFetch, fullSpec, fullSpecLoad } = useFullSpec((state) => ({
    fullSpecFetch: state.fetchBlock,
    fullSpec: state.content,
    fullSpecLoad: state.loading,
  }));

  useEffect(() => {
    galleryContentFetch("KRGT-1");
    bigCContentFetch("KRGT-1");
    keySpecFetch("KRGT-1");
    fullSpecFetch("KRGT-1");
  }, []);

  const wallpaperBlock = [
    wallp,
    [
      "PRESENCE IN MOTION",
      "The ARCH KRGT-1 set out to achieve a new benchmark in the performance cruiser category. Powered by an ARCH / S&S 124ci V-Twin with a distinctively aggressive profile, the KRGT-1 is equally at home cruising highways or carving canyon roads",
    ],
    [logo],
  ];

  const header = [
    "“Race-inspired handling and ride quality are paramount, that’s why we work directly with Öhlins.”",
    "",
  ];
  const imageAndText = [
    imgKrgt1,
    "photoTwhite",
    [
      "PERFORMANCE CRUISER",
      "ARCH Motorcycle was created to redefine what an American motorcycle could be. We saw an opportunity to evolve how a cruiser performed while retaining the visceral characteristics of a V-twin engine. The ARCH KRGT-1 is an American Performance Cruiser that blends long-distance range and comfort with agile handling and impressive torque, designed with the rider in mind. The ARCH Performance Architecture features a steel tube main frame with billet aluminum subframe to provide a rigid chassis structure for dynamic handling. Drivetrain isolation dampeners have been incorporated to help reduce vibration. Components are manufactured in-house starting with 1,200 pounds of billet aluminum. The end result yields approximately 120 pounds of unique components, from chassis side plates, fuel cells, and swingarm to engine covers and more. When outside products are needed, we partner with top manufacturers to create functional components that enhance the riding experience.",
    ],
    "",
  ];
  const gallery = ["", "", [Gallery1, Gallery2, Gallery3, Gallery4]];

  return (
    <div className="KRGT">
      <Video preview={video[1]} url={video[0]} />
      <ImageWallpaperText content={wallpaperBlock} />
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
      <Tailored />
      <SmallGalery size={"bigImagesGallery"} content={gallery} />
      {!keySpecLoad ? <KeySpec content={[motorImg, keySpec]} /> : ""}
      {!fullSpecLoad ? <Specifications content={fullSpec} /> : ""}
    </div>
  );
}
