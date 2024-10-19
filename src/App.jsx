import Navbar from "./components/Navbar"
import HeroSection from "./components/HeroSection"
import FeatureFection from "./components/FeatureFection"
import Workflow from "./components/workflow"
import Pricing from "./components/Pricing"
import Testimonials from "./components/Testimonials"
import Footer from "./components/Footer"
export default function App() {
  return (
    <>
    <Navbar></Navbar>
    <div className="max-w-7xl mx-auto pt20 px6">
      <HeroSection/>
    </div>
    <FeatureFection></FeatureFection>
    <Workflow></Workflow>
    <Pricing></Pricing>
    <Testimonials></Testimonials>
    <Footer></Footer>
    </>
    
  )
}