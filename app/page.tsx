import Image from "next/image";
import Link from "next/link";
import ProductCad from "./components/ProductCad";

export default function Home() {
  return (
    <main>
      <h1>Hello World!</h1>
      <Link href="/users/new">Users</Link>
      <ProductCad />
    </main>
  );
}
