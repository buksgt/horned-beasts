import Header from './Header'
import Footer from './Footer'
import Gallery from './Gallery'

function App() {
  
  return (
    <>
    
        <Header title='Horned Beasts'/>
        <Gallery/> 
        <Footer footertext='Ben Borden &copy;'/>
     </>
  ) // if no prop data then do <self close/>
}

export default App
