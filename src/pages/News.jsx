import React from "react";
import { useState } from "react";
import NewsPrev from "../components/NewsComponents/NewsPrev";
import { useNewsList } from "../store/store";


export default function News() {
  const { newsContentFetch, newsContent, newsContentLoad } = useNewsList(
    (state) => ({
      newsContentFetch: state.fetchBlock,
      newsContent: state.content,
      newsContentLoad: state.loading,
    })
  );

  useState(() => {
    newsContentFetch();
  }, []);

  
  return (
    <>
      <h1 className="NewsHeader">LATEST NEWS STORIES & ARTICLES</h1>
      <div className="News">
        {!newsContentLoad ? (
          <div className="NewsMainContainer">
            {newsContent.map((element, index) => {
              return <NewsPrev content={element} />;
            })}
          </div>
        ) : (
          ""
        )}
      </div>
    </>
  );
}
