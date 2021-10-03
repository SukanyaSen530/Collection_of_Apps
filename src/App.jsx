import "./styles.css";
import Routes from "./Components/Routes";
import Header from "./Components/Header";
import Footer from "./Components/Footer";

export default function App() {
  return (
    <main className="App">
      <Header />
      <div style={{ minHeight: "80vh" }}>
        <Routes />
      </div>
      <Footer />
    </main>
  );
}
