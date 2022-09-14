import "./App.css";
import Addatransation from "./components/Addatransation";
import Balance from "./components/Balance";
import Header from "./components/Header";
import TransactionList from "./components/transactionList"
import IncomExpansis from "./components/incomExpansis";
import { GlobalProvider } from "./context/GlobalState";

function App() {
  return (
    <>
      <GlobalProvider>
        <Header />

        <div className="container">
          <Balance />
          <IncomExpansis />
          <TransactionList />
          <Addatransation />
        </div>
      </GlobalProvider>
    </>
  );
}

export default App;
