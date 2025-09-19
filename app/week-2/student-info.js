import Link from "next/link";

export default function StudentInfo() {
    return (
        <main>
            <h1 className="font-bold text-4xl">Student Information</h1>
            <p>Name: Jordan Labell</p>
            <Link href="https://github.com/Jordan-Labell/cprg306-assignments">Link to Github repository</Link>
        </main>
    );
}