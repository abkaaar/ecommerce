import * as React from "react"
import { twJoin, twMerge } from "tailwind-merge"
import { ArrowLeft, ArrowRight, ArrowUpRight, Calendar, CaseLower, Check, ChevronDown, ChevronLeft, ChevronRight, ChevronUp, CreditCard, Heart, Info, Loader, MapPin, Menu, Minus, Package, Plus, Receipt, Search, Sliders, Trash, Truck, Undo, User, X } from "lucide-react"

export type IconNames =
  | "arrow-left"
  | "arrow-right"
  | "arrow-up-right"
  | "calendar"
  | "case"
  | "check"
  | "chevron-down"
  | "chevron-left"
  | "chevron-right"
  | "chevron-up"
  | "close"
  | "credit-card"
  | "heart"
  | "info"
  | "loader"
  | "map-pin"
  | "menu"
  | "minus"
  | "package"
  | "plus"
  | "receipt"
  | "search"
  | "sliders"
  | "trash"
  | "truck"
  | "undo"
  | "user"

const baseClasses = "w-4 h-auto shrink-0"

export type IconProps = React.ComponentPropsWithoutRef<"svg"> & {
  name: IconNames
  status?: number
  wrapperClassName?: string
}

export const Icon: React.FC<IconProps> = ({
  name,
  status = 0,
  wrapperClassName,
  className,
  ...rest
}) => (
  <div className={twMerge("relative shrink-0", wrapperClassName)}>
    {Boolean(status) && (
      <div
        className={twJoin(
          "absolute -right-1 -top-0.5 leading-none rounded-full flex items-center justify-center w-4 h-4 bg-black text-white text-[0.625rem]",
          status > 99 && "!text-[0.5rem]"
        )}
      >
        <span>{status > 99 ? "+99" : status}</span>
      </div>
    )}
    {name === "arrow-left" && (
      <ArrowLeft {...rest} className={twMerge(baseClasses, className)} />
    )}
    {name === "arrow-right" && (
      <ArrowRight {...rest} className={twMerge(baseClasses, className)} />
    )}
    {name === "arrow-up-right" && (
      <ArrowUpRight {...rest} className={twMerge(baseClasses, className)} />
    )}
    {name === "calendar" && (
      <Calendar {...rest} className={twMerge(baseClasses, className)} />
    )}
    {name === "case" && (
      <CaseLower {...rest} className={twMerge(baseClasses, className)} />
    )}
    {name === "check" && (
      <Check {...rest} className={twMerge(baseClasses, className)} />
    )}
    {name === "chevron-down" && (
      <ChevronDown {...rest} className={twMerge(baseClasses, className)} />
    )}
    {name === "chevron-left" && (
      <ChevronLeft {...rest} className={twMerge(baseClasses, className)} />
    )}
    {name === "chevron-right" && (
      <ChevronRight {...rest} className={twMerge(baseClasses, className)} />
    )}
    {name === "chevron-up" && (
      <ChevronUp {...rest} className={twMerge(baseClasses, className)} />
    )}
    {name === "close" && (
      <X {...rest} className={twMerge(baseClasses, className)} />
    )}
    {name === "credit-card" && (
      <CreditCard {...rest} className={twMerge(baseClasses, className)} />
    )}
    {name === "heart" && (
      <Heart {...rest} className={twMerge(baseClasses, className)} />
    )}
    {name === "info" && (
      <Info {...rest} className={twMerge(baseClasses, className)} />
    )}
    {name === "loader" && (
      <Loader {...rest} className={twMerge(baseClasses, className)} />
    )}
    {name === "map-pin" && (
      <MapPin {...rest} className={twMerge(baseClasses, className)} />
    )}
    {name === "menu" && (
      <Menu {...rest} className={twMerge(baseClasses, className)} />
    )}
    {name === "minus" && (
      <Minus {...rest} className={twMerge(baseClasses, className)} />
    )}
    {name === "package" && (
      <Package {...rest} className={twMerge(baseClasses, className)} />
    )}
    {name === "plus" && (
      <Plus {...rest} className={twMerge(baseClasses, className)} />
    )}
    {name === "receipt" && (
      <Receipt {...rest} className={twMerge(baseClasses, className)} />
    )}
    {name === "search" && (
      <Search {...rest} className={twMerge(baseClasses, className)} />
    )}
    {name === "sliders" && (
      <Sliders {...rest} className={twMerge(baseClasses, className)} />
    )}
    {name === "trash" && (
      <Trash {...rest} className={twMerge(baseClasses, className)} />
    )}
    {name === "truck" && (
      <Truck {...rest} className={twMerge(baseClasses, className)} />
    )}
    {name === "undo" && (
      <Undo {...rest} className={twMerge(baseClasses, className)} />
    )}
    {name === "user" && (
      <User {...rest} className={twMerge(baseClasses, className)} />
    )}
  </div>
)