import { useEffect } from "react";
import axios from "axios";
import { ImageCard } from "../ImageCard/ImageCard";
import css from "./ImageGallary.module.css";

export const ImageGallery = ({ items }) => {
  return (
    <>
      {items && items.length > 0 && (
        <ul className={css.gallery}>
          {items.map((item) => (
            <ImageCard key={item.id} item={item} />
          ))}
        </ul>
      )}
    </>
  );
};
export default ImageGallery;
