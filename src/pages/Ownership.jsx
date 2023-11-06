import React from "react";
import { useEffect } from "react";
import Video from "../components/Video";
import ImageWallpaperText from "../components/ImageWallpaperText";
import TextAndImageCarouselSmalle from "../components/TextAndImgCarousel/TextAndImageCarouselSmalle";
import TextAndImgCarousel from "../components/TextAndImgCarousel/TextAndImgCarousel";
import SmallGalery from "../components/SmallGalery/SmallGalery";
import { useTextAndImgCarousel } from "../store/store";

import Owner1 from "../assets/video/ARCH_Ownership_Video_1_alt.mp4";
import Owner2 from "../assets/video/ARCH_OWNERS_EVENT_1.mp4";
import wallpaper1 from "../assets/images/ownership/OwnershipWallpaper.jpg";
import wallpaper2 from "../assets/images/ownership/OwnershipWallpaper2.jpg";
import ownerSlide1 from "../assets/images/ownership/PURCHASE JOURNEY/owner-slide-1.jpg";
import ownerSlide2 from "../assets/images/ownership/PURCHASE JOURNEY/owner-slide-2.jpg";
import ownerSlide3 from "../assets/images/ownership/PURCHASE JOURNEY/owner-slide-3.jpg";
import ownerSlide4 from "../assets/images/ownership/PURCHASE JOURNEY/img_own_05_2.jpg";

import a1 from "../assets/images/ownership/ARCH SOCIAL/img_own_01-copy.jpg";
import a2 from "../assets/images/ownership/ARCH SOCIAL/img_own_03-copy-1.jpg";
import a3 from "../assets/images/ownership/ARCH SOCIAL/img_own_20-copy.jpg";
import a4 from "../assets/images/ownership/ARCH SOCIAL/img_own_21-copy.jpg";
import a5 from "../assets/images/ownership/ARCH SOCIAL/img_own_22-copy.jpg";
import a6 from "../assets/images/ownership/ARCH SOCIAL/img_own_24-copy.jpg";
import a7 from "../assets/images/ownership/ARCH SOCIAL/img_own_25-copy.jpg";
import a8 from "../assets/images/ownership/ARCH SOCIAL/img_own_26-copy.jpg";
import a9 from "../assets/images/ownership/ARCH SOCIAL/img_own_28-copy.jpg";
import a10 from "../assets/images/ownership/ARCH SOCIAL/img_own_29-copy.jpg";
import a11 from "../assets/images/ownership/ARCH SOCIAL/img_own_30-copy.jpg";
import a12 from "../assets/images/ownership/ARCH SOCIAL/img_own_31-copy.jpg";
import a13 from "../assets/images/ownership/ARCH SOCIAL/img_own_32-copy.jpg";
import a14 from "../assets/images/ownership/ARCH SOCIAL/img_own_33-copy.jpg";
import a15 from "../assets/images/ownership/ARCH SOCIAL/img_own_34-copy.jpg";

export default function Ownership() {
  const video1 = "https://youtu.be/N7dcRY1FOYw";
  const video2 = "https://youtu.be/Xcd_ny5RvGk";
  const { galleryContentFetch, galleryContent1, galleryContentLoad, setLoad } =
  useTextAndImgCarousel((state) => ({
    galleryContentFetch: state.fetchBlock,
    galleryContent1: state.content,
    galleryContentLoad: state.loading,
    setLoad: state.setLoad
  }));

useEffect(() => {
  galleryContentFetch("OWNERSHIP");
}, []);


  const firstWallpaperBlock = [
    wallpaper1,
    [
      "OWNERSHIP",
      "ARCH Owners are passionate individuals who appreciate attention to detail, quality craftsmanship and the camaraderie that riding an ARCH motorcycle with like-minded individuals provides.",
    ],
  ];
  const secondWallpaperBlock = [
    wallpaper2,
    [
      "EVENTS",
      "ARCH Motorcycle owners are invited to ride together in carefully curated, turn-key events known as ARCH Owners’ Experiences. These events provide the opportunity to meet with other ARCH owners while exploring unique and adventurous roads, enjoying fabulous meals, and celebrating the camaraderie of a shared passion for riding.",
    ],
  ];
  const CarouselContent = [
    "PURCHASE JOURNEY",
    [
      [
        "CLIENT RELATIONS",
        "Customer service is not a box to check. It is an immersive journey into the world of ownership that our dedicated staff takes pride in providing. From first inquiry to motorcycle delivery and beyond, the ARCH client relations team works hard to ensure a remarkable experience.",
        ownerSlide1,
      ],
      [
        "MAINTENANCE SUPPORT",
        "Our skilled technicians offer full service and maintenance support. Owners have the option to have their motorcycle serviced at our factory in Los Angeles; or, we will connect you with an approved service and maintenance location closer to home. Additionally, we can assist with shipping logistics for customers requiring transportation back to Los Angeles for servicing.",
        ownerSlide2,
      ],
      [
        "THE ARCH FAMILY",
        "We consider ARCH Owners family. Throughout the process of designing and building your motorcycle, you will have the opportunity to get to know our staff on a first-name basis. ARCH Owners also receive access to the owner-only social media platform, which is great for planning rides with other Owners, discussing upcoming events or catching up on the latest news from ARCH Motorcycle. We are committed to creating unique relationships with our customers throughout the journey.",
        ownerSlide3,
      ],
      [
        "OWNER'S CASE",
        "Each KRGT-1 owner receives a personalized owners' case that includes an identification plate with manufacture date, serial number, owner's name, a dedicated tool kit, a master ignition key and an upholstered panel that matches the motorcycle seat. A complete owners' book that celebrates your design selections, build process and studio photography of your ARCH Motorcycle is also incorporated. Other ARCH models include similar owner assets.",
        ownerSlide4,
      ],
    ],
  ];

  const smallGaleryContent = [
    "ARCH SOCIAL",
    "Our owner-only social media platform enhances the ARCH community. Owners frequently connect here to chat about experiences, local rides, upcoming events and more.",
    [a1, a2, a3, a4, a5, a6, a7, a8, a9, a10, a11, a12, a13, a14, a15],
  ];

  return (
    <div className="Ownership">
      <Video preview={Owner1} url={video1} />
      <ImageWallpaperText content={firstWallpaperBlock} color={"White"} />
      <div className="WhiteBlock">
      {!galleryContentLoad ? (
        window.innerWidth <= 980 ? (
          <TextAndImageCarouselSmalle content={galleryContent1} />
        ) : (
          <TextAndImgCarousel content={galleryContent1} />
        )
      ) : (
        ""
      )}
        <h1 className="OwnerShipHeaderCarousel">
          “We are passionate about providing an exceptional Ownership
          experience.”
        </h1>
      </div>
      <ImageWallpaperText
        content={secondWallpaperBlock}
        color={"White"}
        position={"WallpaperRigth"}
      />
      <SmallGalery content={smallGaleryContent}/>
      <Video preview={Owner2} url={video2} />
    </div>
  );
}
