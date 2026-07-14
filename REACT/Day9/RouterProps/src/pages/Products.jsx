const Products = () => {


  const product = {

    name:"Laptop",
    price:50000,
    stock:"Available"

  };


  return (
    <>
      <div className="p-10">

        <h1 className="text-2xl font-bold">
          Product Page
        </h1>


        <div className="bg-yellow-100 p-5 rounded-lg mt-5">

          <p>Name : {product.name}</p>
          <p>Price : {product.price}</p>
          <p>Stock : {product.stock}</p>


        </div>

      </div>
    </>
  );
};


export default Products;