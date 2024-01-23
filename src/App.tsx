import "./App.css";
import { Footer } from "./features/global/layout/components/Footer/Footer";
import { Header } from "./features/global/layout/components/Header/Header";
import { Navbar } from "./features/global/layout/components/Navbar/Navbar";
function App() {
    return (
        <>
            <Navbar />
            <Header/>
            <Footer />
        </>
    );
}
// function App() {
//     return (
//         <>
//             <Navbar />
//             <Header />
//             <BrowserRouter>
//                 <Router />
//             </BrowserRouter>
//             <Footer />
//         </>
//     );
// }

export default App;
