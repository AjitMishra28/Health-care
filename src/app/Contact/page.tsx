import Head from "next/head";
import Link from "next/link";
import Image from "next/image";

export default function Contact() {
  return (
    <div className="bg-white min-h-screen flex flex-col items-center">
      <Head>
        <title>Contact Us | HealTether</title>
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

      {/* Page Wrapper */}
      <div className="w-full flex flex-col items-center">
        <section className="w-3/4 my-10">
          <h1 className="text-3xl font-bold text-gray-800">Contact Us</h1>
          <p className="text-gray-600 mt-2">Write us your queries, and we will get in touch soon.</p>
        </section>

        {/* Contact Form & Shape Container */}
        <div className="w-3/4 flex flex-wrap md:flex-nowrap">
          {/* Contact Form */}
          <div className="flex-1 bg-white shadow-md rounded-lg p-8">
            <form className="flex flex-col space-y-4">
              <label className="text-gray-700">Name</label>
              <input type="text" placeholder="Enter your name here" className="border p-3 rounded-md w-full" />

              <label className="text-gray-700">Enter mobile</label>
              <input type="tel" placeholder="Enter your mobile" className="border p-3 rounded-md w-full" />

              <label className="text-gray-700">Enter city</label>
              <input type="text" placeholder="Enter your city" className="border p-3 rounded-md w-full" />

              <label className="text-gray-700">Enter email</label>
              <input type="email" placeholder="Enter your email" className="border p-3 rounded-md w-full" />

              <label className="text-gray-700">Message</label>
              <textarea placeholder="Enter your message here" className="border p-3 rounded-md w-full h-32"></textarea>

              <button className="bg-green-600 text-white py-2 px-4 rounded-md hover:bg-green-700">Submit</button>
            </form>
          </div>

          {/* Gradient Shape */}
          <div className="hidden md:flex items-center justify-center flex-1 relative">
            <div className="w-96 h-96 bg-gradient-to-r from-green-400 to-blue-400 rounded-full transform rotate-45 opacity-90"></div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="w-full bg-gray-900 text-white py-10 mt-10">
        <div className="w-3/4 mx-auto flex flex-wrap md:flex-nowrap justify-between">
          {/* Left Section */}
          <div>
            <h2 className="text-lg font-bold">Medicalshala</h2>
            <p className="text-gray-400 text-sm mt-2">Join us on this transformative journey to redefine healthcare together.</p>

            {/* App Store Links */}
            <div className="mt-4">
              <img src="/google-play.png" alt="Google Play" className="w-32 inline-block mr-2" />
              <img src="/app-store.png" alt="App Store" className="w-32 inline-block" />
            </div>
          </div>

          {/* Contact Info */}
          <div className="text-gray-400">
            <p>📧 info@medicalshala.com</p>
            <p>📞 +91 98765432</p>
            <p>📍 MG Road, Mumbai, India</p>
          </div>

          {/* Subscription Box */}
          <div>
            <p className="text-gray-400">Get regular updates in your inbox</p>
            <div className="flex mt-2">
              <input type="email" placeholder="your@email.com" className="p-2 w-56 rounded-l-md border-none" />
              <button className="bg-green-600 px-4 py-2 rounded-r-md">Subscribe</button>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
