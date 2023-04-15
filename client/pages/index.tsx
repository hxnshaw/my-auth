import Logo from "@/components/UI/Logo";
import Link from "next/link";

export default function Index() {
  return (
    <main className="w-screen h-screen bg-[url('../public/images/hero.jpg')] bg-cover bg-center">
      <section className="h-full w-full bg-gradient-to-br from-[#375CA9]/30 to-pink-500/30 backdrop-brightness-75">
        <div className="flex items-center justify-between p-8">
          <Link href="/">
            <div className="flex items-center justify-center h-20 w-20 border rounded-full shadow-lg">
              <h1 className="text-2xl text-center font-extralight leading-none text-white tracking-tight">
                Travel
                <br />
                Log
              </h1>
            </div>
          </Link>
          <nav>
            <ul className="flex gap-6 text-white">
              <li>
                <Link href="/signup" className="hover:underline">
                  Sign Up
                </Link>
              </li>
              <li>
                <Link href="/login" className="hover:underline">
                  Log In
                </Link>
              </li>
            </ul>
          </nav>
        </div>
        <div className="flex flex-col items-center justify-center text-center h-4/5 w-full p-10 space-y-4">
          <h1 className="text-white text-5xl sm:text-7xl font-extrabold">
            Monument
            <br />
            Valley
          </h1>
          <p className="text-white font-light max-w-md">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Accusamus
            commodi velit explicabo magni nam nobis eum fugiat recusandae
          </p>
        </div>
      </section>
    </main>
  );
}
