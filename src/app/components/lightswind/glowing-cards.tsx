"use client";
import React, { useEffect, useRef, useState } from 'react';
import { cn } from '../../lib/utils';

interface GlowingCardProps {
  children: React.ReactNode;
  className?: string;
  glowColor?: string;
  hoverEffect?: boolean;
  [key: string]: any;
}

interface GlowingCardsProps {
  children: React.ReactNode;
  className?: string;
  enableGlow?: boolean;
  glowRadius?: number;
  glowOpacity?: number;
  animationDuration?: number;
  enableHover?: boolean;
  gap?: string;
  maxWidth?: string;
  padding?: string;
  backgroundColor?: string;
  borderRadius?: string;
  responsive?: boolean;
  customTheme?: object;
}

export const GlowingCard: React.FC<GlowingCardProps> = ({ 
  children, 
  className, 
  glowColor = "#3b82f6", 
  hoverEffect = true, 
  ...props 
}) => {
  return (
    <div 
      className={cn(
        "relative flex-1 min-w-[14rem] p-6 rounded-2xl text-white",
        "bg-black/20 backdrop-blur-md border border-white/10",
        "transition-all duration-400 ease-out",
        className
      )}
      style={{
        '--glow-color': glowColor,
      } as React.CSSProperties}
      {...props}
    >
      {children}
    </div>
  );
};

export const GlowingCards: React.FC<GlowingCardsProps> = ({ 
  children, 
  className, 
  enableGlow = true, 
  glowRadius = 25, 
  glowOpacity = 1, 
  animationDuration = 400, 
  enableHover = true, 
  gap = "2.5rem", 
  maxWidth = "75rem", 
  padding = "3rem 1.5rem", 
  backgroundColor, 
  borderRadius = "1rem", 
  responsive = true, 
  customTheme 
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const overlayRef = useRef<HTMLDivElement>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [showOverlay, setShowOverlay] = useState(false);

  useEffect(() => {
    const container = containerRef.current;
    const overlay = overlayRef.current;
    
    if (!container || !overlay || !enableGlow) return;

    const handleMouseMove = (e: MouseEvent) => {
      const rect = container.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      
      setMousePosition({ x, y });
      setShowOverlay(true);
      
      overlay.style.setProperty('--x', x + 'px');
      overlay.style.setProperty('--y', y + 'px');
      overlay.style.setProperty('--opacity', glowOpacity.toString());
    };

    const handleMouseLeave = () => {
      setShowOverlay(false);
      overlay.style.setProperty('--opacity', '0');
    };

    container.addEventListener('mousemove', handleMouseMove);
    container.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      container.removeEventListener('mousemove', handleMouseMove);
      container.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [enableGlow, glowOpacity]);

  const containerStyle: React.CSSProperties = {
    '--gap': gap,
    '--max-width': maxWidth,
    '--padding': padding,
    '--border-radius': borderRadius,
    '--animation-duration': animationDuration + 'ms',
    '--glow-radius': glowRadius + 'rem',
    '--glow-opacity': glowOpacity,
    backgroundColor: backgroundColor || undefined,
    ...customTheme,
  } as React.CSSProperties;

  return (
    <div className={cn("relative w-full", className)} style={containerStyle}>
      <div 
        ref={containerRef}
        className={cn("relative max-w-[var(--max-width)] mx-auto", "px-6 py-2")}
        style={{ padding: "var(--padding)" }}
      >
        <div className={cn(
          "flex items-center justify-center flex-wrap gap-[var(--gap)]",
          responsive && "flex-col sm:flex-row"
        )}>
          {children}
        </div>

        {enableGlow && (
          <div
            ref={overlayRef}
            className={cn(
              "absolute inset-0 pointer-events-none select-none",
              "opacity-0 transition-all duration-[var(--animation-duration)] ease-out"
            )}
            style={{
              WebkitMask: "radial-gradient(var(--glow-radius) var(--glow-radius) at var(--x, 0) var(--y, 0), #000 1%, transparent 50%)",
              mask: "radial-gradient(var(--glow-radius) var(--glow-radius) at var(--x, 0) var(--y, 0), #000 1%, transparent 50%)",
              opacity: showOverlay ? 'var(--opacity)' : '0',
            }}
          >
            <div 
              className={cn(
                "flex items-center justify-center flex-wrap gap-[var(--gap)] max-w-[var(--max-width)] center mx-auto",
                responsive && "flex-col sm:flex-row"
              )}
              style={{ padding: "var(--padding)" }}
            >
                             {React.Children.map(children, (child, index) => {
                 if (React.isValidElement(child) && child.type === GlowingCard) {
                   const childProps = child.props as GlowingCardProps;
                   const cardGlowColor = childProps.glowColor || "#3b82f6";
                   return React.cloneElement(child as React.ReactElement<GlowingCardProps>, {
                     className: cn(
                       childProps.className,
                       "bg-opacity-30",
                       "border-opacity-100"
                     ),
                     style: {
                       ...childProps.style,
                       backgroundColor: cardGlowColor + "30",
                       borderColor: cardGlowColor,
                       boxShadow: "0 0 20px " + cardGlowColor + "40",
                     },
                   });
                 }
                 return child;
               })}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default GlowingCards;
