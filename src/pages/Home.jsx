import Card from "../components/Card";
import {createResource, For, Show} from "solid-js";
import {A} from "@solidjs/router";

const fetchProducts = async () => {
  const res = await fetch(`http://localhost:4000/products`);
  return res.json();
}

const loading = () => (<p>Loading...</p>)

const Home = () => {
  const [products] = createResource(fetchProducts);

  return (
    <Show when={products()} fallback={loading()}>
      <div className="grid grid-cols-4 gap-10 my-4">
        <For each={products()}>
          {(product) => (
            <A href={`/productDetails/${product.id}`}>
              <Card flat={false} rounded={true} >
                <div class="cart-item">
                    <img src={product.img} alt="product image"/>
                  <h2 className="my-3 font-bold">{product.title} </h2>
                </div>
              </Card>
            </A>
          )}
        </For>
      </div>
    </Show>
  )
}

export default Home;