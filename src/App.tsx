import "./App.css";

function App() {
  const imgSrc =
    "https://images.unsplash.com/photo-1683009427513-28e163402d16?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2940&q=80";
  return (
    <>
      <div>
        <img src={imgSrc} alt="temp" width="500" height="600" />
        <p>Chin</p>
      </div>
    </>
  );
}

export default App;
