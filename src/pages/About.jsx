import React from "react";
import { useEffect } from "react";
import Video from "../components/Video";
import ImageWallpaperText from "../components/ImageWallpaperText";
import PhotoAndText from "../components/PhotoAndText";
import TextAndImgCarousel from "../components/TextAndImgCarousel/TextAndImgCarousel";
import TextAndImageCarouselSmalle from "../components/TextAndImgCarousel/TextAndImageCarouselSmalle";
import { useTextAndImgCarousel } from "../store/store";


//componentsImgs
import aboutFirst from "../assets/video/abouthFirst.mp4";
import aboutSecond from "../assets/video/abouthSecond.mp4";
import wallpaperImg from "../assets/images/AboutWallpaper.png";
import aboutFirstImg from "../assets/images/aboutFirstImg.png";
import aboutSecondImg from "../assets/images/aboutSecondImg.png";
import wallpaperSecondImg from "../assets/images/AboutSecondWallaper.png";

export default function About() {
  const firstVideo = ["https://youtu.be/TAV-djtDeaQ", aboutFirst];
  const secondVideo = ["https://youtu.be/oiKUnmvac74", aboutSecond];

  const { galleryContentFetch, galleryContent1, galleryContentLoad, setLoad } =
    useTextAndImgCarousel((state) => ({
      galleryContentFetch: state.fetchBlock,
      galleryContent1: state.content,
      galleryContentLoad: state.loading,
      setLoad: state.setLoad
    }));
   
  useEffect(() => {
    galleryContentFetch("ABOUT");
  }, []);

  const wallpaperBlock = [
    wallpaperImg,
    [
      "ABOUT ARCH",
      "ARCH Motorcycle was founded in 2011 to challenge the perception of what an American motorcycle could be. Anything that compromises the ride, aesthetics, stance or function is treated as an opportunity to innovate and improve the design. ARCH owners seek more than just a machine. They are passionate individuals in search of a completely immersive riding experience. Every ARCH motorcycle is built from an obsession for innovative design, engineering excellence and dedication to the rider.",
    ],
  ];
  const firstImgBlock = [
    aboutFirstImg,
    "photoTwhite",
    [
      "",
      "Every ARCH Motorcycle is a bespoke production motorcycle.The ARCH KRGT-1, ARCH 1s and ARCH Method 143 utilize a collaborative process tailoring livery and ergonomic fit to each owner. Our clients are a part of the creative process from the beginning and work closely with our in-house designers to co-design their ARCH motorcycle.Collectively, we have logged over 100,000 development miles on a variety of roads. From collecting braking and suspension data along the twisty Angeles Crest Highway to testing comfort characteristics on PCH, or understanding acceleration loads on Southern California freeways, we incorporate our findings into making the overall riding experience better.The result is a versatile performance cruiser ready for carving the canyons or comfortably cruising long distances.  ",
    ],
    "avers",
  ];

  const secondImgBlock = [
    aboutSecondImg,
    "photoTwhite",
    [
      "ARCH DESIGN",
      "Our dedicated design team work closely with each owner in creating their personalized ARCH motorcycle. They are also responsible for defining the future of ARCH Motorcycle. From the sketch phase to 3-D modeling, the design team considers which materials to use and how to create the next generation of ARCH products.",
    ],
    "photoTreverse",
  ];

  const secondWallpaperBlock = [
    wallpaperSecondImg,
    [
      "ENGINEERING ART",
      "Engineering is the bridge connecting our design and manufacturing philosophies. We take a purposeful but artistic approach to solve engineering challenges and prevent compromising the integrity of our components. We prefer never taking the easy way out and look to find solutions that allow the manufacturing process to respect the design. We use computerized strength analysis and the most advanced 3-D modeling software to take the part from concept to reality.",
    ],
  ];

  return (
    <div className="About">
      <Video preview={firstVideo[1]} url={firstVideo[0]} />
      <div></div>
      <ImageWallpaperText
        content={wallpaperBlock}
        position={"WallpaperRigth"}
      />
      <PhotoAndText content={firstImgBlock} />
      <PhotoAndText content={secondImgBlock} />
      <ImageWallpaperText
        content={secondWallpaperBlock}
        position={"WallpaperRigth"}
        color={"White"}
      />
      {!galleryContentLoad ? 
      window.innerWidth <= 980 ? (
        <TextAndImageCarouselSmalle content={galleryContent1} />
      ) : (
        <TextAndImgCarousel content={galleryContent1} />
      )
      :''}
      
      <Video preview={secondVideo[1]} url={secondVideo[0]} />
    </div>
  );
}
