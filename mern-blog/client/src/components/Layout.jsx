import Navbar from "./Navbar";

export default function Layout({ children }) {
  return (
    <>
      <Navbar />
      <main className="max-w-4xl mx-auto p-6">{children}</main>
    </>
  );
}
