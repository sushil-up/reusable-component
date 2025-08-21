import { Button } from "@/components/ui/button";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import { FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { cn } from "@/lib/utils";
import { Check, ChevronsUpDown } from "lucide-react";
import React from "react";

export const SelectInput = ({ options: fullOptions,placeholder, form, name, label }) => {
  const [open, setOpen] = React.useState(false);
  const [search, setSearch] = React.useState("");

  const filteredOptions = React.useMemo(() => {
    if (search.trim() === "") {
      const topOptions = fullOptions.slice(0, 10);
      const selectedOption = fullOptions.find(
        (o) => o.value === form.getValues(name)
      );
      const isSelectedInTop = topOptions.some(
        (o) => o.value === selectedOption?.value
      );
      return isSelectedInTop || !selectedOption
        ? topOptions
        : [selectedOption, ...topOptions];
    }

    return fullOptions.filter((option) =>
      option.label.toLowerCase().includes(search.toLowerCase())
    );
  }, [search, fullOptions, form, name]);

  return (
    <FormField
      control={form.control}
      name={name}
      render={({ field,fieldState }) => (
        <FormItem>
          <FormLabel>{label}</FormLabel>
          <Popover open={open} onOpenChange={setOpen}>
            <PopoverTrigger asChild>
            <FormControl>
              <Button
                variant="outline"
                role="combobox"
                aria-expanded={open}
                className={cn(
                  "w-full justify-between form-control-height",
                  !field.value && "text-muted-foreground"
                )}
              >
                {field.value
                  ? fullOptions.find((option) => option.value === field.value)
                      ?.label
                  : `${placeholder}`}
                <ChevronsUpDown className="ml-2 h-4 w-4" />
              </Button>
              </FormControl>
            </PopoverTrigger>
            <PopoverContent className="w-[--radix-popover-trigger-width] p-0">
              <Command>
                <CommandInput
                  placeholder="Search..."
                  value={search}
                  onValueChange={(val) => setSearch(val)}
                />
                <CommandList>
                  <CommandEmpty>No options found.</CommandEmpty>
                  <CommandGroup>
                    {filteredOptions.map((option) => (
                      <CommandItem
                        key={option.value}
                        onSelect={() => {
                          form.setValue(name, option.value);
                          field.onChange(option.value);
                          setOpen(false);
                          setSearch("");
                        }}
                      >
                        {option.label}
                        {field.value === option.value && (
                          <Check className="ml-auto h-4 w-4" />
                        )}
                      </CommandItem>
                    ))}
                  </CommandGroup>
                </CommandList>
              </Command>
            </PopoverContent>
          </Popover>
          <FormMessage>
              {fieldState.error ? fieldState.error.message : ""}
            </FormMessage>
        </FormItem>
      )}
    />
  );
};
