const About = () => {
  return (
    <section className="hero w-section h-screen flex flex-col mx-auto">
      <div className="flex items-center">
        <h2 className="text-2xl text-light-slate font-mono mr-2">01.</h2>
        <h1 className="text-3xl font-bold text-off-white mr-2 mb-2">About</h1>
        <hr className="text-lightest-slate w-1/2 rounded-md"/>
      </div>
      <div>
        <p className="mt-5 text-comment font-semibold">
          Heya! I'm Matteo. My programming journey started when<br/>
          I was 10 years old, I started on the platform called roblox<br/>
          the, "Imagination Platform" as they now call it.
        </p>

        <p className="mt-5 text-comment font-semibold">
          I learned the coding language Roblox Studio utilizes
          which is LUAU<br/> (a modified version of LUA)
          I enjoyed making some really basic games,<br/> 
          obviously it did not really go anywhere though.
        </p>
        
        <p className="mt-5 text-comment font-semibold">
          Heya! I'm Matteo. My programming journey started when<br/>
          I was 10 years old, I started on the platform called roblox<br/>
          the, "Imagination Platform" as they now call it. I learned<br/>
          their coding language which is LUAU (modified version of LUA)<br/>
          I enjoyed making some really basic games, obviously it did not<br/>
          really go anywhere though. Which is why I moved to the more<br/>
          "realistic" path of Software Development at the age 12. I now make small<br/>
          sometimes simple sometimes complex projects to get more<br/>
          experience with programming. Every now and then I dabble<br/>
          in other paths like Hardware Engineering, Data Science,<br/>
          and so on!
        </p>
      </div>
    </section>
  )
}

export default About