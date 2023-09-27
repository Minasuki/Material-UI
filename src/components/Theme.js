import { createTheme } from "@mui/material";
import { deepOrange, purple } from "@mui/material/colors";

const Theme = createTheme({
  palette: {
    primary: {
      main: purple[700],
    },
    secondary: {
      main: deepOrange[200],
    },
  },
  components: {
    MuiButton: {
      variants: [
        {
          props: { variant: "otro", size: "large" },
          style: {
            borderWidth: 4,
            background: "black",
            color: 'white',
          },
        },
        {
          props: { variant: "diseñado", size: "large" },
          style: {
            background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
              border: 0,
              borderRadius: 3,
              boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
              color: 'white',
              height: 48,
              padding: '0 30px',
          },
        },
      ],
    },
  },
});

export default Theme;

// const MyButton = styled(Button)({
//   background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
//   border: 0,
//   borderRadius: 3,
//   boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
//   color: 'white',
//   height: 48,
//   padding: '0 30px',
// });