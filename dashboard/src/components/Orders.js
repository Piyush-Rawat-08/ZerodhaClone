import React from "react";
import { Link } from "react-router-dom";
import { useState, useEffect, useContext } from "react";
import axios from "axios";
import GeneralContext from "./GeneralContext";
import "./orders.css";

const Orders = () => {
  const [allOrders, setAllOrders] = useState([]);
  const { ordersRefreshTrigger } = useContext(GeneralContext);

  useEffect(() => {
    fetchOrders();
  }, [ordersRefreshTrigger]);

  const fetchOrders = () => {
    axios
      .get(`${process.env.REACT_APP_BACKEND_URL}/allOrders`)
      .then((res) => {
        setAllOrders(res.data);
      })
      .catch((error) => {
        console.error("Error fetching orders:", error.message);
      });
  };

  if (allOrders.length === 0) {
    return (
      <div>
        <h3 className="title">No orders placed yet</h3>
        <Link to={"/"} className="btn">
          Get started
        </Link>
      </div>
    )
  };
  if (allOrders.length > 0) {
    return (
    <div className="orders">  
      <div className="no-orders">
        <h3 className="title">Orders Placed({allOrders.length})</h3>
        <div className="new-order-table">
          <table>
            <tr>
              <th>Name</th>
              <th>Qty</th>
              <th>Price</th>
              <th>Mode</th>
            </tr>

            {allOrders.map((stock, index) => {
              return (
                <tr key={index}>
                  <td>{stock.name}</td>
                  <td>{stock.qty}</td>
                  <td>{stock.price}</td>
                  <td>{stock.mode}</td>
                </tr>
              );
            })}
          </table>
        </div>
      </div>
    </div>
  )};

}

export default Orders;
