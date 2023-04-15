import Link from "next/link";

export default function Logo({ url }: { url?: string }) {
  return (
    <Link href={url || "/"}>
      <div className="flex items-center justify-center h-20 w-20 bg-gradient-to-br from-[#375CA9] to-pink-500 rounded-full shadow-lg">
        <h1 className="text-2xl text-center font-bold leading-none text-white tracking-tight">
          Travel
          <br />
          Log
        </h1>
      </div>
    </Link>
  );
}
