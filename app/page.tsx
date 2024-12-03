import Image from "next/image";
import Link from "next/link";
import "./styles.css";
import placeholder from "./placeholder.jpg";

export default function Home() {
  return (
    <div className="container mx-auto px-4 py-16">
      <div className="animation-container flex flex-col md:flex-row items-center justify-between">
        <div className="md:w-1/2 mb-8 md:mb-0">
          <Image
            src={placeholder}
            alt="Odoh Victor"
            width={400}
            height={400}
            className="rounded-full shadow-lg"
          />
        </div>
        <div className="md:w-1/2">
          <h1 className="text-4xl font-bold mb-4">Odoh Victor</h1>
          <p className="text-xl mb-6">
            Innovative App Developer & Software Engineer
          </p>
          <p className="mb-6">
            Passionate about AI and creating impactful solutions. With three
            years of experience, I&rsquo;m ready to bring my skills to a
            tech-forward environment during my National Youth Service Corps
            year.
          </p>
          <div className="space-x-4">
            <Link
              href="/experience"
              className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition"
            >
              Experience
            </Link>
            <Link
              href="/projects"
              className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 transition"
            >
              Projects
            </Link>
            <Link
              href="/contact"
              className="bg-purple-500 text-white px-4 py-2 rounded hover:bg-purple-600 transition"
            >
              Contact
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
