import Link from "next/link";

export default function PleaseLogInMessage() {
  return (
    <div className="text-center py-10 text-gray-600 dark:text-gray-300">
      <h2 className="text-xl font-semibold mb-2">Please log in to continue</h2>
      <p className="text-sm">
        You must be authenticated to view this page.{" "}
        <Link href="/login" className="text-blue-600 dark:text-blue-400 underline">
          Go to login
        </Link>
      </p>
    </div>
  );
}
