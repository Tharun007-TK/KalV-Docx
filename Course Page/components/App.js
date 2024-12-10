import logo from './logo.svg';
import './App.css';
import Footer from './components/Footer/Footer';
import Navbar from './components/navbar/Navbar';
import HeroSection from './components/Home/Herosection';
import CoursesSection from './components/Home/Coursesection';
import ContactSection from './components/Home/Contactsection';
import DetailsSection from './components/Home/Detailsection';
import Sidebar from './components/Home/Sidebar';
import WhyThisCourse from './components/Home/Whycourse';


const App=() => {
  return (
  <>
    <Navbar/>
    <HeroSection/>
   
    
    <DetailsSection/>
    <Sidebar/>
    <WhyThisCourse/>
    <CoursesSection/>
    <ContactSection/>
   <Footer/>
  </>
  );
}

export default App;
