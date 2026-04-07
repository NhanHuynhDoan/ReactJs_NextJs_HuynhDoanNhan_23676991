import { useState, useMemo } from "react";

function App() {
  const products = useMemo(() => {
    const arr = [];
    for (let i = 1; i <= 5000; i++) {
      arr.push({
        id: i,
        name: `Product ${i}`,
        price: Math.floor(Math.random() * 1000) + 1,
      });
    }
    return arr;
  }, []);

  const [search, setSearch] = useState("");
  const [minPrice, setMinPrice] = useState("");
  const [maxPrice, setMaxPrice] = useState("");

  console.time("Filter without useMemo");

  const filteredWithoutMemo = products.filter((p) => {
    return (
      p.name.toLowerCase().includes(search.toLowerCase()) &&
      (minPrice === "" || p.price >= Number(minPrice)) &&
      (maxPrice === "" || p.price <= Number(maxPrice))
    );
  });

  const totalWithoutMemo = filteredWithoutMemo.reduce(
    (sum, p) => sum + p.price,
    0
  );

  console.timeEnd("Filter without useMemo");

  const filteredProducts = useMemo(() => {
    console.time("Filter with useMemo");

    const result = products.filter((p) => {
      return (
        p.name.toLowerCase().includes(search.toLowerCase()) &&
        (minPrice === "" || p.price >= Number(minPrice)) &&
        (maxPrice === "" || p.price <= Number(maxPrice))
      );
    });

    console.timeEnd("Filter with useMemo");

    return result;
  }, [products, search, minPrice, maxPrice]);

  const totalPrice = useMemo(() => {
    console.time("Total with useMemo");

    const total = filteredProducts.reduce(
      (sum, p) => sum + p.price,
      0
    );

    console.timeEnd("Total with useMemo");

    return total;
  }, [filteredProducts]);

  return (
    <div>
      <h1>Product Filter</h1>

      {/* Search */}
      <input
        type="text"
        placeholder="Search name..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      {/* Filter giá */}
      <input
        type="number"
        placeholder="Min price"
        value={minPrice}
        onChange={(e) => setMinPrice(e.target.value)}
      />

      <input
        type="number"
        placeholder="Max price"
        value={maxPrice}
        onChange={(e) => setMaxPrice(e.target.value)}
      />

      {/* Tổng tiền */}
      <h2>Total Price: {totalPrice}</h2>

      {/* Hiển thị danh sách đã filter */}
      <ul>
        {filteredProducts.slice(0, 50).map((p) => (
          <li key={p.id}>
            {p.name} - ${p.price}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;