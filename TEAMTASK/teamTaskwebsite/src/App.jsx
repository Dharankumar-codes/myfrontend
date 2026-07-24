import { useState, useEffect, useMemo } from "react";
import Navbar from "./components/Navbar";
import SearchBar from "./components/SearchBar";
import CategoryFilter from "./components/CategoryFilter";
import NewsCard from "./components/NewsCard";
import Footer from "./components/Footer";
import newsData from "./data/newsData";

function App() {
  const [news] = useState(newsData);

  const [search, setSearch] = useState("");

  const [category, setCategory] = useState("All");

  useEffect(() => {
    const reviews = JSON.parse(localStorage.getItem("reviews")) || [];
    console.log(reviews);
  }, []);

  const filteredNews = useMemo(() => {
    return news.filter((item) => {
      const searchMatch = item.title
        .toLowerCase()
        .includes(search.toLowerCase());

      const categoryMatch =
        category === "All" || item.category === category;

      return searchMatch && categoryMatch;
    });
  }, [news, search, category]);

  return (
    <>
      <Navbar />

      <SearchBar
        search={search}
        setSearch={setSearch}
      />

      <CategoryFilter
        category={category}
        setCategory={setCategory}
      />

      <div className="news-container">
        {filteredNews.map((item) => (
          <NewsCard key={item.id} item={item} />
        ))}
      </div>

      <Footer />
    </>
  );
}

export default App;