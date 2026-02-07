import { describe, expect, it } from "vitest";
import { screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import React from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Form } from "@/components/ui/form";
import { CustomDateInput } from "@/components/ui/custom/FormDatePicker";
import { renderWithProviders } from "@/test/utils";

const schema = z.object({
  expiry: z.string(),
});

const Harness = () => {
  const form = useForm<z.infer<typeof schema>>({
    resolver: zodResolver(schema),
    defaultValues: { expiry: "" },
  });

  return (
    <Form {...form}>
      <CustomDateInput<typeof schema>
        control={form.control}
        name="expiry"
        label="Expiry"
      />
    </Form>
  );
};

describe("CustomDateInput", () => {
  it("formats MM/YY input", async () => {
    const user = userEvent.setup();
    renderWithProviders(<Harness />);
    const input = screen.getByLabelText("Expiry");
    await user.type(input, "1234");
    expect(input).toHaveValue("12/34");
  });
});
