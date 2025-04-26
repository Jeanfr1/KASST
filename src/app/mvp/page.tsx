import Link from "next/link";

export default function MVPPage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-4 md:p-24 bg-dark">
      <div className="w-full max-w-4xl p-8 bg-dark-light rounded-xl shadow-lg text-center">
        <h1 className="text-4xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">
          KASST MVP Platform
        </h1>

        <p className="text-xl text-light mb-8">
          Welcome to the KASST MVP platform. Thank you for your interest in our
          project!
        </p>

        <p className="text-light mb-12">
          This is a preview of our MVP platform. More features and functionality
          will be added soon.
        </p>

        <Link href="/" className="btn-primary inline-block">
          Return to Home Page
        </Link>
      </div>
    </main>
  );
}
