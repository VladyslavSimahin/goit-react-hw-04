import { ImageCard } from "../ImageCard/ImageCard";
import css from "./ImageGallary.module.css";

export const ImageGallery = ({ items, itemClick }) => {
  return (
    <>
      {items && items.length > 0 && (
        <ul className={css.gallery}>
          {items.map((item) => (
            <ImageCard key={item.id} item={item} itemClick={itemClick} />
          ))}
        </ul>
      )}
    </>
  );
};
export default ImageGallery;
