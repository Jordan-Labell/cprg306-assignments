import Link from "next/link";

export default function Page() {
  return (
    <main>
      <h1 className="font-bold text-4xl">Welcome to Web Dev 2 demo page</h1>
      <Link href="/week-2">Go to Week 2</Link>
    </main>
  );
}