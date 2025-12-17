import { AppRouter } from "./pages";
import { AppProvider } from "./common/providers/app-provider";

function App() {
  return (
    <AppProvider>
      <AppRouter />
    </AppProvider>
  );
}

export default App;
