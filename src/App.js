import { useEffect, useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import { Routes, Route, Link } from "react-router-dom";
import Allcatogery from "./components/Allcatogery";
import Cart from "./components/Cart";

function App() {
  //State to save fetched API 1 data(category)
  const [result, setResult] = useState([]);

  //state to save fetched products
  const [products, setProducts] = useState([]);

  function search() {
    fetch(`https://fakestoreapi.com/products/categories`)
      .then((res) => res.json())
      .then((data) => {
        setResult(data);
      });
  }

  useEffect(() => {
    search();
  }, []);

  //Clicking on category to fetch products
  function handleClick(catogery) {
    fetch(`https://fakestoreapi.com/products/category/${catogery}`)
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
      });
    setSearchInput("");
  }

  //State for cart
  const [cart, setCart] = useState([]);

  // Search field function
  const [filteredResults, setFilteredResults] = useState([]);
  const [searchInput, setSearchInput] = useState("");

  const searchItems = (searchValue) => {
    setSearchInput(searchValue);
    if (searchInput !== "") {
      const filteredData = products.filter((item) => {
        return item.title.toLowerCase().includes(searchInput.toLowerCase());
      });
      setFilteredResults(filteredData);
    } else {
      setFilteredResults(products);
    }
  };

  console.log(filteredResults);

  return (
    <>
      <Navbar cart={cart} searchInput={searchInput} searchItems={searchItems} />
      <div className="container-fluid">
        <div
          className="row bg-dark py-3 mb-4"
          style={{ borderBottom: "3px solid #ff0000" }}
        >
          {
            //Mapping through the result to display category
            result &&
              result.map((item) => {
                return (
                  <div className="col-lg-3 text-center">
                    <Link
                      className="category-links "
                      onClick={() => {
                        handleClick(item);
                      }}
                      to={"/" + item}
                    >
                      {item}
                    </Link>
                  </div>
                );
              })
          }
        </div>

        <Routes>
          <Route
            path="/"
            element={
              <h2 className="text-center">
                Click on the categories to view products
              </h2>
            }
          />
          <Route
            path="/electronics"
            element={
              <Allcatogery
                cart={cart}
                setCart={setCart}
                products={products}
                filteredResults={filteredResults}
                searchInput={searchInput}
              />
            }
          />
          <Route
            path="/jewelery"
            element={
              <Allcatogery
                cart={cart}
                setCart={setCart}
                products={products}
                filteredResults={filteredResults}
                searchInput={searchInput}
              />
            }
          />

          <Route
            path="/men's%20clothing"
            element={
              <Allcatogery
                cart={cart}
                setCart={setCart}
                products={products}
                filteredResults={filteredResults}
                searchInput={searchInput}
              />
            }
          />

          <Route
            path="/women's%20clothing"
            element={
              <Allcatogery
                cart={cart}
                setCart={setCart}
                products={products}
                filteredResults={filteredResults}
                searchInput={searchInput}
              />
            }
          />

          <Route
            path="/cart"
            element={<Cart cart={cart} setCart={setCart} />}
          />
        </Routes>
      </div>
    </>
  );
}

export default App;
