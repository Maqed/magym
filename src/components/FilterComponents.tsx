"use client";
import React, { FormEvent, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { Input } from "@/components/ui/input";
import { BODY_PARTS, EXERCISE_EQUIPMENTS } from "@/consts/gym";
import { Check, ChevronsUpDown } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
} from "@/components/ui/command";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

function FilterComponents() {
  const searchParams = useSearchParams();
  const router = useRouter();

  const [exerciseName, setExerciseName] = useState(
    searchParams.get("name") || ""
  );

  const [isBodyPartComboboxOpen, setIsBodyPartComboboxOpen] = useState(false);
  const [selectedBodyPart, setSelecteBodyPart] = React.useState(
    searchParams.get("bodyPart") || ""
  );

  const [isEquipmentComboboxOpen, setIsEquipmentComboboxOpen] = useState(false);
  const [selectedEquipment, setSelectedEquipment] = useState(
    searchParams.get("equipment") || ""
  );

  function onSubmit(e: FormEvent) {
    e.preventDefault();

    // Create a URLSearchParams object
    let params = new URLSearchParams();
    if (exerciseName) params.set("name", exerciseName);
    if (selectedBodyPart) params.set("bodyPart", selectedBodyPart);
    if (selectedEquipment) params.set("equipment", selectedEquipment);
    params.set("page", "1");

    // Push the new query string to the router
    router.push(`?${params.toString()}`, { scroll: false });
  }

  return (
    <form onSubmit={onSubmit} className="grid grid-cols-1 gap-5 lg:grid-cols-6">
      <Input
        type="text"
        placeholder="Exercise Name"
        defaultValue={exerciseName}
        className="lg:col-span-3"
        onChange={(e) => {
          setExerciseName(e.target.value);
        }}
      />
      <div className="flex items-center justify-between lg:col-span-2">
        {/* BodyPart ComboBox */}
        <Popover
          open={isBodyPartComboboxOpen}
          onOpenChange={setIsBodyPartComboboxOpen}
        >
          <PopoverTrigger asChild>
            <Button
              variant="outline"
              role="combobox"
              aria-expanded={isBodyPartComboboxOpen}
              className="w-[200px] justify-between"
            >
              {selectedBodyPart
                ? [{ value: "all", label: "All" }, ...BODY_PARTS].find(
                    (bodyPart) => bodyPart.value === selectedBodyPart
                  )?.label
                : "Select Body Part..."}
              <ChevronsUpDown className="w-4 h-4 ml-2 opacity-50 shrink-0" />
            </Button>
          </PopoverTrigger>
          <PopoverContent className="w-[200px] p-0">
            <Command>
              <CommandInput placeholder="Search body part..." />
              <CommandEmpty>Body part wasn&apos;t found</CommandEmpty>
              <CommandGroup>
                {[{ value: "all", label: "All" }, ...BODY_PARTS].map(
                  (bodyPart) => (
                    <CommandItem
                      key={bodyPart.value}
                      value={bodyPart.value}
                      onSelect={(currentValue) => {
                        setSelecteBodyPart(
                          currentValue === selectedBodyPart ? "" : currentValue
                        );
                        setIsBodyPartComboboxOpen(false);
                      }}
                    >
                      <Check
                        className={cn(
                          "mr-2 h-4 w-4",
                          selectedBodyPart === bodyPart.value
                            ? "opacity-100"
                            : "opacity-0"
                        )}
                      />
                      {bodyPart.label}
                    </CommandItem>
                  )
                )}
              </CommandGroup>
            </Command>
          </PopoverContent>
        </Popover>
        {/* Equipment ComboBox */}
        <Popover
          open={isEquipmentComboboxOpen}
          onOpenChange={setIsEquipmentComboboxOpen}
        >
          <PopoverTrigger asChild>
            <Button
              variant="outline"
              role="combobox"
              aria-expanded={isEquipmentComboboxOpen}
              className="w-[200px] justify-between"
            >
              {selectedEquipment
                ? [{ value: "all", label: "All" }, ...EXERCISE_EQUIPMENTS].find(
                    (equipment) => equipment.value === selectedEquipment
                  )?.label
                : "Select Equipment..."}
              <ChevronsUpDown className="w-4 h-4 ml-2 opacity-50 shrink-0" />
            </Button>
          </PopoverTrigger>
          <PopoverContent className="w-[200px] p-0">
            <Command>
              <CommandInput placeholder="Search Equipment..." />
              <CommandEmpty>Equipment wasn&apos;t found</CommandEmpty>
              <CommandGroup>
                {[{ value: "all", label: "All" }, ...EXERCISE_EQUIPMENTS].map(
                  (equipment) => (
                    <CommandItem
                      key={equipment.value}
                      value={equipment.value}
                      onSelect={(currentValue) => {
                        setSelectedEquipment(
                          currentValue === selectedEquipment ? "" : currentValue
                        );
                        setIsEquipmentComboboxOpen(false);
                      }}
                    >
                      <Check
                        className={cn(
                          "mr-2 h-4 w-4",
                          selectedEquipment === equipment.value
                            ? "opacity-100"
                            : "opacity-0"
                        )}
                      />
                      {equipment.label}
                    </CommandItem>
                  )
                )}
              </CommandGroup>
            </Command>
          </PopoverContent>
        </Popover>
      </div>
      <Button type="submit">Search</Button>
    </form>
  );
}

export default FilterComponents;
