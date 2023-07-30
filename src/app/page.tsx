import Image from 'next/image';
import svgIcon from './MA.svg'
import { Hero } from '../../components';

export default function Home() {
  const content = '<a href="https://blog44.ca/matteoa" target="_blank" class="text-mint inline-block transition-all duration-500 ease-in-out shadow-[inset_0_-3px_0_0_#7fdbca] hover:text-midnight hover:shadow-[inset_0_-44px_0_0_#7fdbca] hover:text-white hover:-webkit-box-shadow: inset 0 -33px 0 0 #007bff;">Student</a>, Web Developer, and much more.';
  
  return (
    <main className="overflow-hidden">
      <Hero />
    </main>
  )
}