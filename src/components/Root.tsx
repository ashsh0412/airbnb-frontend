import { Outlet } from "react-router-dom";

export default function root() {
  return (
    <h1>
      I am root <Outlet />
    </h1>
  );
}
