import Link from "next/link";

type Data = {
  url: string;
  name: string;
};

const Navigation = () => {
  const data: Data[] = [
    {
      url: "/",
      name: "Home",
    },
    {
      url: "#projects",
      name: "Projects",
    },
    {
      url: "#about",
      name: "About",
    },
    {
      url: "#contact",
      name: "Contact",
    },
  ];
  return (
    <nav className="navigation w-full flex justify-center">
      <div className="z-99999 bg-componentBackground/80 backdrop-blur-sm fixed bottom-6 py-3 px-3 rounded-lg text-base font-medium border-2 border-white drop-shadow-xs shadow-sm">
        <ul className="navLinks flex items-center gap-1.5 md:gap-4">
          {data.map((item) => (
            <li className="navItem" key={item.name}>
              <Link
                className="text-base text-darkGrey w-full h-full px-2.5 py-1.5 transition-all duration-150 ease-in hover:shadow-lg rounded-md hover:bg-black hover:text-componentBackground"
                href={item.url}
              >
                {item.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navigation;
