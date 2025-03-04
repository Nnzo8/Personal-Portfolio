function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12 border-t border-gray-800">
      <div className="container mx-auto text-center">
        <p className="text-gray-400">&copy; 2024 Ocliasa. All rights reserved.</p>
        <div className="flex justify-center space-x-6 mt-6">
          <a href="https://github.com/Nnzo8" target="_blank" rel="noopener noreferrer" 
             className="hover:text-blue-400 transition-colors">GitHub</a>
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer"
             className="hover:text-blue-400 transition-colors">Facebook</a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
