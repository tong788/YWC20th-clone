import Link from "next/link";
import CustomDropdown from "@/app/icons/custom-dropdown";

//I don't want to use react hooks such as useState() here because I don't want to set up navbar to render in CSR which affect issue in layout.tsx
const Navbar = () => {
  return (
    <nav className="bg-black p-4">
      <div className="flex justify-between items-center">
        <div>
          <Link
            href="/"
            className="text-xl font-semibold hover:text-slate-300 duration-100"
          >
            YWC20th
          </Link>
        </div>

        {/* Mobile Menu using <details> */}
        <details className="sm:hidden relative"> {/*detail is container from html which can be expanded or collapsed*/}
          <summary className="list-none cursor-pointer"> {/*summary is to define the object control toggle of detail*/}
            <CustomDropdown className="w-8 h-8 hover:text-slate-300 duration-100" />
          </summary>
          <div className="absolute right-0 mt-2 bg-black border border-white rounded p-2 z-10 flex flex-col gap-y-2">
            <Link href="/" className="hover:text-slate-300 duration-100">
              Home
            </Link>
            <Link
              href="/announcement"
              className="hover:text-slate-300 duration-100"
            >
              Announcement
            </Link>
          </div>
        </details>

        {/* Desktop Menu */}
        <div className="hidden sm:flex flex-row gap-x-8">
          <Link href="/" className="hover:text-slate-300 duration-100">
            Home
          </Link>
          <Link
            href="/announcement"
            className="hover:text-slate-300 duration-100"
          >
            Announcement
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
