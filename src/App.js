import "./App.css";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import NavBar from "./components/Navbar";
import Home from "./pages/Home";
import Detail from "./pages/Detail";

const queryClient = new QueryClient();

function App() {
   return (
      <QueryClientProvider client={queryClient}>
         <Router>
            <NavBar />
            <div className="flex bg-teal-900 py-[25vw] sm:py-[6vw] ">
               <Routes>
                  <Route
                     path="/"
                     element={<Home />}
                  />
                  <Route path="/list-mobil">
                     <Route
                        path="/list-mobil"
                        element={
                           <div className="items-center flex justify-center min-h-screen text-white">
                              List Mobil
                           </div>
                        }
                     />
                     <Route
                        path="/list-mobil/detail/:id"
                        element={<Detail />}
                     />
                  </Route>
                  <Route
                     path="/testimoni"
                     element={
                        <div className="items-center flex justify-center min-h-screen text-white">
                           Testimoni
                        </div>
                     }
                  />
                  <Route
                     path="*"
                     element={
                        <div className="items-center flex justify-center min-h-screen text-white">
                           ops salah kamar
                        </div>
                     }
                  />
               </Routes>
            </div>
         </Router>
      </QueryClientProvider>
   );
}

export default App;
