import Image from 'next/image';
import svgIcon from './MA.svg'

export default function Home() {
  const content = '<a href="https://blog44.ca/matteoa" target="_blank" class="text-mint inline-block transition-all duration-500 ease-in-out shadow-[inset_0_-3px_0_0_#7fdbca] hover:text-midnight hover:shadow-[inset_0_-44px_0_0_#7fdbca] hover:text-white hover:-webkit-box-shadow: inset 0 -33px 0 0 #007bff;">Student</a>, Web Developer, and much more.';
  
  return (
    <main>
      <header className="App-header">
        <div className="logo">
          <a>
            <Image
              src={svgIcon}
              alt="My SVG"
              width={105}
              height={105}
            />
          </a>
        </div>
      </header>
      <section className="hero w-section h-screen flex flex-col mt-32 mx-auto">
        <h2 className="text-3xl font-semibold text-light-slate font-mono text-left">Hello,</h2>
        <h1 className="text-8xl font-bold text-off-white text-left">I'm Matteo <span className="text-comment text-5xl">/ rainnfx</span> </h1>
        <h3 className="text-offer-white text-3xl font-bold mb-4" dangerouslySetInnerHTML={{ __html: content }}></h3> 
        <p className='text-xl text-comment'>As you have read seconds ago, my name is Matteo. I am a highschool <br></br>student who is focusing on learning and improving on programming <br></br>languages, frameworks, and libraries for my future.</p>
      </section>
      <footer>
        <div className="w-footer mt-32 mx-auto">
          <p>temp text</p>
          <p className="text-comment mb-7">Copyright © 2023 <a className="text-offer-white left-10 font-semibold transition-all duration-500 ease-in-out hover:text-off-white hover:cursor-pointer">@rainnfx</a></p>
        </div>
      </footer>
    </main>
  )
}