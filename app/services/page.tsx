// app/services/page.tsx

import Image from "next/image";

const services = [
  {
    id: 1,
    name: "Plumbing",
    description: "Expert plumbing services for your home and office.",
    image: "/images/plumbing.jpg", // Replace with actual image paths
    price: "Starting at $50",
  },
  {
    id: 2,
    name: "Electrical Work",
    description: "Reliable electrical repairs and installations.",
    image: "/images/electrical.jpg",
    price: "Starting at $70",
  },
  {
    id: 3,
    name: "Painting",
    description: "High-quality painting services for a refreshed look.",
    image: "/images/painting.jpg",
    price: "Starting at $100",
  },
];

const ServicesPage = () => {
  return (
    <div className="bg-[#F8F9FA] min-h-screen">
      <div className="max-w-7xl mx-auto px-6 py-10">
        <h1 className="text-4xl font-bold text-[#1F3C88] mb-8">Our Services</h1>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <div
              key={service.id}
              className="bg-white rounded-lg shadow-md overflow-hidden transform transition-transform hover:scale-105"
            >
              <Image
                src={service.image}
                alt={service.name}
                width={400}
                height={300}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h2 className="text-2xl font-semibold text-[#1F3C88]">
                  {service.name}
                </h2>
                <p className="text-gray-600 mt-2">{service.description}</p>
                <p className="text-[#FFD166] font-bold mt-4">{service.price}</p>
                <div className="flex gap-4 mt-6">
                  <button className="bg-[#FFD166] text-[#1F3C88] px-4 py-2 rounded-lg font-medium hover:bg-[#FFC34B]">
                    Order This Service
                  </button>
                  <button className="bg-[#1F3C88] text-[#FFD166] px-4 py-2 rounded-lg font-medium hover:bg-[#183675]">
                    Add Another Service
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ServicesPage;
