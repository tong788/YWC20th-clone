import Link from "next/link";
const Navbar = () => {
    return (
      <nav className="bg-black text-white p-4">
        <div className="flex justify-between">
          <div>YWC20th</div>

          <div className="flex flex-row gap-x-8">
            <ul>
              <Link href="#">Home</Link>
            </ul>
            <ul>
              <Link href="#">About</Link>
            </ul>
          </div>
        </div>
      </nav>
    );
};

export default Navbar;