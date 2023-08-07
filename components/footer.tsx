import { FaGithub } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer>
    <div className="w-footer mt-32 mx-auto">
      <div>
        <p className="text-comment mb-7">Copyright © 2023 <a className="text-offer-white left-10 font-semibold transition-all duration-500 ease-in-out hover:text-off-white hover:cursor-pointer">@rainnfx</a></p>
      </div>
      <div>
        <a> <FaGithub/> </a>
      </div>
    </div>
  </footer>
  )
}

export default Footer