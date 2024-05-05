import Link from "next/link";
import { MaxWidthWrapper } from "../MaxWidthWrapper";
import { BasketLink } from "./BasketLink";

function Navbar() {
  return (
    <nav
      className="bg-white sticky z-50 top-0 inset-x-0 h-16"
      aria-label="Main"
    >
      <MaxWidthWrapper className="p-8">
        <div className="align-element flex justify-between items-center">
          <Link href="/" className="hover:underline">
            Pretty Little Thing
          </Link>
          <div className="flex justify-center items-center gap-x-4">
            <Link href="/" className="hover:underline">
              Products
            </Link>
            <BasketLink />
          </div>
        </div>
      </MaxWidthWrapper>
    </nav>
  );
}
export default Navbar;
