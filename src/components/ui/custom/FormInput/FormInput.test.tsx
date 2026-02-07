import { describe, expect, it } from "vitest";
import { screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import React from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Form } from "@/components/ui/form";
import { FormInput } from "@/components/ui/custom/FormInput";
import { renderWithProviders } from "@/test/utils";

const schema = z.object({
  password: z.string(),
  amount: z.string(),
});

const FormInputHarness = ({
  type = "text",
  isCurrency,
}: {
  type?: "text" | "password";
  isCurrency?: boolean;
}) => {
  const form = useForm<z.infer<typeof schema>>({
    resolver: zodResolver(schema),
    defaultValues: { password: "", amount: "" },
  });

  return (
    <Form {...form}>
      {type === "password" ? (
        <FormInput<typeof schema>
          control={form.control}
          name="password"
          label="Password"
          type="password"
        />
      ) : (
        <FormInput<typeof schema>
          control={form.control}
          name="amount"
          label="Amount"
          isCurrency={isCurrency}
        />
      )}
    </Form>
  );
};

describe("FormInput", () => {
  it("toggles password visibility", async () => {
    const user = userEvent.setup();
    renderWithProviders(<FormInputHarness type="password" />);
    const input = screen.getByLabelText("Password");
    expect(input).toHaveAttribute("type", "password");
    await user.click(screen.getByRole("button"));
    expect(input).toHaveAttribute("type", "text");
  });

  it("formats currency input with commas", async () => {
    const user = userEvent.setup();
    renderWithProviders(<FormInputHarness isCurrency />);
    const input = screen.getByLabelText("Amount");
    await user.type(input, "12345");
    expect(input).toHaveValue("12,345");
  });
});
