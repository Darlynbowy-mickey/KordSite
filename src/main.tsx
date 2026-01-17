import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './index.css'
import Layout from './App.tsx'
import Home from './pages/Home.tsx'
import About from './pages/About.tsx'
import Career from './pages/Career.tsx'
import Contact from './pages/Contact.tsx'
import Partner from './pages/Partner.tsx'
import Services from './pages/Services.tsx'
import ScrollToTop from './components/ui/scrollToTop.tsx'

createRoot(document.getElementById('root')!).render(
 <StrictMode>
    <BrowserRouter>
    <ScrollToTop />
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/career" element={<Career />} />
          <Route path="/partner" element={<Partner />} />
          <Route path="/services" element={<Services />} />
          {/* Add a catch-all to prevent 404s on refresh */}
          <Route path="*" element={<Home />} /> 
        </Routes>
      </Layout>
    </BrowserRouter>
  </StrictMode>
)
