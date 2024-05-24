import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import Stats from "./components/Stats/Stats"
import Map from "./components/Map/Map";
import Photos from "./components/Photos/Photo";
import Contacts from "./components/Contacts/Contacts";
import Team from "./components/team/team";
import Footer from "./components/Footer/Footer";
export default function App() {
  return (
     <>
        <Navbar />
        <Hero />
        <Stats />
        <Map />
        <Photos />
        <Team /> 
        <Contacts />
        <Footer />
     </>
  )
}