import css from "./ImageCard.module.css";

export const ImageCard = ({ item, itemClick }) => {
  return (
    <li className={css.li}>
      <img
        onClick={() => itemClick(item)}
        className={css.img}
        src={item.urls.small}
        alt={item.alt_description}
      />
    </li>
  );
};
export default ImageCard;
