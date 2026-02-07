import { render, RenderOptions } from "@testing-library/react";
import React from "react";
import ReactQueryProvider from "@/providers/ReactQueryProvider";

const AllProviders = ({ children }: { children: React.ReactNode }) => {
  return <ReactQueryProvider>{children}</ReactQueryProvider>;
};

export const renderWithProviders = (
  ui: React.ReactElement,
  options?: Omit<RenderOptions, "wrapper">,
) => render(ui, { wrapper: AllProviders, ...options });
