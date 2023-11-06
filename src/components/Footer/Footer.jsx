import React from "react";
import FooterBlock from "./FooterBlock";

import facrbookIcon from "../../assets/images/footerSvg/facebook.svg";
import instaIcon from "../../assets/images/footerSvg/instagram.svg";
import twitterIcon from "../../assets/images/footerSvg/twitter.svg";
import youTubekIcon from "../../assets/images/footerSvg/youtube.svg";

export default function Footer() {
  const content = [
    { CONTACT: { "Make an inquiry": "/contact/" } },
    {
      SOCIAL: {
        instaIcon: [
          "https://www.instagram.com/archmotorcycle/?hl=en",
          instaIcon,
        ],
        facrbookIcon: [
          "https://www.facebook.com/archmotorcycle/",
          facrbookIcon,
        ],
        youTubekIcon: [
          "https://www.youtube.com/channel/UCkmbqgfpgnFxKhbgel8Nz4w",
          youTubekIcon,
        ],
        twitterIcon: ["https://twitter.com/archmotorcycle/", twitterIcon],
      },
    },
    {
      LEGAL: {
        "Privacy | Cookies": "/privacy-policy/",
      },
    },
    { APPAREL: { "ARCH Apparel": "https://apparel.archmotorcycle.com" } },
    {
      CAREERS: {
        "Job Opportunities":
          "https://archmotorcycle.zohorecruit.com/jobs/Careers",
      },
    },
  ];

  return (
    <div className="Footer">
      <div className="FooterBlocksString">
        <FooterBlock blocks={content} />
      </div>
      <div className="AllRights">
        <p>© 2021 - 2023 ARCH Motorcycle Company LLC. All rights reserved.</p>
      </div>
    </div>
  );
}
