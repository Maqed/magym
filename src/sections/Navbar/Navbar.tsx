import { Logo } from "@/component/";
import Actions from "./Actions";
type Props = {};

function Navbar({}: Props) {
  return (
    <div className="navbar bg-base-100">
      <div className="navbar-start">
        <Logo className="text-2xl" />
      </div>

      <Actions />
    </div>
  );
}

export default Navbar;
