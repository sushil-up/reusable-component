import {
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form";
import { Textarea } from "@/components/ui/textarea";
import React from "react";

const FormTextArea = ({
    name,
    form,
    label,
    placeholder,
    disabled,
    type,
    className,
}) => {
    return (
        <>
            <FormField
                control={form.control}
                name={name}
                render={({ field, fieldState }) => (
                    <FormItem>
                        <FormLabel>{label}</FormLabel>
                        <FormControl>
                            <Textarea
                             className={`form-control-height ${className}`}
                                {...field}
                                placeholder={placeholder}
                                disabled={disabled}
                                type={type}
                                value={field.value}
                                id={field.name}
                            />
                        </FormControl>
                        <FormMessage>
                            {fieldState.error ? fieldState.error.message : ""}
                        </FormMessage>
                    </FormItem>
                )}
            />
        </>
    );
};

export default FormTextArea;
