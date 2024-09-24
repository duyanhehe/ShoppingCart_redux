import { Outlet } from "react-router-dom";
import ShopHeader from "../Header/Header";

export default function DefaultLayout() {
  return (
    <>
      <ShopHeader />
      <Outlet />
    </>
  );
}
