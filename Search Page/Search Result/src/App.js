import React from 'react';
        import './App.css';
        import SearchBar from './components/SearchBar';
        import FilterSection from './components/FilterSection';
        import ResultsList from './components/ResultsList';

        function App() {
            return (
                <div className="app-container">
                    <header className="header">
                        <h1>Find a Contract</h1>
                        <p>Explore and search business opportunities</p>
                    </header>
                    <main>
                        <SearchBar />
                        <FilterSection />
                        <ResultsList />
                    </main>
                </div>
            );
        }

        export default App;