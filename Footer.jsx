const Footer = () => {
  return (
    <>
      <div className="bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 text-white">
        <div className="text-center container mx-auto py-6">
          <h1 className="text-4xl font-bold text-yellow-200">Gadget Heaven</h1>
          <p className="text-yellow-100 md:p-4 p-6">Leading the way in cutting-edge technology and innovation.</p>
          <div className="border-b-2 border-yellow-300 my-6 mx-auto w-1/4"></div>
        </div>
        <footer className="flex flex-col lg:flex-row justify-around items-center container mx-auto py-8 bg-indigo-600 rounded-lg shadow-lg">
          <div className="flex flex-col items-center lg:items-start gap-3 px-4">
            <h6 className="footer-title text-lg font-semibold text-yellow-300">Services</h6>
            <a className="link link-hover text-white hover:text-yellow-300 transition-colors duration-300">Branding</a>
            <a className="link link-hover text-white hover:text-yellow-300 transition-colors duration-300">Design</a>
            <a className="link link-hover text-white hover:text-yellow-300 transition-colors duration-300">Marketing</a>
            <a className="link link-hover text-white hover:text-yellow-300 transition-colors duration-300 mb-4">Advertisement</a>
          </div>
          <div className="flex flex-col items-center lg:items-start gap-3 px-4">
            <h6 className="footer-title text-lg font-semibold text-yellow-300 ">Company</h6>
            <a className="link link-hover text-white hover:text-yellow-300 transition-colors duration-300">About us</a>
            <a className="link link-hover text-white hover:text-yellow-300 transition-colors duration-300">Contact</a>
            <a className="link link-hover text-white hover:text-yellow-300 transition-colors duration-300">Jobs</a>
            <a className="link link-hover text-white hover:text-yellow-300 transition-colors duration-300 mb-4">Press kit</a>
          </div>
          <div className="flex flex-col items-center lg:items-start gap-3 px-4">
            <h6 className="footer-title text-lg font-semibold text-yellow-400">Legal</h6>
            <a className="link link-hover text-white hover:text-yellow-300 transition-colors duration-300">Terms of use</a>
            <a className="link link-hover text-white hover:text-yellow-300 transition-colors duration-300">Privacy policy</a>
            <a className="link link-hover text-white hover:text-yellow-300 transition-colors duration-300">Cookie policy</a>
          </div>
        </footer>
        <div className="text-center py-4 bg-gradient-to-r from-indigo-700 to-indigo-900 text-yellow-200 text-sm">
          © 2024 Gadget Heaven. All rights reserved.
        </div>
      </div>
    </>
  );
  
};

export default Footer;
