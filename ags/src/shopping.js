import React, { useState, useEffect } from "react";
import axios from "axios";

function Shopping() {
  const [items, setItems] = useState([]);
  const [cart, setCart] = useState([]);

  useEffect(() => {
    async function fetchItems() {
      try {
        const response = await axios.get("http://localhost:5000/items");
        setItems(response.data);
      } catch (error) {
        console.error("Error fetching items:", error);
      }
    }

    fetchItems();
  }, []);

  const addToCart = (item) => {
    // Add item to cart
    setCart([...cart, item]);
  };

  const totalPrice = cart.reduce((total, item) => total + item.price, 0);

  const placeOrder = async () => {
    try {
      // Construct order object
      const order = {
        items: cart,
        totalPrice: totalPrice,
        // Add other necessary details like customer info, order date, etc.
      };

      // Submit order to backend
      await axios.post("http://localhost:5000/orders", order);

      // Clear the cart after placing order
      setCart([]);

      // Optionally, display a success message to the user
      alert("Order placed successfully!");
    } catch (error) {
      console.error("Error placing order:", error);
      // Optionally, handle error cases here (e.g., display error message)
    }
  };

  return (
    <div className="container">
      <h2>Shopping Page</h2>
      <div className="row">
        {items.map((item) => (
          <div key={item._id} className="col-md-4 mb-4">
            <div className="card">
              <img src={item.photo} className="card-img-top" alt={item.artName} />
              <div className="card-body">
                <h5 className="card-title">{item.artName}</h5>
                <p className="card-text">Artist: {item.artist}</p>
                <p className="card-text">Price: ${item.price}</p>
                <p className="card-text">{item.description}</p>
                <button onClick={() => addToCart(item)} className="btn btn-primary">Add to Cart</button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Cart Dropdown */}
      <div className="dropdown">
        <button className="btn btn-secondary dropdown-toggle" type="button" id="cartDropdown" data-bs-toggle="dropdown" aria-expanded="false">
          Cart ({cart.length})
        </button>
        <ul className="dropdown-menu" aria-labelledby="cartDropdown">
          {cart.map((item, index) => (
            <li key={index} className="dropdown-item">{item.artName} - ${item.price}</li>
          ))}
          <li className="dropdown-divider"></li>
          <li className="dropdown-item">Total: ${totalPrice}</li>
          <li className="dropdown-divider"></li>
          <li className="dropdown-item">
            <button onClick={placeOrder} className="btn btn-success">Place Order</button>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Shopping;
