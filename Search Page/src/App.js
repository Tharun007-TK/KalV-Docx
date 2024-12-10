import logo from './logo.svg';
import './App.css';
import Footer from './component/Footer/Footer';
import Navbar from './component/navbar/Navbar';
import Header from './component/home/Header';
import SearchBar from './component/home/Searchbar';
import FilterPanel from './component/home/Filterpannel';
import ResultsList from './component/home/Resultslist';
import Content from './component/home/Content';
import Notice from './component/home/Notice';

const App=() =>{
  return (
   <>
    <Navbar/>
    <Header/>
    <SearchBar/>
    <FilterPanel/>
    <Content/>
    <Notice/>
    <ResultsList/>
    <Footer/>
   </>
  );
}

export default App;
