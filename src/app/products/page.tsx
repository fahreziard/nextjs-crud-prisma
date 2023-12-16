import AddProduct from "./AddProduct";
import DeleteProduct from "./DeleteProduct";
import UpdateProduct from "./UpdateProduct.";

type Product = {
  id: number;
  title: string;
  price: number;
};

const getProducts = async () => {
  const res = await fetch("http://localhost:5000/products", {
    cache: "no-store",
  });
  return res.json();
};

const ProductList = async () => {
  const products: Product[] = await getProducts();
  return (
    <div className="p-10 max-w-7xl mx-auto">
      <div className="py-2">
        <AddProduct />
      </div>
      <table className="table">
        <thead>
          <tr className="font-xl">
            <th>#</th>
            <th>Product Name</th>
            <th>Price</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product, index) => (
            <tr key={product.id}>
              <td className="whitespace-normal">{index + 1}</td>
              <td className="min-w-[8rem] max-w-[12rem] whitespace-normal">{product.title}</td>
              <td className="min-w-[8rem] max-w-[12rem] whitespace-normal">{product.price}</td>
              <td className="flex gap-2 max-w-[8rem] whitespace-normal">
                <UpdateProduct {...product}/>
                <DeleteProduct {...product} />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ProductList;
