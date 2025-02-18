import  { useEffect, useState } from "react"


export const ProductList = () => {
  const [products, setProducts] = useState([]);
  const [url, setUrl] = useState("http://localhost:8000/products/");

  useEffect(()=>
  {
    fetch(url)
      .then((res) => res.json())
      .then(data => setProducts(data));
  },[url])
 
  
  return (
    <section>
      <div className="filter">
        <button onClick={() => setUrl("http://localhost:8000/products/")}>
          ALL
        </button>
        <button
          onClick={() =>
            setUrl("http://localhost:8000/products/?in_stock=true")
          }
        >
          In Stock
        </button>
        <button
          onClick={() =>
            setUrl("http://localhost:8000/products/?in_stock=false")
          }
        >
          Out of Stock
        </button>
      </div>

      {products.map((product) => (
        <div className="card" key={product.id}>
          <p className="id">{product.id}</p>
          <p className="name">{product.name}</p>
          <p className="info">
            <span>KSH{product.price}</span>
            <br />
            <span className={product.in_stock ? "instock" : "unavailable"}>
              {product.in_stock ? "In Stock" : "Unavailable"}
            </span>
          </p>
        </div>
      ))}
    </section>
  );
};
