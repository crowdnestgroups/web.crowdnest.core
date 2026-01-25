"use client";

import { InputHTMLAttributes, useState } from "react";
import { FormControl, FormField, FormLabel, FormMessage } from "../form";
import { Input } from "../input";
import { Control, FieldPath } from "react-hook-form";
import { z } from "zod";
import { Eye, EyeOff } from "lucide-react";
import { cn } from "@/lib/utils";

interface FormFieldProps<T extends z.ZodType> extends InputHTMLAttributes<HTMLInputElement> {
    control: Control<z.infer<T>>;
    name: FieldPath<z.infer<T>>;
    label: string;
    formId?: string;
    showError?: boolean;
    contentClassName?: string;
    isCurrency?: boolean;
    currencySymbol?: string;
    decimalPlaces?: number;
}

export const FormInput = <T extends z.ZodType>({
    control,
    name,
    label,
    placeholder,
    type = "text",
    formId,
    showError = true,
    maxLength = 50,
    contentClassName,
    isCurrency,
    currencySymbol,
    decimalPlaces,
    ...props
}: FormFieldProps<T>) => {
    const [showPassword, setShowPassword] = useState(false);
    const togglePasswordVisibility = showPassword ? "text" : "password";
    const inputType = type === "password" ? togglePasswordVisibility : type;

    const formatInput = (value: string, decimalPlaces = 2) => {
        if (!value) return "";

        let formattedValue = value.replace(/[^0-9.]/g, "");

        if (formattedValue.length > 1) {
            formattedValue = formattedValue.replace(/^0+/, "");
        }

        const parts = formattedValue.split(".");
        if (parts.length > 2) {
            formattedValue = parts[0] + "." + parts.slice(1).join("");
        }

        if (parts.length === 2) {
            parts[1] = parts[1].slice(0, decimalPlaces);
            formattedValue = parts.join(".");
        }

        const [intPart, decimalPart] = formattedValue.split(".");
        formattedValue = intPart.replace(/\B(?=(\d{3})+(?!\d))/g, ",");

        if (decimalPart !== undefined) {
            formattedValue += `.${decimalPart}`;
        }

        return formattedValue;
    };

    return (
        <FormField
            control={control}
            name={name}
            render={({ field }) => (
                <div className={cn("relative my-[29px]", contentClassName)}>
                    <div className="form-item">
                        <div className="flex w-full flex-col">
                            <FormLabel htmlFor={name} className="form-label bz-paragraph-3">
                                {label}
                            </FormLabel>
                            <FormControl>
                                <div className="relative flex w-full items-center">
                                    {isCurrency && (
                                        <span className="absolute left-0 text-gray-500">{currencySymbol ?? "₦"}</span>
                                    )}
                                    <Input
                                        className={cn(
                                            "input-class bz-paragraph-1 [&:-webkit-autofill]:!text-base-content border-0 [&:-webkit-autofill]:!bg-transparent [&:-webkit-autofill]:!shadow-[0_0_0_30px_white_inset]",
                                            isCurrency ? "pl-4" : ""
                                        )}
                                        {...field}
                                        type={inputType}
                                        placeholder={placeholder}
                                        id={formId ?? name}
                                        autoComplete="off"
                                        maxLength={maxLength}
                                        value={isCurrency ? formatInput(field.value, decimalPlaces) : field.value}
                                        onChange={(e) => {
                                            let newValue = e.target.value;
                                            if (isCurrency) {
                                                newValue = formatInput(newValue, decimalPlaces);
                                            }
                                            field.onChange(newValue);
                                        }}
                                        {...props}
                                    />
                                </div>
                            </FormControl>
                        </div>

                        {type === "password" && (
                            <button
                                type="button"
                                onClick={() => setShowPassword(!showPassword)}
                                className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-700"
                            >
                                {showPassword ? <EyeOff className="h-6 w-6" /> : <Eye className="h-6 w-6" />}
                            </button>
                        )}
                    </div>
                    {showError && <FormMessage className="form-message mt-1" />}
                </div>
            )}
        />
    );
};
