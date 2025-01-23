import { useState, useEffect } from "react";
import axios from "axios";

// Custom hook to fetch GitHub repositories
const useFetchRepos = () => {
  const [repos, setRepos] = useState([]);
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchRepos();
    // eslint-disable-next-line
  }, []); // Call on initial render

  const getDateTenDaysAgo = () => {
    const date = new Date();
    date.setDate(date.getDate() - 10);
    return date.toISOString().split("T")[0];
  };

  const fetchRepos = async () => {
    setLoading(true);
    try {
      const response = await axios.get(
        `https://api.github.com/search/repositories?q=created:>${getDateTenDaysAgo()}&sort=stars&order=desc&page=${page}`
      );
      const newRepos = response.data.items;

      // Append new repos to the existing ones
      setRepos((prevRepos) => [...prevRepos, ...newRepos]);
      setPage(page + 1);

      // Check if there are no more repos to fetch
      if (newRepos.length === 0) {
        setHasMore(false);
      }
    } catch (error) {
      setError("Error fetching repositories. Please try again.");
      setHasMore(false); // If there's an error, stop fetching more
    } finally {
      setLoading(false);
    }
  };

  return { repos, hasMore, fetchRepos, loading, error };
};

export default useFetchRepos;