import EventSection from "../components/EventSection"
import HeroSection from "../components/HeroSection"
function LandingPage() {
  return (
    <div className="w-full flex justify-center items-center flex-col ">
      <HeroSection />
      <EventSection/>
    </div>
  )
}

export default LandingPage
