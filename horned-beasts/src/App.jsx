import Header from './Header'
import Footer from './Footer'
import Gallery from './Gallery'
import allHornedBeasts from './assets/beastdata.json'

function App() {
  
  return (
    <>
    
        <Header title='Horned Beasts'/>
        <Gallery allHornedBeasts={allHornedBeasts}/> 
        <Footer footertext='Ben Borden &copy;'/>
     </>
  ) // if no prop data then do <self close/>
    // for line 12 have to use curlies not quotes cause it's javascripty and not literal text
}

export default App
