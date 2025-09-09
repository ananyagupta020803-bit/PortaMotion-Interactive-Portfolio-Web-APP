'use client'

import Hero from '../components/sections/Hero'
import SelectedProjects from '../components/sections/SelectedProjects'
import Services from '../components/sections/Services'
import BrandDocs from '../components/sections/BrandDocs'
import PageTransitionWrapper from "../components/layout/PageTransitionWrapper"
export default function HomePage() {
  return (
    <><PageTransitionWrapper>

    </PageTransitionWrapper>
      <Hero />
      <SelectedProjects />
      <Services />
    </>
  )
}
