import { useFormContext } from 'react-hook-form'

type BinaryRadioButtonsProps = {
  field: string;
}

const BinaryRadioButtons = ({ field }: BinaryRadioButtonsProps ) => {
  const { register, watch } = useFormContext();
  const value = watch(field)

  const style = (id: string) => {
    if (value === "Yes" && id === "Yes") {
      return "radio-card radio-card--active"
    } else if (value === "No" && id === "No") {
      return "radio-card radio-card--active"
    } else {
      return "radio-card"
    }
  }

  return(
    <div className="grid grid-cols-2 mt-2 gap-x-2">
      <label className={style("Yes")}>
        <input {...register(field)} type="radio" id="Yes" value="Yes" className="accent-primary-500" />
        <span>Yes</span>
      </label>
      <label className={style("No")}>
        <input {...register(field)} type="radio" id="No" value="No" className="accent-primary-500" />
        <span>No</span>
      </label>
    </div>
  )
}

export default BinaryRadioButtons

