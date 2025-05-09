import Link from "next/link";
const Navbar = () => {
    return (
      <nav className="bg-black p-4">
        <div className="flex justify-between">
          <div>
            <Link
              href="/"
              className="text-xl font-semibold hover:text-slate-300 duration-100"
            >
              YWC20th
            </Link>
          </div>

          <div className="flex flex-row gap-x-8">
            <ul>
              <Link href="/" className="hover:text-slate-300 duration-100">
                Home
              </Link>
            </ul>
            <ul>
              <Link
                href="/announcement"
                className="hover:text-slate-300 duration-100"
              >
                Announcement
              </Link>
            </ul>
          </div>
        </div>
      </nav>
    );
};

export default Navbar;