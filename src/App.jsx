import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Features from './components/Features'
import CodeEmbed from './components/CodeEmbed'
import Trust from './components/Trust'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen bg-[#06080d]">
      <Navbar />
      <main>
        <Hero />
        <Features />
        <CodeEmbed />
        <Trust />
      </main>
      <Footer />
    </div>
  )
}

export default App
