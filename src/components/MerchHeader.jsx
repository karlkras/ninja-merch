import {A} from "@solidjs/router";
import {createSignal} from "solid-js";
import banner from "../assets/banner.png";
import {useCartContext} from "../context/CartContext";

const MerchHeader = (props) => {
  const [darkTheme, setDarkTheme] = createSignal(false);

  const {items} = useCartContext();

  const quantity = () => {
    return items.reduce((acc, item) => {
      return acc + item.quantity
    }, 0);
  }

  const toggleTheme = () => {
    console.log("setting theme");
    setDarkTheme(!darkTheme());
  }

  return (
    <>
      <header
        className="my-4 p-2 text-xl flex items-center gap-4"
        classList={{"bg-neutral-900": darkTheme(), "text-white": darkTheme()}}
      >
          <span
            className="material-symbols-outlined cursor-pointer"
            onClick={() => toggleTheme()}
          >
            light_mode
          </span>
        <h1>Ninja Merch</h1>
        <A href="/">Home</A>
        <A href="/cart">Cart ({quantity()})</A>
      </header>
      <img className="rounded-md" src={banner} alt="banner"/>
    </>
  )
}

export default MerchHeader;