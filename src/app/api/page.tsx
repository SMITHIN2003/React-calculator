"use client";
import React, { useState, useEffect } from "react";

interface Product {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
}

function ImgFetcher() {
  const [data, setData] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchId, setSearchId] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("https://fakestoreapi.com/products");
        const result = await response.json();
        setData(result);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching data:", error);
        setLoading(false);
      }
    };

    fetchData();

    return () => {
      console.log("cleanup if needed");
    };
  }, []);

  const filteredData = data.filter((item) => {
    const matchsearchid = searchId
      ? item.category.toString() === searchId
      : true;
    return matchsearchid;
  });

  const handleSearchIdChange = (event: { target: { value: React.SetStateAction<string>; }; }) => {
    setSearchId(event.target.value);
  };

  return (
    <div className="bg-white text-black">
      <div className="head">
        <h2> Data List</h2>
        <input
          type="text"
          placeholder="Search by category"
          value={searchId}
          onChange={handleSearchIdChange}
          className="text-black"
        />
      </div>
      {loading ? (
        <p>Loading data...</p>
      ) : (
        <div>
          <table style={{ border: "2px solid black" }} cellPadding={6}>
            <thead>
              <tr>
                <th style={{ border: "2px solid black" }}>Id</th>
                <th style={{ border: "2px solid black" }}>Title</th>
                <th style={{ border: "2px solid black" }}>Price</th>
                <th style={{ border: "2px solid black" }}>Description</th>
                <th style={{ border: "2px solid black" }}>Category</th>
                <th style={{ border: "2px solid black" }}>Image</th>
              </tr>
            </thead>
            <tbody style={{ border: "2px solid black" }}>
              {filteredData.map((item) => (
                <tr key={item.id} style={{ border: "2px solid black" }}>
                  <td style={{ border: "2px solid black" }}>{item.id}</td>
                  <td style={{ border: "2px solid black" }}>{item.title}</td>
                  <td style={{ border: "2px solid black" }}>{item.price}</td>
                  <td style={{ border: "2px solid black" }}>
                    {item.description}
                  </td>
                  <td style={{ border: "2px solid black" }}>{item.category}</td>
                  <td>
                    <img src={item.image} alt={item.title} />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}
export default ImgFetcher;
