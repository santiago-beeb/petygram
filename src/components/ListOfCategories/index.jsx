import axios from "axios";
import { useEffect, useState } from "react";
import { Category } from "../Category";
import { List, Item } from "./styles.js";

const useCategoriesData = () => {
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    const data = async () => {
      try {
        const categoriesFromAxios = await axios.get(
          "https://petgram-api-santiago-alzate.vercel.app/categories"
        );
        setCategories(categoriesFromAxios.data);
        setLoading(false);
      } catch (error) {
        console.error(error);
      }
    };
    data();
  }, []);

  return { categories, loading };
};

export const ListOfCategories = () => {
  const { categories, loading } = useCategoriesData();
  const [showFixed, setShowFixed] = useState(false);

  useEffect(() => {
    const onScroll = (e) => {
      const newShow = window.scrollY > 200;
      showFixed !== newShow && setShowFixed(newShow);
    };

    document.addEventListener("scroll", onScroll);

    return () => document.removeEventListener("scroll", onScroll);
  }, [showFixed]);

  const renderList = (fixed) => (
    <List fixed={fixed}>
      {loading ? (
        <Item key={loading}>
          <Category />
        </Item>
      ) : (
        categories?.map((category) => (
          <Item key={category.id}>
            <Category {...category} path={`/pet/${category.id}`} />
          </Item>
        ))
      )}
    </List>
  );

  return (
    <>
      {renderList()}
      {showFixed && renderList(true)}
    </>
  );
};
