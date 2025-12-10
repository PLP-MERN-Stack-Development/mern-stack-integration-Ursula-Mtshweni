import { createContext, useContext, useState, useEffect } from "react";
import useApi from "../lib/api";

const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const api = useApi();
  const [posts, setPosts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);

  // Fetch posts & categories
  useEffect(() => {
    const fetchData = async () => {
      try {
        const [postsRes, catRes] = await Promise.all([
          api.getPosts(),
          api.getCategories(),
        ]);
        setPosts(postsRes.data);
        setCategories(catRes.data);
      } catch (error) {
        console.error("Error loading data:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  return (
    <AppContext.Provider value={{ posts, setPosts, categories, loading }}>
      {children}
    </AppContext.Provider>
  );
};

export const useApp = () => useContext(AppContext);
