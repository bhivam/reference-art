import "./App.css";
import Model from "./components/Model";
import Header from "./components/Header";

function App() {
  return (
    <>
      <Header />
      <main className="grid grid-rows-2 lg:grid-cols-2 lg:grid-rows-1 h-screen">
        <Model />
        <div className="test bg-gray-700"></div>
      </main>
    </>
  )
}

export default App;
