const Banner = () => {
    return (
      <div className="bg-gradient-to-r from-blue-600 to-purple-700 p-10 rounded-2xl shadow-lg text-white">
        <h1 className="text-4xl font-extrabold mb-3">Welcome to NextWave</h1>
        <p className="text-lg text-white/90 mb-5 max-w-2xl">
          Empowering businesses with cutting-edge software, AI, and web solutions.
          From custom development to intelligent automation, NextWave is your
          partner in digital transformation.
        </p>
        <button className="bg-white text-blue-700 font-semibold px-6 py-3 rounded-full shadow-md hover:bg-blue-100 transition">
          Get Started with Us
        </button>
      </div>
    );
  };
  
  export default Banner;
  