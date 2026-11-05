"use client";

import { ChevronDown } from "lucide-react";
import { useEffect, useRef, type ReactNode } from "react";
import styles from "./services-menu.module.css";

export type DropdownStateProps = {
  mobile?: boolean;
  active: boolean;
  open: boolean;
  onOpenChange: (open: boolean) => void;
  onNavigate?: () => void;
};

type NavigationDropdownProps = DropdownStateProps & {
  label: string;
  id: string;
  panelClassName?: string;
  children: (close: () => void) => ReactNode;
};

export function NavigationDropdown({ label, id, mobile = false, active, open, onOpenChange, onNavigate, panelClassName = "", children }: NavigationDropdownProps) {
  const rootRef = useRef<HTMLDivElement>(null);
  const triggerRef = useRef<HTMLButtonElement>(null);
  const panelRef = useRef<HTMLDivElement>(null);
  const hoverOpenedRef = useRef(false);
  const closeTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const panelId = `${mobile ? "mobile" : "desktop"}-${id}-menu`;

  function cancelHoverClose() {
    if (closeTimerRef.current !== null) {
      clearTimeout(closeTimerRef.current);
      closeTimerRef.current = null;
    }
  }

  useEffect(() => () => {
    if (closeTimerRef.current !== null) clearTimeout(closeTimerRef.current);
  }, []);

  useEffect(() => {
    if (!open) {
      if (closeTimerRef.current !== null) {
        clearTimeout(closeTimerRef.current);
        closeTimerRef.current = null;
      }
      return;
    }
    function closeOutside(event: PointerEvent) {
      if (!rootRef.current?.getClientRects().length) return;
      // Let another dropdown's click switch menus before a mobile panel collapses.
      if ((event.target as Element).closest("button[data-navigation-trigger]")) return;
      if (!rootRef.current?.contains(event.target as Node)) onOpenChange(false);
    }
    function closeOnEscape(event: KeyboardEvent) {
      if (event.key !== "Escape" || !rootRef.current?.getClientRects().length) return;
      event.stopPropagation();
      if (closeTimerRef.current !== null) clearTimeout(closeTimerRef.current);
      onOpenChange(false);
      triggerRef.current?.focus();
    }
    document.addEventListener("pointerdown", closeOutside);
    document.addEventListener("keydown", closeOnEscape);
    return () => {
      document.removeEventListener("pointerdown", closeOutside);
      document.removeEventListener("keydown", closeOnEscape);
    };
  }, [open, onOpenChange]);

  function closeAfterNavigation() {
    onOpenChange(false);
    onNavigate?.();
  }

  return (
    <div ref={rootRef} className={mobile ? styles.mobile : styles.desktop}
      onPointerEnter={(event) => {
        if (mobile || event.pointerType !== "mouse") return;
        cancelHoverClose();
        hoverOpenedRef.current = !open;
        onOpenChange(true);
      }}
      onPointerLeave={(event) => {
        if (mobile || event.pointerType !== "mouse") return;
        cancelHoverClose();
        hoverOpenedRef.current = false;
        closeTimerRef.current = setTimeout(() => onOpenChange(false), 250);
      }}
      onBlur={(event) => {
        if ((event.relatedTarget as Element | null)?.closest?.("button[data-navigation-trigger]")) return;
        if (!event.currentTarget.contains(event.relatedTarget)) {
          cancelHoverClose();
          onOpenChange(false);
        }
      }}>
      <button ref={triggerRef} type="button" className={`${mobile ? "" : "nav-link"} ${styles.trigger} ${active ? "active" : ""}`}
        data-navigation-trigger={id} aria-expanded={open} aria-controls={panelId}
        onClick={(event) => {
          cancelHoverClose();
          const keepHoverOpen = event.detail > 0 && hoverOpenedRef.current;
          hoverOpenedRef.current = false;
          onOpenChange(keepHoverOpen || !open);
        }}
        onKeyDown={(event) => {
          if (event.key !== "ArrowDown" && event.key !== "ArrowUp") return;
          event.preventDefault();
          cancelHoverClose();
          onOpenChange(true);
          const last = event.key === "ArrowUp";
          requestAnimationFrame(() => {
            const links = panelRef.current?.querySelectorAll<HTMLAnchorElement>("a[href]");
            links?.[last ? links.length - 1 : 0]?.focus();
          });
        }}>
        {label} <ChevronDown size={15} aria-hidden="true" className={open ? styles.rotated : ""} />
      </button>
      <div ref={panelRef} id={panelId} className={`${styles.panel} ${panelClassName}`} hidden={!open} data-lenis-prevent>
        {children(closeAfterNavigation)}
      </div>
    </div>
  );
}
