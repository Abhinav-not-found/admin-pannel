import clsx from "clsx"

const Heading = ({ children, className = "" }) => {
  return <div className={clsx("text-xl", className)}>{children}</div>
}

export default Heading

export const Bold = ({ children }) => {
  return <div className="font-semibold">{children}</div>
}
