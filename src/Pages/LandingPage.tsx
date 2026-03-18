import EventSection from "../components/EventSection"
import HeroSection from "../components/HeroSection"
import HousesCartDescriptions from "../components/HousesCartDescriptions"
function LandingPage() {
  return (
    <div className="w-full flex justify-center items-center flex-col ">
      <HeroSection />
      <EventSection/>
      <HousesCartDescriptions/>
    </div>
  )
}

export default LandingPage
