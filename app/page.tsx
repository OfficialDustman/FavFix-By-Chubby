export default function Home() {
  return (
    <main className="bg-[#F8F9FA] min-h-screen">
      {/* Hero Section */}
      <section className="text-center py-16 bg-[#1F3C88] text-[#F8F9FA]">
        <h1 className="text-4xl font-bold mb-4">Welcome to FavFix by Chubby</h1>
        <p className="text-lg mb-6">
          Reliable handyman services you can trust!
        </p>
        <button className="bg-[#FFD166] text-[#1F3C88] px-6 py-3 rounded-lg font-semibold hover:bg-[#ffc34d]">
          Get Started
        </button>
      </section>

      {/* Services Preview */}
      <section className="py-12">
        <h2 className="text-3xl font-bold text-center text-[#1F3C88] mb-8">
          Our Popular Services
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto px-4">
          {/* Example Service Cards */}
          {["Plumbing", "Electrical", "Painting"].map((service) => (
            <div
              key={service}
              className="bg-white shadow-md rounded-lg p-6 text-center border border-gray-200"
            >
              <h3 className="text-xl font-semibold text-[#1F3C88] mb-4">
                {service}
              </h3>
              <p className="text-gray-600 mb-4">
                Professional {service.toLowerCase()} services starting at $50.
              </p>
              <button className="bg-[#FFD166] text-[#1F3C88] px-4 py-2 rounded-md hover:bg-[#ffc34d]">
                Learn More
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* About Section Teaser */}
      <section className="py-12 bg-[#F8F9FA]">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-[#1F3C88] mb-4">
            About FavFix by Chubby
          </h2>
          <p className="text-gray-700 mb-6">
            At FavFix, we specialize in delivering reliable handyman services
            tailored to your needs. Learn more about how we can help you.
          </p>
          <button className="bg-[#1F3C88] text-[#FFD166] px-6 py-3 rounded-lg font-semibold hover:bg-[#16326b]">
            Learn More
          </button>
        </div>
      </section>
    </main>
  );
}
