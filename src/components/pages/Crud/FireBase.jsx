import Typography from "@mui/material/Typography";
import { useEffect } from "react";
import { useState } from "react";
import { database } from "./config/fb";
import { collection, getDocs } from "firebase/firestore";
import { Link, useParams } from "react-router-dom";
import Button from '@mui/material/Button'
import { Box } from "@mui/material";

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
<Box>
    <Link to='/Material-UI/FireBase/Add'>
     <Button variant="contained" color="primary">
       Add
      </Button>
    </Link>
</Box>
    </>
  );
};

export default FireBase;
