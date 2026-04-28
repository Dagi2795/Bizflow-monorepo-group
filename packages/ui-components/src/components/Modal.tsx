"use client";
import * as React from "react";
import { cn } from "../lib";
import { X } from "lucide-react";
export function Modal({ open, onClose, title, children }: { open: boolean; onClose: () => void; title: string; children: React.ReactNode }) {
  if (!open) return null;
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      <div className="absolute inset-0 bg-black/40 backdrop-blur-sm" onClick={onClose} />
      <div className={cn("relative z-10 w-full max-w-lg rounded-xl border border-[hsl(var(--border))] bg-[hsl(var(--card))] shadow-xl")}>
        <div className="flex items-center justify-between border-b border-[hsl(var(--border))] p-5">
          <h2 className="font-semibold tracking-tight">{title}</h2>
          <button onClick={onClose} className="rounded-md p-1 hover:bg-[hsl(var(--muted))]"><X className="h-4 w-4" /></button>
        </div>
        <div className="p-5">{children}</div>
      </div>
    </div>
  );
}
