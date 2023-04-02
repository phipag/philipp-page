import React, { ReactNode } from "react";

type LayoutProps = {
  children: ReactNode;
};

const Layout = ({ children }: LayoutProps) => {
  return <main className="flex min-h-screen flex-col">{children}</main>;
};

export default Layout;
