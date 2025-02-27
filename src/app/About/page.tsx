import Head from "next/head";
import Image from "next/image";
import Link from "next/link";

export default function About() {
  return (
    <div className="bg-green-50 min-h-screen flex flex-col items-center">
      <Head>
        <title>About Us | Medicalshala</title>
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


      {/* Header Section */}
      <section className="w-full bg-white shadow-md py-10 text-center">
        <h1 className="text-4xl font-bold text-green-700">
        Medicalshala: Tech Reimagined, For A Healthier World
        </h1>
        <p className="text-gray-600 text-lg mt-2">
          On A Mission To Transform Lives of Millions
        </p>
      </section>

      {/* About Us Section */}
      <section className="w-3/4 mt-10 p-6 bg-white shadow-md rounded-lg text-center">
        <p className="text-gray-700 text-lg leading-relaxed">
          In 2023, we were inspired by a vision to empower healthcare through technology, 
          making it accessible, personalized, and data-driven to improve health outcomes for all.
          Our goal is to be the bridge between cutting-edge technology and the irreplaceable human touch.  
        </p>
        <p className="text-gray-700 text-lg leading-relaxed mt-4">
          We believe that technology should augment, not replace, the human connection at the heart of healthcare. 
          By harnessing the power of innovation, we can create a future where sophisticated tools seamlessly support and empower 
          both patients and providers, leading to a more effective, efficient, and ultimately, a more human healthcare experience.
        </p>
      </section>

      {/* We Believe In Section */}
      <section className="w-3/4 mt-10">
        <h2 className="text-3xl font-bold text-gray-800 text-center mb-6">We Believe In</h2>

        <div className="grid md:grid-cols-3 gap-6">
          {/* Partnership */}
          <div className="p-6 bg-white shadow-md rounded-lg text-center">
            <h3 className="text-xl font-semibold text-green-600 mt-4">🌟 Partnership</h3>
            <p className="text-gray-600 mt-2">
              The future of healthcare is brimming with possibilities, and we believe we can unlock them faster by working together.
              We champion partnerships to create a future where exceptional care reaches everyone.
            </p>
          </div>

          {/* Innovation */}
          <div className="p-6 bg-white shadow-md rounded-lg text-center">
            <h3 className="text-xl font-semibold text-green-600 mt-4">🌟 Innovation</h3>
            <p className="text-gray-600 mt-2">
              Breakthrough health-tech for everyone. We are pioneering new healthcare solutions that break down barriers
              and empower everyone to experience a healthier tomorrow.
            </p>
          </div>

          {/* Patient-Centric Focus */}
          <div className="p-6 bg-white shadow-md rounded-lg text-center">
            <h3 className="text-xl font-semibold text-green-600 mt-4">🌟 Patient-Centric Focus</h3>
            <p className="text-gray-600 mt-2">
              Patients are at the heart of everything we do. We streamline their experience, making healthcare interactions
              seamless, informative, and meaningful.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
