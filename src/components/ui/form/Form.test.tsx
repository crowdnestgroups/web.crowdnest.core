import { describe, expect, it } from "vitest";
import { screen } from "@testing-library/react";
import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { renderWithProviders } from "@/test/utils";

interface FormValues {
  name: string;
}

const FormHarness = ({ showError }: { showError?: boolean }) => {
  const form = useForm<FormValues>({ defaultValues: { name: "" } });

  useEffect(() => {
    if (showError) {
      form.setError("name", { message: "Required" });
    }
  }, [form, showError]);

  return (
    <Form {...form}>
      <FormItem>
        <FormField
          name="name"
          control={form.control}
          render={({ field }) => (
            <>
              <FormLabel>Name</FormLabel>
              <FormControl>
                <input aria-label="name" {...field} />
              </FormControl>
              <FormMessage />
            </>
          )}
        />
      </FormItem>
    </Form>
  );
};

describe("Form primitives", () => {
  it("renders a label and associates aria attributes", () => {
    renderWithProviders(<FormHarness />);
    expect(screen.getByText("Name")).toBeInTheDocument();
    expect(screen.getByLabelText("name")).toHaveAttribute("aria-invalid", "false");
  });

  it("renders a message when an error exists", () => {
    renderWithProviders(<FormHarness showError />);
    expect(screen.getByText("Required")).toBeInTheDocument();
    expect(screen.getByLabelText("name")).toHaveAttribute("aria-invalid", "true");
  });
});
