import React from "react";
import Link from "next/link";

const Blog: React.FC = () => {
  const blogs = [
    {
      title: "Importance of Quran Learning",
      image: "blog2.png",
      link: "/blog/quran-learning",
    },
    {
      title: "Dynamic Teachings of Quran",
      image: "blog5.jpg",
      link: "/blog/teachings-of-quran",
    },
    {
      title: "Quran and Modern World",
      image: "blog6.jpg",
      link: "/blog/quran-modern-world",
    },
    {
      title: "Islam the True Religion",
      image: "blog1.jpg",
      link: "/blog/islam-true-religion",
    },
    {
      title: "How to Convert to Islam",
      image: "blog4.jpg",
      link: "/blog/convert-to-islam",
    },
    {
      title: "Islam and Nature",
      image: "blog3.jpg",
      link: "/blog/islam-nature",
    },
  ];

  return (
    <div
      className="min-h-screen flex flex-col p-6 text-white font-serif"
      style={{
        backgroundImage: "url('/background3.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
      }}
    >
      <div className="bg-black/50 backdrop-blur-md p-8 rounded-lg shadow-xl max-w-6xl mx-auto text-center">
        <header className="mb-12">
          <h1
            className="text-3xl sm:text-4xl font-bold mb-6 text-white"
            style={{
              fontFamily: "Times New Roman, serif",
              textShadow: "2px 2px 4px rgba(0, 0, 0, 0.7), 0 0 10px rgba(255, 255, 255, 0.5)",
            }}
          >
            Explore Our Blogs
          </h1>
        </header>

        {/* Blog Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {blogs.map((blog, index) => (
            <Link href={blog.link} key={index}>
              <div className="bg-white/10 p-4 rounded-lg shadow-lg hover:shadow-2xl transition-transform transform hover:-translate-y-2 cursor-pointer">
                <img
                  src={blog.image}
                  alt={blog.title}
                  className="w-full h-48 object-cover rounded-t-lg mb-4"
                />
                <h2 className="text-2xl font-bold text-yellow-400 mb-2">{blog.title}</h2>
                <p className="text-white font-light">Read more about "{blog.title}"</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Blog;
