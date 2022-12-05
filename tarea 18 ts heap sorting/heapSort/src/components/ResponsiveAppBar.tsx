import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Container from "@mui/material/Container";
import { Link } from "react-router-dom";
import Home from "../pages/Home";

function ResponsiveAppBar() {
  return (
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" }, justifySelf:"center" }}>
            <Link to={"/"}>Home</Link>
            <>&nbsp;&nbsp;</>
            <Link to={"/board"}>Board</Link>
          </Box>
        </Toolbar>
          
      </Container>
      
    </AppBar>
  );
}
export default ResponsiveAppBar;