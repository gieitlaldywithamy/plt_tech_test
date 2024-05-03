import { Basket } from "../Basket/Basket";
import { MaxWidthWrapper } from "../MaxWidthWrapper";

function Navbar() {
  return (
    <nav className="bg-white sticky z-50 top-0 inset-x-0 h-16">
      <MaxWidthWrapper className="p-8">
        <div className="align-element flex justify-between items-center">
          <header className="uppercase">Pretty Little Thing</header>
          <div className="flex justify-center items-center gap-x-4">
            <Basket />
          </div>
        </div>
      </MaxWidthWrapper>
    </nav>
  );
}
export default Navbar;