import React, { useEffect, useState } from "react";
import "./SubTotal.css";
import { useStateValue } from "../../contextAPI/StateProvider";
import { getBasketTotal } from "../../contextAPI/Reducer";

function SubTotal() {
  const [{ basket }, dispatch] = useStateValue();
  const [formattedAmount, setFormattedAmount] = useState(0);

  useEffect(() => {
    const totalValue = getBasketTotal(basket);
    const formattedAmountValue = new Intl.NumberFormat("en-IN", {
      style: "currency",
      currency: "USD",
      maximumSignificantDigits: 3,
    }).format(totalValue);

    setFormattedAmount(formattedAmountValue);
  }, [basket]);

  return (
    <div className="subtotal">
      <p>
        Subtotal ({basket.length} items):
        <strong>{formattedAmount}</strong>
      </p>
      <small className="subtotal-gift">
        <input type="checkbox" />
        This order contains a gift
      </small>

      <button>Proceed to Checkout</button>
    </div>
  );
}

export default SubTotal;
