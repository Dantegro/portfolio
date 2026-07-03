import Hero from "./components/hero";
import ServiceIntro from "./components/service-intro";


export default function Page() {
  return (
    <main>
      <Hero /> {/* Render Hero component*/}
      <ServiceIntro /> {/* Render ServiceIntro component*/}
    </main>
  )
}
