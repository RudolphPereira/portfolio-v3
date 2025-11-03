import Link from "next/link";

const Navigation = () => {
  return (
    <nav className="navigation">
      <div className="z-50 bg-componentBackground/50 backdrop-blur-sm fixed top-5 left-[50%] translate-x-[-50%] py-3 px-6 rounded-lg text-base font-medium border-2 border-white drop-shadow-xs shadow-sm">
        <ul className="navLinks flex items-center gap-10">
          <li className="navItem">
            <Link href="#">Home</Link>
          </li>
          <li className="navItem">
            <Link href="#">Projects</Link>
          </li>
          <li className="navItem">
            <Link href="#">About</Link>
          </li>
          <li className="navItem">
            <Link href="#">Contact</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navigation;
