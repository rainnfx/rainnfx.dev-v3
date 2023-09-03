import { FaArrowDown } from "react-icons/fa6";

const Hero = () => {
  const content =
    '<a href="https://blog44.ca/matteoa" target="_blank" class="text-mint inline-block transition-all duration-500 ease-in-out shadow-[inset_0_-3px_0_0_#7fdbca] hover:text-midnight hover:shadow-[inset_0_-44px_0_0_#7fdbca] hover:text-white hover:-webkit-box-shadow: inset 0 -33px 0 0 #007bff;">Student</a>, Web Developer, and much more.';
  return (
    <section className="hero w-section h-[800px] flex flex-col mt-32 mx-auto">
      <h2 className="text-3xl font-semibold text-light-slate font-mono text-left">
        Hello,
      </h2>
      <h1 className="text-8xl font-bold text-off-white text-left">
        I'm Matteo <span className="text-comment text-5xl">/ rainnfx</span>{" "}
      </h1>
      <h3
        className="text-offer-white text-3xl font-bold mb-4"
        dangerouslySetInnerHTML={{ __html: content }}
      ></h3>
      <p className="text-xl text-comment mb-4">
        As you have read seconds ago, my name is Matteo. I am a highschool{" "}
        <br></br>student who is focusing on learning and improving on
        programming <br></br>languages, frameworks, and libraries for my future.
      </p>
      <div className="flex items-center">
        <p className="text-xl text-light-slate">
          Want to know more? Scroll down!
        </p>
        <FaArrowDown className="text-light-slate" />
      </div>
    </section>
  );
};

export default Hero;
