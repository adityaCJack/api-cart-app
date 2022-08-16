import React from "react";

function Allcatogery({
  products,
  cart,
  setCart,
  filteredResults,
  searchInput,
}) {
  //Adding to cart
  function handleClick(item) {
    setCart([...cart, item]);
  }

  return (
    <div className="row">
      {searchInput.length > 1
        ? filteredResults.map((item) => {
            return (
              <div className="col-lg-3 col-md-4 col-sm-6 mb-3">
                <div className="card text-center">
                  <img
                    src={item.image}
                    className="card-img-top img-fluid mx-auto mt-4"
                    style={{ height: "200px", maxWidth: "200px" }}
                    alt="..."
                  />
                  <div className="card-body">
                    <h5 className="card-title">{item.title}</h5>
                    <p className="card-text">
                      <b>Price: </b>
                      {item.price} USD
                    </p>
                    <p className="card-text">
                      <b>Ratings: </b>
                      {item.rating.rate}
                    </p>

                    <button
                      onClick={() => handleClick(item)}
                      className="btn btn-warning w-100"
                    >
                      Add to cart
                    </button>
                  </div>
                </div>
              </div>
            );
          })
        : products.map((item) => {
            return (
              <div className="col-lg-3 col-md-4 col-sm-6 mb-3">
                <div className="card text-center">
                  <img
                    src={item.image}
                    className="card-img-top img-fluid mx-auto mt-4"
                    style={{ height: "200px", maxWidth: "200px" }}
                    alt="..."
                  />
                  <div className="card-body">
                    <h5 className="card-title">{item.title}</h5>
                    <p className="card-text">
                      <b>Price: </b>
                      {item.price}
                    </p>
                    <p className="card-text">
                      <b>Ratings: </b>
                      {item.rating.rate}
                    </p>

                    <button
                      onClick={() => handleClick(item)}
                      className="btn btn-warning w-100"
                    >
                      Add to cart
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
    </div>
  );
}

export default Allcatogery;
