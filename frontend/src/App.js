import useRequest from "./hooks/useRequest";
import Photo from "./components/photo";
import "./app.css";
import Loading from "./components/loading.";

function App() {
  const [loading, data] = useRequest(()=>fetch("/images"));
  return (
    <div className="App">
      {
        !loading&&data.map((item, index) =><Photo key={index} title={`photo #${index+1}`} src={`/images/${item}`} />)
      }
    </div>
  );
}

export default App;
