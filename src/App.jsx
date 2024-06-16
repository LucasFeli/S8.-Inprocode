import { TotalBalanceCard } from "./pages/TotalBalanceCard/TotalBalanceCard";
import { ExpensesView } from "./pages/ExpensesView/ExpensesView";
import { LanguageSwitcher } from "./components/LanguageSwitcher/LanguageSwitcher";
import "./App.css";

function App() {
  return (
    <>
      <div>
        <header className="App-header">
          <LanguageSwitcher />
        </header>
        <TotalBalanceCard />
        <ExpensesView />
      </div>
    </>
  );
}

export default App;
