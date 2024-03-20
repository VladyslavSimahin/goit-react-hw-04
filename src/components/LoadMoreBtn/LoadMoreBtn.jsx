import css from "./LoadMoreBtn.module.css";

export const LoadMore = ({ morePhoto }) => {
  return (
    <button onClick={morePhoto} className={css.morebutton}>
      <p>Load more</p>
    </button>
  );
};
export default LoadMore;
