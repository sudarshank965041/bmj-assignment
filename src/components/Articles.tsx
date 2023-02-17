import React, { useEffect, useState } from "react";
import Article from "./Article";

export default function Articles() {
  const [articles, setArticles] = useState([]);
  const fetchArticles = async () => {
    try {
      const resp = await fetch(
        "https://api.openalex.org/works?filter=institutions.id:I71178462&sort=publication_date:desc&per_page=10"
      );
      const response = await resp.json();
      setArticles(response.results);
    } catch (error) {}
  };
  useEffect(() => {
    fetchArticles();
  }, []);

  return (
    <div>
      <div className="p-3">
        <h3 className="text-3xl font-bold">
          BMJ Journals Exercise demo: Building a channel page using open Alex
          API
        </h3>
      </div>
      <div>
        {articles.map((article: any) => (
          <Article key={article.id} article={article} />
        ))}
      </div>
    </div>
  );
}
