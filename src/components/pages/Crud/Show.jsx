import { Link } from "react-router-dom";
import {
  collection,
  doc,
  getDocs /*,getDoc,deleteDoc*/,
} from "firebase/firestore";
import { db } from "./firebaseCnfig/firebase";

// import Swal from 'sweetalert2'
// import withReactContent from 'sweetalert2-react-content'
import { useEffect, useState } from "react";
import Button from "@mui/material/Button";

import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import EditIcon from "@mui/icons-material/Edit";

// const MySwal = withReactContent(Swal)

export const Show = () => {
  // 1 - configuramos los hooks
  const [products, setProducts] = useState([]);
  // 2 - referenciamos a la DB firestore
  const productsCollection = collection(db, "products");
  // 3 - fincion para mostrar TODOS los docs
  const getProducts = async () => {
    const data = await getDocs(productsCollection);

    setProducts(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
  };
  // 4 - fucion para eliminar un doc
  const deleteProduct = async (id) => {
    const productDoc = doc(db, "products", id);
    await deleteProduct(productDoc);
    getProducts();
  };

  // 5 - funcion de confirmacion para Sweet Alert 2

  // 6 - usamos useEffect
  useEffect(() => {
    getProducts();
  }, []);
  // 7 - devolvemos vista de nuestro componente

//   console.log(products);
  return (
    <>
      <div>
        <Link to="/Material-UI/FireBaseCRUD/create">Create</Link>
      </div>
      {/* "/Material-UI/BluuCard", */}
      <tabla>
        <thead>
          <tr>
            <th>Deescription</th>
            <th>Stock</th>
            <th>Actions</th>
          </tr>
        </thead>

        <tbody>
          {products.map((product) => (
            <tr key={product.id}>
              <td>{product.description}</td>
              <td>{product.stock}</td>
              <td>
                <Link to={`/Material-UI/FireBaseCRUD/edit/${product.id}`}>
                  
                  <EditIcon />
                </Link>
                <Button
                  variant="text"
                  onClick={() => {
                    deleteProduct(product.id);
                  }}
                >
                 <DeleteOutlineIcon />
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </tabla>
    </>
  );
};
