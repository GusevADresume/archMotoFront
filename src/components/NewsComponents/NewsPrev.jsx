import React from "react";
import { useNavigate } from "react-router";
import { useSingleNews } from "../../store/store";
import PrevImg from "./PrevImg";
import PrevVideo from "./PrevVideo";

export default function NewsPrev({ content }) {
  const navigate = useNavigate();
  const newsFetc = useSingleNews((state) => state.fetchBlock);
  const redirectHandler = () => {
    newsFetc(content.id)
    if (content.type == "article") {
      navigate("/Article/");
    } else {
      return navigate("/Video/");
    }
  };
  return (
    <div className="NewsPrev">
      {content["type"] == "video" ? (
        <PrevVideo callBack={redirectHandler} img={content["preview"]} />
      ) : (
        <PrevImg callBack={redirectHandler} img={content["preview"]} />
      )}
      <div className="NewsPrevTextBlock">
        <h3 className="NewsPrevHeader" onClick={redirectHandler}>
          {content["header"]}
        </h3>
        <p className="NewsPrevText">{content["text"]}</p>
        <div className="NewsPrevbutton">READ THIS</div>
      </div>
    </div>
  );
}
