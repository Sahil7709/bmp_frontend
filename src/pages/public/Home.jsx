import React from "react";
import { useNavigate } from "react-router-dom";
import {
  LocalShipping,
  Person,
  EmojiTransportation,
  Star,
} from "@mui/icons-material";
import useResponsive from "../../core/hooks/useResponsive";

const Home = () => {
  const navigate = useNavigate();
  const { isMobile } = useResponsive();

  const services = [
    {
      icon: <LocalShipping className="text-4xl text-indigo-600" />,
      title: "Send Parcel",
      description:
        "Send your parcels securely with our reliable delivery service.",
    },
    {
      icon: <Person className="text-4xl text-indigo-600" />,
      title: "Become a Traveler",
      description:
        "Earn money by delivering parcels during your travels.",
    },
    {
      icon: <EmojiTransportation className="text-4xl text-indigo-600" />,
      title: "Real-time Tracking",
      description:
        "Track your parcels in real-time with our advanced GPS system.",
    },
  ];

  const teamMembers = [
    { name: "Alex Johnson", role: "CEO & Founder" },
    { name: "Maria Garcia", role: "Operations Manager" },
    { name: "David Smith", role: "Tech Lead" },
  ];

  const testimonials = [
    {
      quote:
        "Book My Parcel made sending my package so easy and affordable!",
      author: "Sarah Williams",
      rating: 5,
    },
    {
      quote:
        "As a traveler, I love earning extra income by delivering parcels.",
      author: "Michael Chen",
      rating: 5,
    },
  ];

  const handleBookParcel = () => {
    const token = localStorage.getItem("token");
    if (token) {
      navigate("/user/new-request");
    } else {
      navigate("/login", {
        state: { from: { pathname: "/user/new-request" } },
      });
    }
  };

  return (
    <div>
      {/* HERO */}
      <section className="relative min-h-[70vh] flex items-center bg-gradient-to-br from-indigo-500 to-purple-600 text-white overflow-hidden">
        <div className="absolute w-40 h-40 bg-white/10 rounded-full top-[-40px] left-[-40px] animate-pulse"></div>
        <div className="absolute w-72 h-72 bg-white/10 rounded-full bottom-[-80px] right-[-80px] animate-pulse delay-1000"></div>

        <div className="container mx-auto px-4 relative z-10 grid md:grid-cols-2 gap-8 items-center">
          <div>
            <h1 className="text-3xl md:text-5xl font-bold mb-4">
              Send & Receive Parcels
            </h1>
            <p className="text-base md:text-xl mb-6">
              Connect with travelers to send parcels securely and affordably
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <button
                onClick={handleBookParcel}
                className="bg-white text-indigo-600 font-semibold px-6 py-3 rounded-lg"
              >
                Book My Parcel
              </button>
              <button
                onClick={() => navigate("/services")}
                className="border border-white px-6 py-3 rounded-lg"
              >
                Learn More
              </button>
            </div>

            <p className="mt-4 text-sm text-white/80">
              New to Book My Parcel?{" "}
              <span
                onClick={() => navigate("/register")}
                className="font-bold cursor-pointer underline"
              >
                Create an account
              </span>
            </p>
          </div>

          <div className="bg-white/20 rounded-2xl h-64 md:h-96 flex items-center justify-center">
            <p className="text-xl md:text-2xl">
              Parcel Delivery Illustration
            </p>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-4xl font-bold text-center mb-12">
            Our Services
          </h2>

          <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3">
            {services.map((s, i) => (
              <div
                key={i}
                className="bg-white rounded-xl p-6 text-center shadow"
              >
                <div className="flex justify-center mb-4">
                  {s.icon}
                </div>
                <h3 className="font-semibold text-xl mb-2">
                  {s.title}
                </h3>
                <p className="text-gray-600 text-sm">
                  {s.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section className="py-16">
        <div className="container mx-auto px-4 grid md:grid-cols-2 gap-10 items-center">
          <div className="bg-gray-200 rounded-2xl h-64 md:h-96 flex items-center justify-center">
            <p className="text-xl">About Us Image</p>
          </div>

          <div>
            <h2 className="text-2xl md:text-4xl font-bold mb-4">
              About Book My Parcel
            </h2>
            <p className="text-gray-700 mb-4">
              Book My Parcel connects people who need to send
              parcels with travelers heading in the same direction.
            </p>
            <p className="text-gray-700 mb-6">
              We make delivery affordable, eco-friendly and fast.
            </p>
            <button
              onClick={() => navigate("/about")}
              className="bg-indigo-600 text-white px-6 py-3 rounded-lg"
            >
              Learn More About Us
            </button>
          </div>
        </div>
      </section>

      {/* TEAM */}
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-4xl font-bold text-center mb-12">
            Our Team
          </h2>

          <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3">
            {teamMembers.map((m, i) => (
              <div
                key={i}
                className="bg-white rounded-xl p-6 text-center shadow"
              >
                <h3 className="font-semibold text-lg">
                  {m.name}
                </h3>
                <p className="text-gray-600 text-sm">
                  {m.role}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-4xl font-bold text-center mb-12">
            What Our Customers Say
          </h2>

          <div className="grid md:grid-cols-2 gap-6">
            {testimonials.map((t, i) => (
              <div
                key={i}
                className="bg-white rounded-xl p-6 shadow"
              >
                <div className="flex justify-center mb-3">
                  {[...Array(t.rating)].map((_, j) => (
                    <Star key={j} className="text-yellow-400" />
                  ))}
                </div>
                <p className="italic mb-3">
                  "{t.quote}"
                </p>
                <p className="font-semibold text-right">
                  – {t.author}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
