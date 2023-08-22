import Image from 'next/image'
import svgIcon from '../src/app/MA.svg'

const Navbar = () => {
  return (
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
  )
}

export default Navbar