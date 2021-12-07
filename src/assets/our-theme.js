import { createTheme } from "@mui/material";
import { purple } from "@mui/material/colors";

const ourTheme = createTheme(
    {
        palette: {
            primary: {
                main: "#fefefe",
            },
            secondary: purple
        },
        typography: {
            fontFamily: 'Quicksand', 
            fontWeightLight: 400,
            fontWeightRegular: 500,
            fontWeightMedium: 600,
            fontWeightBold: 700,
        }
    }
)

export default ourTheme;