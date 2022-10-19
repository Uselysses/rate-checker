import { useFormContext } from 'react-hook-form'

type CheckboxesProps = {
  field: string;
  options: {
    [key: string]: string;
  };
}

const Checkboxes = ({ field, options }: CheckboxesProps) => {
  const { register, watch } = useFormContext();

  const values: string[] | boolean | undefined = watch(field)

  const checkboxes: JSX.Element[] = Object.entries(options).map(([key, value]) => {

    let selectedStyle: string = "border border-neutral-300 rounded-md py-1 px-2"

    if (typeof values !== "boolean" && values !== undefined) {
      const isPresentInValues: boolean = values.includes(value)
      if (isPresentInValues) {
        selectedStyle = selectedStyle + " bg-primaryAccent-100 shadow-md"
      }
    }

    return(
      <li className={selectedStyle}>
        <label className="space-x-2 w-full">
          <input {...register(field)} type="checkbox" value={value} className="accent-primary-500" />
          <span>{key}</span>
        </label>
      </li>
    )
  })

  return(
    <ul className="space-y-2">
      {checkboxes}
    </ul>
  )
}

export default Checkboxes;
