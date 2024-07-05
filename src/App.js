import Footer from "./components/Footer/Footer";
import "./App.css";
import Contact from "./components/Contact/Contact";
import OurClients from "./components/OurClients/OurClients";
import TeamMember from "./components/TeamMember/TeamMember";
function App() {
  return (
    <>
      <TeamMember />
      <OurClients />
      <Contact />
      <div className="footer">
        <Footer />
      </div>
    </>
  );
}

export default App;
