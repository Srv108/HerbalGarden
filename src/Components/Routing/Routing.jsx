import { Routes, Route } from "react-router-dom";
import MainLayout from "../MainLayout/MainLayout";
import Home from "../Pages/Home";
import TermsCondition from "../Pages/TermsCondition";

function Routing() {
    return (
        <>
            <Routes>
                <Route path="/" element={<MainLayout />}>
                    <Route index element={<Home />} />  
                    <Route path="terms" element={<TermsCondition />} /> 
                </Route>
            </Routes>
        </>
    );
}

export default Routing;
