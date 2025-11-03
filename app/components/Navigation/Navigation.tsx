import Link from "next/link";

const Navigation = () => {
  return (
    <section className="navigation">
      <div className="navBox bg-componentBackground/60 backdrop-blur-sm fixed top-5 left-[50%] translate-x-[-50%] py-3 px-6 rounded-full text-base font-medium border-2 border-white drop-shadow-sm shadow-xs">
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
    </section>
  );
};

export default Navigation;
