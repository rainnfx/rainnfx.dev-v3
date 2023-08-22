const About = () => {
  return (
    <section className="hero w-section h-screen flex flex-col mx-auto">
      <div className="flex items-center">
        <h2 className="text-2xl text-light-slate font-mono mr-2">01.</h2>
        <h1 className="text-3xl font-bold text-off-white mr-2 mb-2">About</h1>
        <hr className="text-lightest-slate w-1/2 rounded-md"/>
      </div>
      <div className="inline-flex">
        <div className="txt">
          <p className="mt-5 text-comment font-semibold">
          Heya! I'm Matteo. My programming journey started when<br/>
          I was 10 years old, I started on the platform called<br/>
          roblox the, "Imagination Platform" as they now call it.<br/>
          </p>

          <p className="mt-5 text-comment font-semibold">
          I learned the coding language Roblox Studio utilizes<br/>
          which is LUAU (a modified version of LUA) I enjoyed <br/>
          making some really basic games, obviously it wasn't <br/>
          a realistic career, and I wanted to do harder things.<br/>
          </p>
          
          <p className="mt-5 text-comment font-semibold">
          Which is why I moved to the more "realistic" path of<br/>
          Software Development at the age 12. I now make small<br/>
          sometimes simple sometimes complex projects to get more<br/>
          experience with programming. Every now and then I dabble<br/>
          in other paths like Hardware Engineering, Data Science,<br/>
          Game Development, Artifical Intelligence, and so on!<br/>
          </p>
        </div>
        <div className="img ml-4">
          <img src="https://picsum.photos/1600/1600" height="400" width="400" className="rounded-lg"/>
        </div>
      </div>
    </section>
  )
}

export default About