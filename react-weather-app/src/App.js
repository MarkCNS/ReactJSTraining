import "./App.css";
import Search from "./components/search";

function App() {
  const handleStartSearch = (searchData) => {
    console.log(searchData);
  };

  return (
    <div className="container">
      <Search startSearch={handleStartSearch} />
    </div>
  );
}

export default App;
