import clsx from "clsx"

const Tag = ({ className }) => {
  return (
    <span
      className={clsx(
        "text-[10px] bg-blue-500 p-1 py-0.5 font-semibold uppercase rounded absolute top-0 -right-9",
        className,
      )}
    >
      Pro
    </span>
  )
}

export default Tag
