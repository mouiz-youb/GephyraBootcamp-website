import EventSection from "../components/EventSection"
import HeroSection from "../components/HeroSection"
import HousesCartDescriptions from "../components/HousesCartDescriptions"
import VerticalTimeline from "../components/VerticalTimeline"
function LandingPage() {
  return (
    <div className="w-full flex justify-center items-center flex-col ">
      <HeroSection />
      <EventSection/>
      <HousesCartDescriptions/>
      <VerticalTimeline/>
    </div>
  )
}

export default LandingPage
