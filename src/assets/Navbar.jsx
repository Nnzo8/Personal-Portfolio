function Navbar() {
  return (
    <nav className="p-4 bg-gray-900/80 backdrop-blur-sm text-white fixed w-full z-50">
      <div className="container mx-auto">
        <ul className="flex justify-center space-x-8">
          {["Home", "CV","Projects", "Contact"].map((item) => (
            <li key={item}>
              <a 
                href={`#${item.toLowerCase()}`}
                className="hover:text-blue-400 transition-colors py-2 px-4 rounded-lg hover:bg-white/10"
              >
                {item}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;