import * as React from "react";
import { Loader2 } from "lucide-react";

import { cn } from "@/lib/utils";

export interface LoaderProps extends React.HTMLAttributes<HTMLDivElement> {
	size?: number;
	label?: string;
}

const Loader = React.forwardRef<HTMLDivElement, LoaderProps>(
	({ className, size = 24, label, ...props }, ref) => {
		return (
			<div
				ref={ref}
				role="status"
				aria-live="polite"
				className={cn("flex items-center justify-center gap-2", className)}
				{...props}>
				<Loader2
					className="animate-spin text-[hsl(var(--primary))]"
					size={size}
				/>
				{label && (
					<span className="text-sm text-[hsl(var(--muted-foreground))]">
						{label}
					</span>
				)}
				<span className="sr-only">Loading...</span>
			</div>
		);
	}
);
Loader.displayName = "Loader";

export { Loader };