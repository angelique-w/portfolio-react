import React from "react";
import { AppBar, Link } from "@material-ui/core";

function Header() {
    return (
        <AppBar position="static">
            <Link href="#" color="inherit">
                Accueil
            </Link>
            <Link href="#" color="inherit">
                A propos
            </Link>
            <Link href="#" color="inherit">
                Portfolio
            </Link>
            <Link href="#" color="inherit">
                Compétences
            </Link>
            <Link href="#" color="inherit">
                Contact
            </Link>
        </AppBar>
    );
}

export default Header;
