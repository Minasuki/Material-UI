import Typography from "@mui/material/Typography";
import { useEffect } from "react";
import { useState } from "react";
import { database } from "./config/fb";
import { collection, getDocs } from "firebase/firestore";
import { useParams } from "react-router-dom";

const FireBase = () => {
  const [productos, setProductos] = useState([]);

  const categoria = useParams().categoria;

  useEffect(() => {
    const productosRef = collection(database, "products");
    getDocs(productosRef).then((resp) => {
      setProductos(
        resp.docs.map((doc) => {
          return { ...doc.data(), id: doc.id };
        })
      );
    });
  }, [categoria]);

  console.log(productos);

  return (
    <>
      <Typography variant="h6">Fire Base</Typography>
     
    </>
  );
};

export default FireBase;
