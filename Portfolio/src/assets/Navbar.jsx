function Navbar() {
  return (
    <nav className="p-4 bg-gray-900 text-white fixed w-full">
      <ul className="flex justify-center space-x-6">
        <li><a href="#home">Home</a></li>
        <li><a href="About.jsx">About</a></li>
        <li><a href="Projects.jsx">Projects</a></li>
        <li><a href="Contact.jsx">Contact</a></li>
      </ul>
    </nav>
  );
}

export default Navbar;