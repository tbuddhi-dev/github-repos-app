import React from 'react'
import InfiniteScroll from "react-infinite-scroll-component";
import useFetchRepos from '../../hooks/useFetchRepos'
import RepoItem from '../RepoItem';

const InfiniteScroller = () => {
  const { repos, hasMore, fetchRepos, loading, error } = useFetchRepos();

  return (
    <>
      
      {error && <p className="error">{error}</p>} 
      {loading && repos.length === 0 && <p>Loading...</p>} 

      {repos.length > 0 && (
        <InfiniteScroll
          dataLength={repos.length}
          next={fetchRepos}
          hasMore={hasMore}
          loader={<h4>Loading more repositories...</h4>}
          endMessage={<p>No more results</p>}
        >
          {repos.map((repo, index) => (
            <RepoItem key={`${repo.id}-${index}`} repo={repo} />
          ))}
        </InfiniteScroll>
      )}

      {!loading && repos.length === 0 && !error && <p>No repositories found.</p>} 
    </>
  )
}

export default InfiniteScroller
