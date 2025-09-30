import Image from "next/image";

export default function Header() {
  return (
    <header className="w-full bg-white border-b border-gray-200">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between py-3">
          {/* Left: Logo */}
          <div className="flex items-center">
            <a href="/" className="inline-flex items-center">
              <Image
                src="/logo.svg"
                alt="Logo"
                width={220}
                height={60}
                priority
              />
            </a>
          </div>

          {/* Right: Phone info */}
          <div className="text-right">
            <div className="text-sm text-gray-600">For Quick Discussion Dial</div>
            <a
              href="tel:+919535869646"
              className="text-2xl font-semibold tracking-wide text-gray-900 hover:text-gray-700"
            >
              +91-9535869646
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
