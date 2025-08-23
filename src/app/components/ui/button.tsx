import * as React from "react"
import { motion } from "framer-motion"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "../../lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground hover:bg-primary/90",
        destructive:
          "bg-destructive text-destructive-foreground hover:bg-destructive/90",
        outline:
          "border border-input bg-background hover:bg-accent hover:text-accent-foreground",
        secondary:
          "bg-secondary text-secondary-foreground hover:bg-secondary/80",
        ghost: "hover:bg-accent hover:text-accent-foreground",
        link: "text-primary underline-offset-4 hover:underline",
      },
      size: {
        default: "h-10 px-4 py-2",
        sm: "h-9 rounded-md px-3",
        lg: "h-11 rounded-md px-8",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
  animated?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className,
      variant,
      size,
      asChild = false,
      animated = true,
      onMouseDown,
      onMouseMove,
      children,
      ...props
    },
    forwardedRef
  ) => {
    const hostRef = React.useRef<HTMLButtonElement | null>(null)
    const setButtonRef = (node: HTMLButtonElement | null) => {
      hostRef.current = node
      if (typeof forwardedRef === "function") {
        forwardedRef(node)
      } else if (forwardedRef) {
        forwardedRef.current = node
      }
    }

    const baseClasses = cn(
      buttonVariants({ variant, size, className }),
      "relative overflow-hidden will-change-transform",
      animated && "btn-animated"
    )

    if (asChild) {
      const Comp = Slot
      return (
        <Comp className={baseClasses} data-button="true">
          {animated && <span aria-hidden className="btn-shine" />}
          {children}
          {animated && <span aria-hidden className="btn-glow" />}
        </Comp>
      )
    }

    const handleMouseDown: React.MouseEventHandler<HTMLButtonElement> = (e) => {
      if (typeof window === 'undefined') return;
      
      const el = hostRef.current
      if (el) {
        const rect = el.getBoundingClientRect()
        const ripple = document.createElement("span")
        const size = Math.max(rect.width, rect.height)
        ripple.className = "btn-ripple"
        ripple.style.width = ripple.style.height = `${size}px`
        ripple.style.left = `${e.clientX - rect.left - size / 2}px`
        ripple.style.top = `${e.clientY - rect.top - size / 2}px`
        el.appendChild(ripple)
        setTimeout(() => ripple.remove(), 700)
      }
      onMouseDown?.(e)
    }

    const handleMouseMove: React.MouseEventHandler<HTMLButtonElement> = (e) => {
      if (typeof window === 'undefined') return;
      
      const el = hostRef.current
      if (el) {
        const rect = el.getBoundingClientRect()
        const x = e.clientX - rect.left
        const percentX = Math.max(0, Math.min(1, x / rect.width)) * 100
        el.style.setProperty("--mx", `${percentX}%`)
      }
      onMouseMove?.(e)
    }

    return (
      // Cast props to avoid type conflict between React drag events and Framer drag callbacks
      <motion.button
        className={baseClasses}
        ref={setButtonRef}
        data-button="true"
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        whileHover={animated ? ({ y: -2, scale: 1.03 } as any) : undefined}
        whileTap={animated ? ({ scale: 0.97 } as any) : undefined}
        {...(props as any)}
      >
        {animated && <span aria-hidden className="btn-shine" />}
        {children}
        {animated && <span aria-hidden className="btn-glow" />}
      </motion.button>
    )
  }
)
Button.displayName = "Button"

export { Button, buttonVariants }
