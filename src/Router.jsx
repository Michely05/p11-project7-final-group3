import "react";
import { Routes, Route } from "react-router-dom";
import SelectionPage from '../src/pages/Selection/SelectionPage'


export function Router() {
    return (
        <Routes>
            <Route path="/" element={<SelectionPage />} />
        </Routes>
    );
}