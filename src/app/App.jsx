import { SearchBar } from "../features/searchTerm/SearchBar"
import datamuse from '../assets/datamuse-logo-rgb.png'
import { Words } from "../features/words/Words"
import '../assets/styles/geral.css'
import '../assets/styles/header.css'
import '../assets/styles/main.css'
import '../assets/styles/footer.css'


function App() {

  return (
    <>
      <header className="header container">
        <h1>Synonym Dictionary</h1>
      </header>
      <main className="main container">
        <SearchBar />
        <Words/>
      </main>
      <footer className="footer container">
        <div className="dataMuse">
        <p>This website uses the <a href="https://www.datamuse.com/api/" target='_blank'>Datamuse API</a></p>
        <img src={datamuse} style={{ width: 'auto', height: 50 }} />
        </div>
        <p>Developed by Camila Vieira</p>
      </footer>
    </>
  )
}

export default App
