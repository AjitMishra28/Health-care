import Head from "next/head";
import Image from "next/image";
import Link from "next/link";

export default function Blogs() {
  const blogPosts = [
    {
      id: 1,
      title: "AI in Healthcare: Transforming Patient Care",
      image: "/ai.jpg",
      description:
        "Artificial Intelligence is revolutionizing healthcare by enhancing diagnostics, treatment plans, and personalized medicine. Learn how AI is making healthcare smarter and more efficient.",
      link: "/blogs/healthcare",
    },
    {
      id: 2,
      title: "Telemedicine: The Future of Remote Healthcare",
      image: "/remote.jpg",
      description:
        "Telemedicine has changed the way we access healthcare. Discover how online consultations and remote monitoring are making healthcare more accessible and efficient.",
      link: "/blogs/telemedicine-future",
    },
    {
      id: 3,
      title: "EHR Security: How to Protect Patient Data",
      image: "/security.jpg",
      description:
        "With the rise of electronic health records (EHRs), data security is more critical than ever. Find out the best practices to ensure patient data remains safe and secure.",
      link: "/blogs/ehr-security",
    },
    {
      id: 4,
      title: "Personalized Medicine: The Next Big Thing",
      image: "/big.jpg",
      description:
        "Advancements in genomics and AI are enabling treatments tailored to individual patients. Learn how personalized medicine is reshaping modern healthcare.",
      link: "/blogs/personalized-medicine",
    },
  ];

  return (
    <div className="bg-green-50 min-h-screen flex flex-col items-center">
      <Head>
        <title>Healthcare Blogs | Medicalshala</title>
      </Head>
      {/* Navbar */}
      <nav className="w-full flex justify-between p-5 bg-white shadow-md">
        <div className="text-2xl font-bold text-green-700 flex items-center">
          <Image src="/logo.png" alt="logo" width={80} height={50} />
          Medicalshala
        </div>
        <div className="space-x-6">
          <Link href="/" className="text-gray-600 hover:text-green-700">Home</Link>
          <Link href="/About" className="text-gray-600 hover:text-green-700">About Us</Link>
          <Link href="/Blog" className="text-gray-600 hover:text-green-700">Blogs</Link>
          <Link href="/Contact" className="text-gray-600 hover:text-green-700">Contact</Link>
          <Link href="/login">
            <button className="bg-green-600 text-white px-4 py-2 rounded-md">Login</button>
          </Link>
        </div>
      </nav>

      {/* Page Header */}
      <section className="w-full bg-white shadow-md py-10 text-center">
        <h1 className="text-4xl font-bold text-green-700">Healthcare Blogs</h1>
        <p className="text-gray-600 text-lg mt-2">Stay updated with the latest trends in health-tech and AI in medicine.</p>
      </section>

      {/* Blog Cards */}
      <div className="w-3/4 mt-10 grid md:grid-cols-2 gap-8">
        {blogPosts.map((blog) => (
          <div key={blog.id} className="bg-white shadow-md rounded-lg overflow-hidden">
            <Image src={blog.image} width={600} height={300} alt={blog.title} className="w-full h-48 object-cover" />
            <div className="p-5">
              <h2 className="text-2xl font-bold text-gray-800">{blog.title}</h2>
              <p className="text-gray-600 mt-2">{blog.description}</p>
              <Link href={blog.link}>
                <button className="mt-4 bg-green-600 text-white px-4 py-2 rounded-md hover:bg-green-700">
                  Read More
                </button>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
