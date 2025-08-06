import { lazy, Suspense } from "react";
import Up from "./components/Up";
const Down = lazy(() => import("./components/Down"));
import "./App.css";
function App() {
  return (
    <main className="flex justify-center items-center min-h-screen w-screen p-10">
      <div className="container shadow-lg">
        <Up />
        <Suspense
          fallback={
            <div className="loading-skeleton">...</div>
          }
        >
          <Down />
        </Suspense>
      </div>
    </main>
  );
}
export default App;
