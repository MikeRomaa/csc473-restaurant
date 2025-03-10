import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes } from "react-router";

import "./index.css";

const root = document.getElementById("root") as HTMLElement;

createRoot(root).render(
    <StrictMode>
        <BrowserRouter>
            <Routes />
        </BrowserRouter>
    </StrictMode>,
);
