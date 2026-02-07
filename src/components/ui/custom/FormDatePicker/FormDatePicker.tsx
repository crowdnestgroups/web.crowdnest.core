"use client";

import { FormControl, FormField, FormLabel, FormMessage } from "@/components/ui/form";
import { Control, FieldPath } from "react-hook-form";
import { z } from "zod";
import { CalendarIcon } from "lucide-react";
import { Input } from "@/components/ui/input";

interface FormFieldProps<T extends z.ZodType> {
    control: Control<z.infer<T>>;
    name: FieldPath<z.infer<T>>;
    label: string;
    placeholder?: string;
    formId?: string;
    showError?: boolean;
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
    maxLength?: number;
}

export const CustomDateInput = <T extends z.ZodType>({
    control,
    name,
    label,
    placeholder,
    formId,
    showError = true,
    maxLength,
}: FormFieldProps<T>) => {
    const formatDate = (value: string) => {
        // Remove any non-digit characters
        const digits = value.replace(/\D/g, "");

        // Format as MM/YY
        if (digits.length >= 2) {
            return `${digits.slice(0, 2)}/${digits.slice(2, 4)}`;
        }
        return digits;
    };
    return (
        <FormField
            control={control}
            name={name}
            render={({ field }) => (
                <div className="relative my-[29px]">
                    <div className="form-item">
                        <div className="flex w-full flex-col">
                            <FormLabel htmlFor={name} className="form-label bz-paragraph-3">
                                {label}
                            </FormLabel>
                            <FormControl>
                                <Input
                                    className="input-class bz-paragraph-1 [&:-webkit-autofill]:text-base-content! border-0 [&:-webkit-autofill]:bg-transparent! [&:-webkit-autofill]:shadow-[0_0_0_30px_white_inset]!"
                                    {...field}
                                    type="text"
                                    placeholder={placeholder}
                                    id={formId ?? name}
                                    autoComplete="off"
                                    onChange={(e) => {
                                        const formattedValue = formatDate(e.target.value);
                                        field.onChange(formattedValue);
                                    }}
                                    maxLength={maxLength}
                                />
                            </FormControl>
                        </div>

                        <div className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-700">
                            <CalendarIcon className="h-6 w-6" />
                        </div>
                    </div>
                    {showError && <FormMessage className="form-message absolute top-full mt-1" />}
                </div>
            )}
        />
    );
};
