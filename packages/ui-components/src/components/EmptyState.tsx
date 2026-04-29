import { type LucideIcon } from "lucide-react";
export function EmptyState({ icon: Icon, title, description }: { icon: LucideIcon; title: string; description: string }) {
  return (
    <div className="flex flex-col items-center justify-center py-16 text-center">
      <div className="h-12 w-12 rounded-xl bg-[hsl(var(--muted))] text-[hsl(var(--muted-foreground))] flex items-center justify-center mb-4">
        <Icon className="h-6 w-6" />
      </div>
      <h3 className="font-semibold">{title}</h3>
      <p className="text-sm text-[hsl(var(--muted-foreground))] mt-1 max-w-sm">{description}</p>
    </div>
  );
}
