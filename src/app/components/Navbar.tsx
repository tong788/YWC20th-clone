import Link from "next/link";
const Navbar = () => {
    return (
      <nav className="bg-black p-4">
        <div className="flex justify-between">
          <div>
            <Link href="/" className="text-xl font-semibold">YWC20th</Link>
          </div>

          <div className="flex flex-row gap-x-8">
            <ul>
              <Link href="/">Home</Link>
            </ul>
            <ul>
              <Link href="/announcement">Announcement</Link>
            </ul>
          </div>
        </div>
      </nav>
    );
};

export default Navbar;