"use client";

import {
    FormControl,
    FormField,
    FormLabel,
    FormMessage,
} from "../form";
import { Control, FieldPath } from "react-hook-form";
import { z } from "zod";
import { cn, truncateText } from "@/lib/utils";
import { SelectProps } from "@radix-ui/react-select";
import { useState } from "react";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../select";

interface FormFieldProps<T extends z.ZodType> extends SelectProps {
    control: Control<z.infer<T>>;
    name: FieldPath<z.infer<T>>;
    label: string;
    placeholder?: string;
    formId?: string;
    showError?: boolean;
    options:
    | string[]
    | {
        label: string;
        value: string;
        disabled?: boolean;
    }[];
    className?: string;
}

export const FormSelectInput = <T extends z.ZodType>({
    control,
    name,
    label,
    placeholder,
    formId,
    showError = true,
    options,
    className,
    disabled,
}: FormFieldProps<T>) => {
    const maxLength = 40;
    const [open, setOpen] = useState(false);

    return (
        <FormField
            control={control}
            name={name}
            render={({ field }) => (
                <div className={cn("relative my-[29px]", className)}>
                    <div className="rounded-lg border border-gray-300 pt-2">
                        <div className="flex w-full flex-col">
                            <FormLabel htmlFor={name} className="form-label bz-paragraph-3 form-padding relative">
                                {label}
                            </FormLabel>
                            <FormControl>
                                <Select
                                    open={open}
                                    onOpenChange={setOpen}
                                    onValueChange={field.onChange}
                                    value={field.value}
                                >
                                    <SelectTrigger
                                        className="form-padding m-0 w-full border-none py-0 focus:ring-0"
                                        disabled={disabled}
                                    >
                                        <SelectValue
                                            placeholder={truncateText(placeholder ?? "", maxLength)}
                                            className="!text-baz-grey"
                                        />
                                    </SelectTrigger>
                                    <SelectContent id={formId ?? name}>
                                        {options.map((option) => {
                                            const { value, label, disabled } =
                                                typeof option === "string"
                                                    ? {
                                                        value: option,
                                                        label: option,
                                                        disabled: false,
                                                    }
                                                    : option;
                                            return (
                                                <SelectItem
                                                    key={value}
                                                    value={value}
                                                    disabled={disabled}
                                                    className="hover:cursor-pointer"
                                                >
                                                    {label}
                                                </SelectItem>
                                            );
                                        })}
                                    </SelectContent>
                                </Select>
                            </FormControl>
                        </div>
                    </div>
                    {showError && <FormMessage className="form-message absolute top-full mt-1" />}
                </div>
            )}
        />
    );
};
