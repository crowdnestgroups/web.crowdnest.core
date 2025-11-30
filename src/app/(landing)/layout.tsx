import LandingHeader from "@/components/molecules/LandingHeader";
import React from "react";

const layout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <div className="">
      <LandingHeader />
      {children}
    </div>
  );
};

export default layout;
