import React, { useState, useEffect } from "react";
import { SearchBar } from "./SearchBar/SearchBar";
import { ImageGallery } from "./ImageGallary/ImageGallary";
import { Loader } from "./Loader/Loader";
import { Error } from "./ErrorMassage/ErrorMassage";
import { fetchItems } from "./api";
import { LoadMore } from "./LoadMoreBtn/LoadMoreBtn";
import { Toaster } from "react-hot-toast";
import { OpenModal } from "./ImageModal/ImageModal";

export const App = () => {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [page, setPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedItem, setSelectedItem] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const accessKey = "qtjjq751w9p3YJz69Iq2isXfNtxnbkYar5CNnOgOijs";

  useEffect(() => {
    const webUrl = `https://api.unsplash.com/search/photos?query=${searchTerm}&page=${page}&client_id=${accessKey}`;
    async function fetchItems() {
      try {
        setLoading(true);
        const response = await axios.get(webUrl);
        setItems((prevItem) =>
          page === 1
            ? response.data.results
            : [...prevItem, ...response.data.results]
        );
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    }
    if (searchTerm) {
      fetchItems();
    }
  }, [searchTerm, page, accessKey]);

  const handleSearch = async (topic) => {
    setLoading(true);
    try {
      const data = await fetchItems(topic, page, accessKey);
      setItems(data);
    } catch (error) {
      setError(true);
    } finally {
      setLoading(false);
    }
  };
  const morePhoto = () => {
    setPage((prevPage) => {
      console.log("Current page:", prevPage);

      return prevPage + 1;
    });
  };
  const handleItemClick = (item) => {
    setSelectedItem(item);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };
  return (
    <div>
      <h1>Phonebook</h1>
      <SearchBar onSearch={handleSearch} />
      <Toaster />
      {loading && <Loader />}
      {error && <Error />}
      {items.length > 0 && (
        <ImageGallery items={items} itemClick={handleItemClick} />
      )}
      {items.length > 0 && <LoadMore morePhoto={morePhoto} />}
      <OpenModal
        item={selectedItem}
        isOpen={isModalOpen}
        onRequestClose={closeModal}
      />
    </div>
  );
};

export default App;
