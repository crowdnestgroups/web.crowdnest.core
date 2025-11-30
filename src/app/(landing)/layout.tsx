import Header from "@/components/molecules/landing/layout/Header";
import React from "react";

const layout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <div className="">
      <Header />
      {children}
    </div>
  );
};

export default layout;
