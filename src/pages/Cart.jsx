import Card from "../components/Card";
import {For} from "solid-js";
import {useCartContext} from "../context/CartContext";

const Cart = () => {
  const {items} = useCartContext();
  const total = () => {
    return items.reduce((acc, item) => {
      return acc + item.quantity * item.price
    }, 0);
  }

  return (
    <div className="max-w-md my-8 mx-auto">
      <Card rounded={true}>
        <h2>Your Shopping Cart</h2>
        <For each={items}>
          {(item) => (
            <p class="my-3">{item.title} - ${item.price} - {item.quantity}</p>
          )}
        </For>
        <p className="mt-8 pt-4 border-t-2 font-bold">Total cart price - ${total()}</p>
      </Card>
    </div>
  )
}


export default Cart;