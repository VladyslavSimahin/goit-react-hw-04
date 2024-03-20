import css from "./ImageCard.module.css";

export const ImageCard = ({ item, itemClick }) => {
  return (
    <li className={css.li}>
      <div onClick={() => itemClick(item)}>
        <img
          className={css.img}
          src={item.urls.small}
          alt={item.alt_description}
        />
      </div>
    </li>
  );
};
export default ImageCard;
