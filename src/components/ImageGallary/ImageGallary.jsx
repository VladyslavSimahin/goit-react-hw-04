import { ImageCard } from "../ImageCard/ImageCard";

export const ImageGallary = () => {
  return (
    <ul>
      {/* Набір елементів списку із зображеннями */}
      <li>
        <div>
          <ImageCard />
        </div>
      </li>
    </ul>
  );
};
