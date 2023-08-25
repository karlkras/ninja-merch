import {useParams} from "@solidjs/router";
import {createResource, createSignal, Show} from "solid-js";
import {useCartContext} from "../context/CartContext";

const fetchProduct = async (id) => {
  const res = await fetch(`http://localhost:4000/products/${id}`);

  return res.json();
}



const ProductDetails = () => {
  const params = useParams();
  const [product] = createResource(params.id, fetchProduct);

  const [adding, setAdding] = createSignal(false);

  const loading = () => (<p>Loading...</p>);

  const {items, setItems} = useCartContext();


  const addProduct = () => {
    setAdding(true);
    setTimeout(() => {
      setAdding(false);
    }, 1000)
    const exists = items.find((p) => p.id === product().id);
    if(exists) {
      setItems(p => p.id === product().id, "quantity", q => q + 1);
    } else {
      setItems([...items, {...product(), quantity: 1}]);
    }
  }

  return (
    <div className="my-7">
      <Show when={product()} fallback={loading()}>
        <div className="grid grid-cols-5 gap-7">

          <div className="col-span-2">
            <img src={product().img} alt="product image"/>
          </div>

          <div className="col-span-3">
            <h2 className="text-3xl font-bold mb-7">{product().title}</h2>
            <p>{product().description}</p>
            <p className="my-7 text-2xl">Only ${product().price}</p>
            <button
              class="btn"
              classList={{"gray_background" : adding()}}
              onClick={() => addProduct()}
              disabled={adding()}
            >
              Add To Cart
            </button>
            <Show when={adding()}>
              <div class="m-2 p-2 border-amber-500 border-2 rounded-md inline-block">
                Adding {product().title} to the cart
              </div>
            </Show>
          </div>
        </div>
      </Show>
    </div>
  )
}


export default ProductDetails;