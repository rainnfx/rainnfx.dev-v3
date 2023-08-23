import { Hero, About, Projects } from '../../components';

export default function Home() {  
  return (
    <main className="overflow-hidden">
      <Hero />
      <About />
      <Projects />
    </main>
  )
}