import "@aws-amplify/ui-react/styles.css";
import Hero from "./components/Hero";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Layout } from "./components/Layout";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Hero />} />
        <Route path="/home" element={<Layout />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
