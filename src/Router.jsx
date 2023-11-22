import "react";
import { Routes, Route } from 'react-router-dom';
import MainPage from '../src/pages/Main/MainPage';
import SelectionPage from '../src/pages/Selection/SelectionPage';


export function Router() {
    return (
        <Routes>
            <Route path="/" element={<MainPage />} />
            <Route path="/SelectionPage" element={<SelectionPage />} />
        </Routes>
    );
}