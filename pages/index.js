import Image from 'next/image'
import { Inter } from 'next/font/google'
import Dashboard from '@/components/Layout/Dashboard'
import HeroSection from '@/components/HeroSection'
import Project from '@/components/Project'
import About from '@/components/about'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <div >
        <Dashboard>
          <HeroSection />
          {/* <About /> */}
          <Project />
        </Dashboard>

      </div>

    </>
  )
}
