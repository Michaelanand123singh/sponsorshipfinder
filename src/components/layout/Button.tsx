import React, { 
  ButtonHTMLAttributes, 
  forwardRef, 
  ReactNode, 
  useMemo 
} from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from './Utils';
import { Loader2 } from 'lucide-react';

/**
 * Button Variant Configurations
 * Provides comprehensive styling options with accessibility and performance in mind
 */
const buttonVariants = cva(
  // Improved base styles with enhanced accessibility and performance considerations
  "inline-flex items-center justify-center rounded-md text-sm font-medium transition-all duration-200 ease-in-out " +
  "ring-offset-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-950 focus-visible:ring-offset-2 " +
  "disabled:pointer-events-none disabled:opacity-50 " +
  "aria-disabled:opacity-50 aria-disabled:cursor-not-allowed " +
  "motion-reduce:transition-none",
  {
    variants: {
      variant: {
        default: "bg-slate-900 text-white hover:bg-slate-800 focus:bg-slate-700",
        destructive: "bg-red-500 text-white hover:bg-red-600 focus:bg-red-700",
        outline: "border border-slate-200 bg-white hover:bg-slate-100 hover:text-slate-900 focus:bg-slate-50",
        secondary: "bg-slate-100 text-slate-900 hover:bg-slate-200 focus:bg-slate-150",
        ghost: "hover:bg-slate-100 hover:text-slate-900 focus:bg-slate-50",
        link: "text-slate-900 underline-offset-4 hover:underline focus:underline",
      },
      size: {
        default: "h-10 px-4 py-2",
        sm: "h-9 rounded-md px-3",
        lg: "h-11 rounded-md px-8",
        icon: "h-10 w-10 p-0 justify-center",
      },
      fullWidth: {
        true: "w-full",
        false: "",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
      fullWidth: false,
    },
  }
);

/**
 * Enhanced Button Props Interface with Improved Type Safety
 */
interface ButtonProps 
  extends Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'disabled'>,
    VariantProps<typeof buttonVariants> {
  /**
   * Indicates loading state of the button
   */
  isLoading?: boolean;

  /**
   * Optional left-side icon
   */
  leftIcon?: ReactNode;

  /**
   * Optional right-side icon
   */
  rightIcon?: ReactNode;

  /**
   * Aria label for improved accessibility when button has no text
   */
  'aria-label'?: string;
}

/**
 * Advanced Button Component with Enhanced Accessibility and Performance
 * @param props Button component properties
 * @param ref Forwarded ref for button element
 */
const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ 
    className,
    variant,
    size,
    fullWidth,
    isLoading,
    leftIcon,
    rightIcon,
    children,
    'aria-label': ariaLabel,
    ...props
  }, ref) => {
    // Memoize button classes to prevent unnecessary re-renders
    const buttonClasses = useMemo(() => 
      cn(buttonVariants({ variant, size, fullWidth, className })),
      [variant, size, fullWidth, className]
    );

    // Determine if button is effectively disabled
    const isDisabled = isLoading || props.disabled;

    // Generate appropriate aria attributes
    const ariaProps = useMemo(() => ({
      'aria-disabled': isDisabled ? 'true' : undefined,
      'aria-busy': isLoading ? 'true' : undefined,
    }), [isDisabled, isLoading]);

    return (
      <button
        className={buttonClasses}
        ref={ref}
        disabled={isDisabled}
        {...ariaProps}
        {...props}
        // Ensure aria-label is present for icon-only buttons
        aria-label={ariaLabel || (size === 'icon' && typeof children === 'undefined' 
          ? 'Button' 
          : undefined)}
      >
        {isLoading ? (
          <Loader2 
            className="mr-2 h-4 w-4 animate-spin" 
            aria-hidden="true" 
          />
        ) : (
          <>
            {leftIcon && (
              <span 
                className="mr-2 inline-flex items-center" 
                aria-hidden="true"
              >
                {leftIcon}
              </span>
            )}
            {children}
            {rightIcon && (
              <span 
                className="ml-2 inline-flex items-center" 
                aria-hidden="true"
              >
                {rightIcon}
              </span>
            )}
          </>
        )}
      </button>
    );
  }
);

Button.displayName = "Button";

export { Button, buttonVariants };
export type { ButtonProps };