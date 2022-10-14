import React from "react";
import { useForm } from "react-hook-form";

export default function App() {
  const { register, watch, formState: { errors }, handleSubmit } = useForm();

  const onSubmit = (data: any) => console.log("data:", data);

  const state = watch("state")
  const hasLoanEstimate = watch("hasLoanEstimate")


  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <select {...register("state")}>
          <option value="">--</option>

          <option value="California">California</option>
          <option value="Other">Other</option>
        </select>
        
        {state === "Other" && (
        <div>
          <h3>Sorry, we're unable to service your state at the moment.</h3>
        </div>
        )}

        {state !== undefined && state !== "" && state !== "Other" && (
        <div>
          <label>Do you already have a current loan estimate?</label>
          <label htmlFor="hasLoanEstimateYes">Yes</label>
          <input {...register("hasLoanEstimate")} type="radio" value="Yes" id="hasLoanEstimateYes" />
          <label htmlFor="hasLoanEstimateNo">No</label>
          <input {...register("hasLoanEstimate")} type="radio" value="No" id="hasLoanEstimateNo"/>

          {hasLoanEstimate === "Yes" && (
            <div>
              <label>Please upload your loan estimate</label>
              <input {...register("loanEstimateFile")} type="file" />
            </div>
          )}

          {hasLoanEstimate === "No" && (
            <div>
                <label>Here's the full form</label>
            </div>
          )}
        </div>

        )}



        <input type="submit" />
      </form>
    </>
  );
}

