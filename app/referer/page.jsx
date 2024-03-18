import { headers } from "next/headers";
import Link from "next/link";

export default function Page() {
  const headersList = headers();
  const referer = headersList.get("referer");

  return (
    <div>
      Referer: {referer}
      <Link href="/">Home</Link>
    </div>
  );
}
