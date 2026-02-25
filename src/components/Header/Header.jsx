import Link from "next/link";

const Header = () => {
  return (
    <header className="min_container w-full bg-[#1f1a23be] backdrop-blur-md shadow-md mt-2! rounded-full py-1 pr-1 pl-6">
      <div className="mx-auto flex justify-between items-center ">
        <h1 style={{ fontFamily: "Pacifico" }} className="text-2xl font-bold text-white">
          <Link href='/'>Ujjwal K.</Link>
        </h1>

        <div>
          <ul className="flex items-center gap-7">
            <li className="text-gray-300 hover:text-white">Use Cases</li>
            <li className="text-gray-300 hover:text-white">Robotics</li>
            <li className="text-gray-300 hover:text-white">$CHR</li>
            <li className="text-gray-300 hover:text-white">Developers</li>
            <li className="text-gray-300 hover:text-white">Roadmap</li>
            <li className="text-gray-300 hover:text-white"><Link href='/about'>About</Link></li>
          </ul>
        </div>

        <button className="font-bold gap-2 px-4 py-3 rounded-full bg-[white] text-gray-900! cursor-pointer hover:bg-[#cc91f0] transition-all duration-300">
          Get Started
        </button>
      </div>
    </header>
  );
};

export default Header;
