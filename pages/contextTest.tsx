import React from "react";
import { useForm, FormProvider, useFormContext } from "react-hook-form";

export default function App() {
  const methods = useForm();
  const onSubmit = (data: any) => console.log(data);

  console.log(methods)

  return (
    <FormProvider {...methods} > // pass all methods into the context
      <form onSubmit={methods.handleSubmit(onSubmit)}>
        <NestedInput />
        <input type="submit" />
      </form>
    </FormProvider>
  );
}

function NestedInput() {
  const { register, watch } = useFormContext(); // retrieve all hook methods

  const value = watch("test")
  
  console.log("value:", value)

  return <input {...register("test")} />;
}
