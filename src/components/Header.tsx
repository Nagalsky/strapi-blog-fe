import Link from "next/link";

const navbarLinks = [
  {
    title: "Home",
    path: "/",
  },
  {
    title: "Posts",
    path: "/posts",
  },
];

const Header = () => {
  return (
    <header className="border-b  border-gray-600 bg-gray-900 py-3">
      <div className="container">
        <nav className="flex items-center justify-between">
          <Link href="/" className="flex items-center">
            <span className="self-center whitespace-nowrap text-xl font-semibold">
              Logo
            </span>
          </Link>

          <div className="ml-auto flex flex-row space-x-4 font-medium">
            {navbarLinks.map((link, index) => {
              return (
                <Link
                  key={index}
                  href={link.path}
                  className="block px-3 py-0  text-sm font-medium text-gray-300 hover:text-blue-500"
                >
                  {link.title}
                </Link>
              );
            })}
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
