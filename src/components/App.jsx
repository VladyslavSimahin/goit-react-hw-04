import React, { useState, useEffect } from "react";
import { SearchBar } from "./SearchBar/SearchBar";
import { ImageGallery } from "./ImageGallery/ImageGallery";
import { Loader } from "./Loader/Loader";
import { Error } from "./ErrorMassage/ErrorMassage";
import axios from "axios";
import { LoadMore } from "./LoadMoreBtn/LoadMoreBtn";
import toast, { Toaster } from "react-hot-toast";
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
    const fetchItems = async () => {
      try {
        setLoading(true);
        const response = await axios.get(
          "https://api.unsplash.com/search/photos",
          {
            params: {
              query: searchTerm,
              page: page,
              per_page: 12,
            },
            headers: {
              Authorization: `Client-ID ${accessKey}`,
              "Accept-Version": "v1",
            },
          }
        );
        const results = response.data.results;
        setItems((prevItems) =>
          page === 1 ? results : [...prevItems, ...results]
        );
      } catch (error) {
        setError(true);
        toast.error("Try again later");
      } finally {
        setLoading(false);
      }
    };

    if (searchTerm) {
      fetchItems();
    }
  }, [searchTerm, page, accessKey]);

  const handleSearch = (topic) => {
    setSearchTerm(topic);
    setPage(1);
    setError(false);
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
