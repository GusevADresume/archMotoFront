import React from "react";

export default function ImageWallpaperText({ content,position, color }) {
  return (
    <div className="ImageWallpaperText">
      <div className="Wallpaper">
        <img className="WallpaperImg" src={content[0]} alt="" />
      </div>
      <div className={`ImageWallpaperTextContent ${position}`}>
        {content[2] != null ? <img className="Wallpaper1sHeaderImg" src={content[2]} /> : ''}
        <h2 className="ImageWallpaperTextContentHeader" style={{ color: color }}>{content[1][0]}</h2>
        <h5 className="ImageWallpaperTextContentcontent" style={{ color: color }}>{content[1][1]}</h5>
      </div>
    </div>
  );
}
