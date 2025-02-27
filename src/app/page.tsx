import Image from "next/image";
import Link from "next/link";
import Head from "next/head";

export default function Home() {
  return (
    <div className="bg-green-50 min-h-screen flex flex-col items-center">
      <Head>
        <title>Medicalshala</title>
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

      {/* Hero Section */}
      <section className="flex flex-col md:flex-row-reverse items-center justify-between w-3/4 mt-16">
        <div className="md:w-1/2 text-center md:text-left">
          <h1 className="text-4xl font-bold text-gray-800">
            Make your clinic <span className="text-green-600">Fast, Smart, and Secure</span>
          </h1>
          <p className="mt-4 text-gray-600">
            Designed to easily integrate into your flow and increase efficiency, 
            so you can focus on what matters most—your patients!
          </p>
          <Link href="/Signup">
            <button className="mt-6 bg-green-600 text-white px-6 py-3 rounded-md">
              Sign Up
            </button>
          </Link>
        </div>
        <div className="md:w-1/2 flex justify-center">
          <Image src="/logo.png" alt="Doctor Consultation" width={400} height={300} className="rounded-lg shadow-lg" />
        </div>
      </section>

      {/* Features Section */}
      <section className="mt-10 p-10 bg-white shadow-md rounded-lg w-3/4">
        <div className="flex flex-col items-center justify-center p-5">
          <h1 className="text-3xl font-bold text-gray-800 text-center leading-relaxed">
            For Individual Practitioners, <br />
            Clinics and Hospitals
          </h1>
          <h2 className="text-2xl text-gray-600 text-center mt-4">
            Introducing <span className="font-bold text-green-600">Medicalshala</span>, an AI-based Clinical Support Tool
          </h2>
          <h3 className="text-4xl font-bold text-green-600 text-center mt-6">
            FAST, SMART & SECURE
          </h3>
        </div>
        <div className="flex justify-center gap-6">
          <Image src="/log.png" width={400} height={200} alt="Dashboard Preview" className="rounded-lg shadow-lg" />
          <Image src="/lo.png" width={400} height={200} alt="Dashboard Preview" className="rounded-lg shadow-lg" />
        </div>
      </section>

      {/* Key Features Section */}
      <section className="w-3/4 mt-16">
        <h2 className="text-3xl font-bold text-center text-gray-800">Key Features</h2>
        <div className="grid md:grid-cols-3 gap-6 mt-8">
          
          {/* Feature 1 */}
          <div className="p-6 bg-white shadow-md rounded-lg text-center">
            <h3 className="text-xl font-semibold text-green-600 mt-4">Digital Prescriptions Powered by AI</h3>
            <p className="text-gray-600 mt-2">
              HealTether learns from your daily practice, suggests diagnoses, treatment guidelines, and even auto-fills routine prescriptions. Say goodbye to tedious tasks and reclaim valuable time for patient care.
            </p>
          </div>

          {/* Feature 2 */}
          <div className="p-6 bg-white shadow-md rounded-lg text-center">
            <h3 className="text-xl font-semibold text-green-600 mt-4">Streamlined Appointment Management</h3>
            <p className="text-gray-600 mt-2">
              Effortlessly schedule, cancel, and reschedule appointments with our user-friendly interface. A unified dashboard to manage your offline and online appointments.
            </p>
          </div>

          {/* Feature 3 */}
          <div className="p-6 bg-white shadow-md rounded-lg text-center">
            <h3 className="text-xl font-semibold text-green-600 mt-4">Staff Management</h3>
            <p className="text-gray-600 mt-2">
              Role-based Access Control: Granular access controls ensure only authorized personnel can access specific data.
            </p>
          </div>
        </div>
      </section>

    </div>
  );
}
