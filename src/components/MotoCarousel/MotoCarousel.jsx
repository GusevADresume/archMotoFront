import React from "react";
import { useState, useEffect } from "react";
import { useMotoCarousel } from "../../store/store";
import uuid from 'react-uuid';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function MotoCarousel() {
  const [monoSliderIndex, setSliderIndex] = useState(0);
  const [renderStatus, setRenderStatus] = useState(false);
  const [content, setContent] = useState("");
  const { imagesFetch, images1, imagesLoad } = useMotoCarousel((state) => ({
    imagesFetch: state.fetchBlock,
    images1: state.content,
    imagesLoad: state.loading,
  }));

  useEffect(() => {
    imagesFetch();
  }, []);

  useEffect(() => {
    let imgsLists = {};
    let content = [];
    for (let i in images1) {
      if (imgsLists[images1[i].group_id]) {
        if (images1[i].prev_img) {
          imgsLists[images1[i].group_id].unshift(images1[i].url);
        } else {
          imgsLists[images1[i].group_id].push(images1[i].url);
        }
      } else {
        imgsLists[images1[i].group_id] = [images1[i].url];
      }
    }
    for (let i in imgsLists) {
      content.push(imgsLists[i]);
    }
    if (content.length > 0) {
      setContent(content);
      setRenderStatus(true);
    }
  }, [images1]);

  const settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 5,
    slidesToScroll: 1,
    slide: "row",
    swipeToSlide: true,
    touchThreshold: 10,
  };
  const monoSettings = {
    arrows: true,
    dots: true,
  };

  const monoSliderChangeHandler = (e) => {
    setSliderIndex(e.target.id);
  };
  return (
    <>
      {renderStatus ? (
        <>
          <div className="container">
            <Slider {...settings} key={uuid()}>
              {content.map((element, index) => {
                return (
                  <div key={uuid()}>
                    <img
                      key={uuid()}
                      onClick={monoSliderChangeHandler}
                      id={index}
                      className="SliderPhoto"
                      src={element[0]}
                    />
                  </div>
                );
              })}
            </Slider>
          </div>
          <div className="MonoSlider">
            <Slider {...monoSettings} key={uuid()}>
              {content[monoSliderIndex].map((element, index) => {
                return (
                  <div key={uuid()}>
                    <img
                      key={uuid()}
                      className="MonoSliderPhotoWhite"
                      src={element}
                    />
                  </div>
                );
              })}
            </Slider>
          </div>
        </>
      ) : (
        ""
      )}
    </>
  );
}
