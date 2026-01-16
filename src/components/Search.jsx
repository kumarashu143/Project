import { useState, useRef, useEffect } from "react";
import axios from "axios";

function Search() {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);
  const dropdownRef = useRef();

  const handleSearch = async (e) => {
    e.preventDefault();
    if (!query.trim()) return;

    setLoading(true);
    setResults([]);

    try {
      const res = await axios.get(`/search?q=${encodeURIComponent(query)}`);
      setResults(
        res.data.results.map((course) => ({
          ...course,
          distance:
            course.distance != null
              ? (course.distance / 1000).toFixed(2) + " km"
              : null,
        }))
      );
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setResults([]);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () =>
      document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="w-100" ref={dropdownRef} style={{ position: "relative" }}>
      <form className="d-flex align-items-center" onSubmit={handleSearch}>
        <input
          type="search"
          className="form-control me-2"
          placeholder="Search courses..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          style={{
            width: "160px",
            fontSize: "0.85rem",
            backgroundColor: "#fff",
            color: "#000",
            border: "1px solid #ccc",
            height: "30px",
            padding: "0 8px",
          }}
        />
        <button
          className="btn btn-primary"
          type="submit"
          style={{
            padding: "0.375rem 0.75rem",
            fontSize: "0.9rem",
            height: "30px",
          }}
        >
          {loading ? "..." : "Search"}
        </button>
      </form>

      {results.length > 0 && (
        <ul
          className="dropdown-menu show mt-1"
          style={{
            position: "absolute",
            width: "100%",
            maxWidth: "250px",
            maxHeight: "250px",
            overflowY: "auto",
            left: 0,
            right: 0,
            margin: "0 auto",
            zIndex: 2000,
            backgroundColor: "#000",
            border: "1px solid #333",
            borderRadius: "4px",
          }}
        >
          {results.map((course) => (
            <li
              key={course._id}
              className="dropdown-item d-flex justify-content-between align-items-start py-1"
              style={{
                fontSize: "0.85rem",
                backgroundColor: "transparent",
                color: "#fff",
              }}
              title={course.name}
            >
              <span
                style={{
                  whiteSpace: "normal",
                  wordBreak: "break-word",
                }}
              >
                {course.name}
              </span>
              {course.distance && (
                <small
                  className="ms-2"
                  style={{ fontSize: "0.75rem", color: "#aaa" }}
                >
                  {course.distance}
                </small>
              )}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default Search;
