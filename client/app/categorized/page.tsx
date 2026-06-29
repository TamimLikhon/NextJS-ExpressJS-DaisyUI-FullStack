'use client';
import { useState } from "react";
import { Check, ChevronsUpDown } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "@/components/ui/breadcrumb";

const categories = [
  { value: "technology", label: "Technology" },
  { value: "business", label: "Business" },
  { value: "sports", label: "Sports" },
  { value: "entertainment", label: "Entertainment" },
  { value: "health", label: "Health" },
  { value: "science", label: "Science" },
];

export default function CategorizedNews() {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState("technology");

  return (
    <div className="container mx-auto p-6 max-w-4xl min-h-screen">
      <Breadcrumb className="mb-6">
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink href="/">Home</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbPage>Categorized News</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>

      <h1 className="text-3xl font-bold mb-6 text-foreground">Explore Categories</h1>
      
      <div className="mb-8 p-4 bg-muted/50 rounded-lg border border-border flex flex-col sm:flex-row items-start sm:items-center gap-4">
        <span className="font-medium text-foreground">Select a category:</span>
        <Popover open={open} onOpenChange={setOpen}>
          <PopoverTrigger asChild>
            <Button
              variant="outline"
              role="combobox"
              aria-expanded={open}
              className="w-[250px] justify-between bg-background"
            >
              {value
                ? categories.find((framework) => framework.value === value)?.label
                : "Select category..."}
              <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
            </Button>
          </PopoverTrigger>
          <PopoverContent className="w-[250px] p-0">
            <Command>
              <CommandInput placeholder="Search category..." />
              <CommandList>
                <CommandEmpty>No category found.</CommandEmpty>
                <CommandGroup>
                  {categories.map((category) => (
                    <CommandItem
                      key={category.value}
                      value={category.value}
                      onSelect={(currentValue) => {
                        setValue(currentValue === value ? "" : currentValue)
                        setOpen(false)
                      }}
                    >
                      <Check
                        className={cn(
                          "mr-2 h-4 w-4",
                          value === category.value ? "opacity-100" : "opacity-0"
                        )}
                      />
                      {category.label}
                    </CommandItem>
                  ))}
                </CommandGroup>
              </CommandList>
            </Command>
          </PopoverContent>
        </Popover>
      </div>

      <div className="space-y-4">
        {/* Mock content based on selected category */}
        <div className="border-l-4 border-primary pl-4 py-2 mb-4">
          <h2 className="text-2xl font-semibold capitalize text-foreground">Top Stories in {value || 'All'}</h2>
        </div>
        
        {Array.from({ length: 4 }).map((_, i) => (
          <div key={i} className="p-4 border border-border rounded-md hover:shadow-md transition-shadow bg-card">
            <h3 className="text-xl font-medium mb-2 text-card-foreground">Sample {value} news article #{i + 1}</h3>
            <p className="text-muted-foreground">
              This is a brief summary of the latest news happening in the {value} sector today. 
              Read more to find out all the details.
            </p>
            <Button variant="link" className="px-0 mt-2">Read article</Button>
          </div>
        ))}
      </div>
    </div>
  );
}
