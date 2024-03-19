import css from "./ImageCard.module.css";

export const ImageCard = ({ item }) => {
  return (
    <li className={css.li}>
      <img
        className={css.img}
        src={item.urls.small}
        alt={item.alt_description}
      />
    </li>
  );
};
export default ImageCard;
