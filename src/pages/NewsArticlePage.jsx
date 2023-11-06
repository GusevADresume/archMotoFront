import React from "react";
import { useState, useEffect } from "react";
import { useSingleNews } from "../store/store";

export default function NewsArticlePage() {
  const [readiness, setReadiness] = useState(true);
  const [textContent, setTextContent] = useState("");
  const [headerContent, setHeaderContent] = useState("");
  const [elementsArrang, setElementsArrang] = useState("");
  const { content, load } = useSingleNews((state) => ({
    content: state.content,
    load: state.loading,
  }));

  useEffect(() => {
    let firstIndex = 0;
    let secondIndex = 0;
    let elementsArrang = [];
    if (!load) {
      const data = content.elementsArrang.slice(1, -1);
      for (let i in data) {
        if (data[i] == "[") {
          firstIndex = i;
        }
        if (data[i] == "]") {
          secondIndex = i;
        }
        if (i > secondIndex) {
          let arr = data.slice(firstIndex, secondIndex);
          arr = arr.replace("[", "");
          arr = arr.replace('"', "");
          arr = arr.replace('"', "");
          arr = arr.replace(" ", "");
          arr = arr.split(",");
          if (arr.length > 1) {
            arr[1] = Number(arr[1]);
            elementsArrang.push(arr);
          }
        }
      }
      if (elementsArrang.length > 0) {
        setHeaderContent(content.header.split(","));
        setTextContent(content.text.split("^"));
        setElementsArrang(elementsArrang);
        setReadiness(false);
      }
    }
  }, [load]);

  return (
    <>
      {!readiness ? (
        <div>
          <div>
            <img className="ArticlemainImg" src={content.mainImg}></img>
          </div>
          <div className="Article">
            <div className="ArcticleHeader">
              <div className="ArcticleHeaderLeftSide">
                <div className="ArticleHeaderOwner">{headerContent[0]}</div>
                <div className="ArticleHeaderOwnername">{headerContent[1]}</div>
              </div>
              <div className="ArcticleHeaderRightSide">
                <div className="ArcticleHeaderBy">{headerContent[2]}</div>
                <div className="ArcticleHeaderDate">{headerContent[3]}</div>
              </div>
            </div>
            {elementsArrang.length > 0
              ? elementsArrang.map((element, index) => {
                  if (element[0] == "text") {
                    return (
                      <p className="Articlepar">{textContent[element[1]]}</p>
                    );
                  } else {
                    return (
                      <img
                        className="ArticleImg"
                        src={content.imgs[element[1]].url}
                      ></img>
                    );
                  }
                })
              : ""}
          </div>
        </div>
      ) : (
        ""
      )}
    </>
  );
}
