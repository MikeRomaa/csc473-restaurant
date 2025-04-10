import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router";

import { CartContextProvider } from "./components/CartContext";
import { Footer } from "./components/Footer";
import { Navbar } from "./components/Navbar";
import { InitialScroll } from "./components/ScrollToTop";
import { Contact } from "./pages/Contact";
import { Homepage } from "./pages/Homepage";
import { Menu } from "./pages/Menu";

import "./index.css";

const root = document.getElementById("root") as HTMLElement;

createRoot(root).render(
    <StrictMode>
        <BrowserRouter>
            <CartContextProvider>
                <InitialScroll />
                <Navbar />
                <Routes>
                    <Route index element={<Homepage />} />
                    <Route path="contact" element={<Contact />} />
                    <Route path="menu" element={<Menu />} />
                </Routes>
                <Footer />
            </CartContextProvider>
        </BrowserRouter>
    </StrictMode>,
);
