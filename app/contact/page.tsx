import "../styles.css";

export default function Contact() {
  return (
    <div className="container mx-auto px-4 py-16">
      <div className="contact-card opacity-0 translate-y-5">
        <h1 className="text-4xl font-bold mb-8">Contact Me</h1>
        <div className="space-y-4">
          <p>
            <strong>Email:</strong> odohvictor47@gmail.com
          </p>
          <p>
            <strong>Phone:</strong> 09017514951
          </p>
          <p>
            <strong>LinkedIn:</strong>{" "}
            <a href="#" className="text-blue-500 hover:underline">
              My LinkedIn
            </a>
          </p>
          <p>
            <strong>Location:</strong> Lagos, Nigeria
          </p>
        </div>
      </div>
    </div>
  );
}
