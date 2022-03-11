import Home from "./pages/Home";

import AppContext, { useAppContext } from "./context/app";
import "./styles/App.scss";

function App() {
  return (
    <AppContext.Provider value={useAppContext()}>
      <Home />
    </AppContext.Provider>
  );
}

export default App;
