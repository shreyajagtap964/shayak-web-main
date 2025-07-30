import clsx from "clsx";

export function Container({
  className,
  ...props
}: React.ComponentPropsWithoutRef<"div">) {
  return (
    <div
      className={clsx("mx-auto bg-[#fefff4]", className)} // Add the background color here
      {...props}
    />
  );
}