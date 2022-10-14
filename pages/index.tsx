import type { NextPage } from 'next'
import { useForm, FormProvider, useFormContext } from "react-hook-form";

const CARD_CONTENT = [
  {
    title: "Fill in the Form",
    description: "Your privacy is important to us, we never distribute or sell any of your personal information.",
  },
  {
    title: "Receive your rates in your inbox",
    description: "Within one business day you'll receive your rates in your inbox for free."
  },
  {
    title: "Get a better quote? Lock it in!",
    description: "Let us know within X amount of time if you'd like to lock in your rate, otherwise enjoy your peace of mind and increased negotiating power!"
  },
]

const ERROR_MESSAGES = {
  state: { required: "State is required" },
  hasLoanEstimate: { required: "Selection required" },
  loanEstimateFile: { required: "Please upload your loan estimate" },
  email: { required: "Email is required" },
  stateRequest: { required: "Let us know the state you'd like serviced next" },
  county: { required: "County is required" },
  goal: { required: "Please select a loan goal" },
  loanProduct: { required: "Please select a loan product" },
  loanType: { required: "Please select a loan type" },
  purchasePrice: { required: "Please enter a purchase price" },
  loanAmount: { required: "Please enter a loan amount" },
  secondLoan: { required: "Enter 0 if N/A" },
  houseType: { required: "Please select a type of house" },
  occupancy: { required: "Please select your occupancy type" },
  midFico: { required: "Please select a FICO score range" },
  reserves: { required: "Please select a reserve range" },
  pmi: { required: "Please select a PMI type" },
}


type ExplainerCardProps = {
  title: string;
  description: string;
  key?: number;
}

const ExplainerCard = ({title, description}: ExplainerCardProps) => {
  return(
    <div className="border rounded-sm bg-white border-stone-500 py-2 px-4 items-center text-center space-y-2">
      <h3 className="font-black">{title}</h3>
      <p>{description}</p>
    </div>
  )
}

const explainerCards = CARD_CONTENT.map((card, index) => {
  return <ExplainerCard {...card} key={index} />
})

type ErrorMessageProps = {
  field?: {
    message?: string;
  }
}

const ErrorMessage = ({ field }: ErrorMessageProps) => { 
  return(
    field ? <span className="text-red-600 text-sm">{field.message}</span> : null
  )
}

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
        <input {...register(field)} type="radio" id="Yes" value="Yes" />
        <span>Yes</span>
      </label>
      <label className={style("No")}>
        <input {...register(field)} type="radio" id="No" value="No" />
        <span>No</span>
      </label>
    </div>
  )
}


const FormField = () => {
  const { register, formState: {errors} } = useFormContext()

  return(
    <div className="space-y-8">
      <fieldset className="space-y-4 md:gap-x-8">
        <legend>Tell us about your mortgage</legend>
        <div className="space-y-1">
          <label htmlFor="goal">Goal</label>
          <div>
            <select {...register("goal", ERROR_MESSAGES.goal)} id="goal">
              <option value="">--</option>
              <option value="purchase loan">Purchase Loan</option>
              <option value="rate and term">Rate & Term</option>
              <option value="cash out">Cash Out</option>
              <option value="fha streamline">FHA Streamline</option>
              <option value="va irrl">VA IRRL</option>
            </select>
            <ErrorMessage field={errors?.goal} />
          </div>
        </div>

        <div className="space-y-1">
          <label htmlFor="loanProduct">Loan Product</label>
          <div>
            <select {...register("loanProduct", ERROR_MESSAGES.loanProduct)} id="loanProduct" >
              <option value="">--</option>
              <option value="30 year fixed">30 Year Fixed</option>
              <option value="20 year fixed">20 Year Fixed</option>
              <option value="15 year fixed">15 Year Fixed</option>
              <option value="10 year fixed">10 Year Fixed</option>
              <option value="5 year fixed">5 Year Fixed</option>
              <option value="3/1 adjustable">3/1 Adjustable</option>
              <option value="5/1 adjustable">5/1 Adjustable</option>
              <option value="7/1 adjustable">7/1 Adjustable</option>
              <option value="10/1 adjustable">10/1 Adjustable</option>
              <option value="3/6 adjustable">3/6 Adjustable</option>
              <option value="5/6 adjustable">5/6 Adjustable</option>
              <option value="7/6 adjustable">7/6 Adjustable</option>
              <option value="10/6 adjustable">10/6 Adjustable</option>
            </select>
            <ErrorMessage field={errors?.loanProduct} />
          </div>
        </div>

        <div className="space-y-1">
          <label htmlFor="loanType">Loan Type</label>
          <div>
            <select {...register("loanType", ERROR_MESSAGES.loanType)} id="loanType">
              <option value="">--</option>
              <option value="Conventional">Conventional</option>
              <option value="FHA">FHA</option>
              <option value="VA">VA</option>
              <option value="NonQM">NonQM</option>
              <option value="Jumbo">Jumbo</option>
            </select>
            <ErrorMessage field={errors?.loanType} />
          </div>
        </div>

        <div className="space-y-1">
          <label htmlFor="pmi">PMI</label>
          <div>
            <select {...register("pmi", ERROR_MESSAGES.pmi)} id="pmi">
              <option value="">--</option>
              <option value="not needed">Not Needed</option>
              <option value="borrower pays pmi">You Pay the PMI</option>
              <option value="lender pays pmi">Lender Pays the PMI</option>
            </select>
            <ErrorMessage field={errors?.pmi}/>
          </div>
        </div>

        <div className="space-y-1">
          <label htmlFor="loanAmount">Loan Amount</label>
          <div>
            <input {...register("loanAmount", ERROR_MESSAGES.loanAmount)} id="loanAmount" type="text" />
            <ErrorMessage field={errors?.loanAmount}/>
          </div>
        </div>

        <div className="space-y-1">
          <label htmlFor="secondLoan">Second Loan Amount (if any)</label>
          <div>
            <input {...register("secondLoan", ERROR_MESSAGES.secondLoan)} id="secondLoan" type="text"/>
            <ErrorMessage field={errors?.secondLoan}/>
          </div>
        </div>

      </fieldset>

      <fieldset className="space-y-4 md:gap-x-8">
        <legend>Tell us about the home</legend>

        <div className="space-y-1">
          <label htmlFor="houseType">House Type</label>
          <div>
            <select {...register("houseType", ERROR_MESSAGES.houseType)} id="houseType">
              <option value="">--</option>
              <option value="single family">Single Family</option>
              <option value="townhouse">Townhouse</option>
              <option value="condo">Condo</option>
              <option value="2 unit">2 Unit</option>
              <option value="3 unit">3 unit</option>
              <option value="4 unit">4 unit</option>
              <option value="PUD">PUD</option>
            </select>
            <ErrorMessage field={errors?.houseType}/>
          </div>
        </div>

        <div className="space-y-1">
          <label htmlFor="occupancy">Occupancy</label>
          <div>
            <select {...register("occupancy", ERROR_MESSAGES.occupancy)} id="occupancy" name="occupancy">
              <option value="">--</option>
              <option value="primary residence">Primary Residence</option>
              <option value="second home">Second Home</option>
              <option value="investment property">Investment Property</option>
            </select>
            <ErrorMessage field={errors?.occupancy}/>
          </div>
        </div>

        <div className="space-y-1">
          <label htmlFor="county">County</label>
          <div>
            <input {...register("county", ERROR_MESSAGES.county)} id="county" type="text"/>
            <ErrorMessage field={errors?.county} />
          </div>
        </div>

        <div className="space-y-1">
          <label htmlFor="purchasePrice">Purchase Price</label>
          <div>
            <input {...register("purchasePrice", ERROR_MESSAGES.purchasePrice)} id="purchasePrice" type="text"/>
            <ErrorMessage field={errors?.purchasePrice}/>
          </div>
        </div>
      </fieldset>

      <fieldset className="space-y-4 md:gap-x-8">
        <legend>Give us an idea of your finances</legend>
        <div className="space-y-1">
          <label htmlFor="midFico">Mid FICO</label>
          <div>
            <select {...register("midFico", ERROR_MESSAGES.midFico)} id="midFico">
              <option value="">--</option>
              <option value="760+">760+</option>
              <option value="740-759">740-759</option>
              <option value="720-739">720-739</option>
              <option value="700-719">700-719</option>
              <option value="680-699">680-699</option>
              <option value="660-679">660-679</option>
              <option value="640-659">640-659</option>
              <option value="620-639">620-639</option>
              <option value="600-619">600-619</option>
              <option value="580-599">580-599</option>
            </select>
            <ErrorMessage field={errors?.midFico}/>
          </div>
        </div>

        <div className="space-y-1">
          <label htmlFor="reserves">Reserves</label>
          <div>
            <select {...register("reserves", ERROR_MESSAGES.reserves)} id="reserves">
              <option value="">--</option>
              <option value="12+ months">12+ Months</option>
              <option value="9-12 months">9-12 Months</option>
              <option value="6-9 months">6-9 Months</option>
              <option value="3-6 months">3-6 Months</option>
              <option value="1-3 months">1-3 Months</option>
              <option value="0 months">0 Months</option>
            </select>
            <ErrorMessage field={errors?.reserves}/>
          </div>
        </div>

        <div className="space-y-1">
          <legend>Are you self-employed?</legend>
          <BinaryRadioButtons field="selfEmployed"  />
        </div>

        <div className="space-y-1">
          <legend>Do you have any impounds?</legend>
          <BinaryRadioButtons field="impounds"  />
        </div>
      </fieldset>

      <fieldset className="space-y-1 md:flex md:flex-col">
        <label htmlFor="email">Email Address</label>
        <div className="md:grid md:grid-cols-2 md:gap-x-8">
          <input {...register("email", ERROR_MESSAGES.email)} type="email" id="email"/>
          <ErrorMessage field={errors?.email}/>
        </div>
      </fieldset>
    </div>
  )
}

const StateField = () => {
  const { register, formState: {errors} } = useFormContext()

  return(
    <fieldset className="space-y-2">
      <legend>What state are you buying in?</legend>
      <div className="">
        <label htmlFor="state">State</label>
        <div className="flex flex-wrap">
          <select 
            id="region"
            {...register('state', ERROR_MESSAGES.state)}
            className="w-full"
          >
            <option value="" id="state">--</option>
            <option value="California" id="state">California</option>
            <option value="Texas" id="state">Texas</option>
            <option value="Florida" id="state">Florida</option>
            <option value="Virginia" id="state">Virginia</option>
            <option value="Maryland" id="state">Maryland</option>
            <option value="Tennessee" id="state">Tennessee</option>
            <option value="Other" id="state">Other</option>
          </select>
          <ErrorMessage field={errors?.state}/>
        </div>
      </div>

    </fieldset>

  )
}


const NoServiceField = () => {
  const { register, formState: {errors} } = useFormContext()

  return(
    <fieldset className="space-y-2">
      <div className="my-2">
        <h3 className="">Our apologies, we're unable to service your state at the moment.</h3>
        <p className="text-black/70">Please let us know which state you're located in so we know which states to serve next!</p>
      </div>

      <label htmlFor="stateRequest" className="">State:</label>
      <div className="flex flex-wrap">
        <input {...register("stateRequest", ERROR_MESSAGES.stateRequest)} id="stateRequest" type="text"/>
        <ErrorMessage field={errors?.stateRequest}/>
      </div>
      
      <label htmlFor="email">Email Address:</label>
      <div className="flex flex-wrap">
        <input {...register("email", ERROR_MESSAGES.email)} type="email" id="email"/>
        <ErrorMessage field={errors?.email}/>
      </div>
    </fieldset>
  )
}

const HasLoanEstimateField = () => {
  const { formState: {errors} } = useFormContext()

  return(
    <fieldset className="space-y-4 mb-8">
      <legend>Do you already have a loan estimate?</legend>
      <BinaryRadioButtons field="hasLoanEstimate"  />
      <ErrorMessage field={errors?.hasLoanEstimate}/>
    </fieldset>
  )
}

const UploadEstimateField = () => {
  const { register, formState: {errors} } = useFormContext()

  return(
    <fieldset className="grid grid-cols-1 gap-4">
      <div className="space-y-1">
        <label>Upload your loan estimate and we'll give you a second opinion:</label>
        <input type="file" id="loanEstimateFile" name="loanEstimateFile" className="col-start-2 w-full"/>
      </div>

      <div className="space-y-1">
        <label htmlFor="email">Email Address:</label>
        <input {...register("email", ERROR_MESSAGES.email)} type="email" id="email"/>
        <ErrorMessage field={errors?.email}/>
      </div>
    </fieldset>
  )
}

const Home: NextPage = () => {
  const methods = useForm();

  const onSubmit = (data: any) => console.log("Data:", data);

  const state = methods.watch("state")
  const hasLoanEstimate = methods.watch("hasLoanEstimate")

  return (
    <article className="w-5/6 md:w-4/6 mx-auto space-y-32 my-20">
      <section className="text-center">
        <h1>Double Check your Rate within 48 hours, No Credit Check Required</h1>
        <p>Sleep better at night knowing you got the best rate possible.</p>
      </section>

      <section className="space-y-8">
        <h2 className="text-center">How it Works</h2>
        <p>
          Double checking your rates is strings-free. We only take an email address (throwaway emails work perfect well) and will never spam you or sell your information. With this information we’re able to give you a rate that’s specific to you, unlike many services that simply provide general rate comparisons.
        </p>

        <div className="grid md:grid-cols-3 gap-8">
          {explainerCards}
        </div>

      </section>

      <section className="bg-white md:border md:p-8 md:max-w-screen-sm md:mx-auto">
        <h2 className="text-center">Double Check your Rates Now!</h2>
        <FormProvider {...methods}>
          <form onSubmit={methods.handleSubmit(onSubmit)} className="flex flex-col gap-4 md:mx-auto">
            <StateField />
            {state === "Other" && (
              <NoServiceField />
            )}

            {state !== undefined && state !== "" && state !== "Other" && (
              <div>
                <HasLoanEstimateField />
                {hasLoanEstimate === "Yes" && (
                  <UploadEstimateField />
                )}

                {hasLoanEstimate === "No" && (
                  <FormField /> 
                )}
              </div>
            )}

            <input type="submit" value="Submit" className="cursor-pointer mx-auto my-10"/>
          </form>
        </FormProvider>
      </section>

      <section>
        <h2>FAQs:</h2>
        <div>
          <h3>Am I able to use these rates and lock them in?</h3>
          <p>
            Yes! If your rates end up being lower than the rates offered by your current lender, and you're located in our serviced areas, we can get you started right away. Just reach out to us with your rate package and we'll get the ball rolling. 
          </p>
        </div>

        <div>
          <h3>How long will the rates shown be available?</h3>
          <p>The given rates will be honored up to X time after you've received them.</p>
        </div>

        <div>
          <h3>What are your serviced locations?</h3>
          <p>
            We are fully licensed to provide mortgages in California, Texas, Florida, Virginia, Maryland, and Tennessee.
          </p>
        </div>
      </section>
    </article>
  )
}

export default Home
