import React from "react";
import { createMuiTheme } from "@material-ui/core/styles";
import { ThemeProvider } from "@material-ui/styles";

import Header from "./Header";
import Footer from "./Footer";

const theme = createMuiTheme({
    palette: {
        primary: {
            light: "#e4ffff",
            main: "#b1ddd9",
            dark: "#81aba8",
            contrastText: "#000000"
        },
        secondary: {
            light: "#ff867f",
            main: "#ff5252",
            dark: "#c50e29",
            contrastText: "#000"
        },
        error: {
            light: "#f9683a",
            main: "#bf360c",
            dark: "#870000",
            contrastText: "#fff"
        },
        warning: {
            light: "#ffb74d",
            main: "#ff9800",
            dark: "#f57c00",
            contrastText: "#000"
        },
        info: {
            light: "#a4a4a4",
            main: "#757575",
            dark: "#494949",
            contrastText: "#fff"
        },
        success: {
            light: "#e1ffb1",
            main: "#aed581",
            dark: "#7da453",
            contrastText: "#fff"
        }
    }
});

function Layout({ children }) {
    return (
        <ThemeProvider theme={theme}>
            <Header />
            {children}
            <Footer />
        </ThemeProvider>
    );
}

export default Layout;
