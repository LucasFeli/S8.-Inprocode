import { Balance } from "./components/Balance/Balance";
import { TotalBalanceCard } from "./pages/TotalBalanceCard/TotalBalanceCard";
import { ExpensesChart } from "./components/ExpensesChart";
import { ExpensesView } from "./pages/ExpensesView/ExpensesView";
import "./App.css";

function App() {
  return (
    <>
      <div>
        
        <TotalBalanceCard />
        <ExpensesView />
      </div>
    </>
  );
}

export default App;
