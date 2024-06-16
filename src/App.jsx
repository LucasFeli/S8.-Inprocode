import { Balance } from "./components/Balance/Balance";
import { TotalBalanceCard } from "./pages/TotalBalanceCard/TotalBalanceCard";
import "./App.css";

function App() {
  return (
    <>
      <div>
        <h1>Expense Tracker</h1>
        <TotalBalanceCard/>
        <Balance />
        
      </div>
    </>
  );
}

export default App;
