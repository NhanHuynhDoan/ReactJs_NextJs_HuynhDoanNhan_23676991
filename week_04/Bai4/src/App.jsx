import { useState, useEffect } from "react";

function App() {
  const [posts, setPosts] = useState([]);

  const [filteredPosts, setFilteredPosts] = useState([]);

  const [search, setSearch] = useState("");

  useEffect(() => {
    const fetchPosts = async () => {
      const res = await fetch(
        "https://jsonplaceholder.typicode.com/posts"
      );
      const data = await res.json();

      setPosts(data);          
      setFilteredPosts(data);   
    };

    fetchPosts();
  }, []);
  useEffect(() => {
    const result = posts.filter((post) =>
      post.title.toLowerCase().includes(search.toLowerCase())
    );

    setFilteredPosts(result);
  }, [search, posts]);

  return (
    <div>
      <div>
        <input
          type="text"
          placeholder="Search title..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>

      <div>
        {filteredPosts.map((post) => (
          <div key={post.id}>
            <div>Title: {post.title}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;