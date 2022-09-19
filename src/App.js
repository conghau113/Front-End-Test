import { Route, Routes } from "react-router-dom";
import Layout from "./components/Layout";

function App() {
  return (
    <Routes>
      <Route exact path="/" element={<Layout />} />
    </Routes>
  );
}

export default App;
