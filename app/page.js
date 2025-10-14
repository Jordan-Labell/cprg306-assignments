import Link from "next/link";
import weeks from "./weeks.json";

export default function Page() {
  return (
    <main>
      <h1 className="font-bold text-4xl">CPRG 306: Web Development 2 - Assignments</h1>
      <ul>
        {
          weeks.map((week) => (
            <li key={week.number}>
              <Link href={`/week-${week.number}`}>Week {week.number} Assignment</Link>
            </li>
          ))
        }
      </ul>
    </main>
  );
}