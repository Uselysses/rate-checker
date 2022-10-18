import type { NextPage } from 'next'
import Image from 'next/image'
import peterPic from '../public/Peter-Face.png'
import yelpIcon from '../public/yelp_favicon.png'
import instagramIcon from '../public/Instagram_Glyph_Gradient.png'
import { useForm, FormProvider, useFormContext } from "react-hook-form";
import { DocumentCheckIcon, InboxArrowDownIcon, LockClosedIcon, ArrowRightIcon } from "@heroicons/react/24/solid";

const CARD_CONTENT = [
  {
    title: "Fill in the Form",
    description: "The only personal information we take is an email.",
    heroIcon: <DocumentCheckIcon />
  },
  {
    title: "Receive your rates in your inbox",
    description: "Within 48 hours we'll send over your mortgage rates.",
    heroIcon: <InboxArrowDownIcon/>
  },
  {
    title: "Get a better quote? Lock it in!",
    description: "Make the switch and save yourself thousands.",
    heroIcon: <LockClosedIcon/>,
  },
]

const ERROR_MESSAGES = {
  state: { required: "State is required" },
  hasLoanEstimate: { required: "Selection required" },
  loanEstimateFile: { required: "Please upload your loan estimate" },
  email: { required: "Email is required" },
  stateRequest: { required: "Let us know the state you&apos;d like serviced next" },
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
}


type ExplainerCardProps = {
  title: string;
  heroIcon: JSX.Element;
  description: string;
  key?: number;
}

const ExplainerCard = ({title, description, heroIcon}: ExplainerCardProps) => {
  return(
    <div className="flex flex-col items-center space-y-1">
      <figure className="text-blue-500 w-20 h-20">{heroIcon}</figure>
      <h3 className="font-semibold text-center">{title}</h3>
      <p className="text-center text-black/80">{description}</p>
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
        <input {...register(field)} type="radio" id="Yes" value="Yes" className="accent-blue-500" />
        <span>Yes</span>
      </label>
      <label className={style("No")}>
        <input {...register(field)} type="radio" id="No" value="No" className="accent-blue-500" />
        <span>No</span>
      </label>
    </div>
  )
}

type LoanOfficerProfileProps = {
  photo: any;
  yelpLink: string;
  instagramLink: string;
  name: string;
  description: string;
  roles: string;
}

const LoanOfficerProfile = ({ photo, yelpLink, instagramLink, name, description, roles }: LoanOfficerProfileProps) => {
  return(
    <div className="flex flex-col col-start-2 border border-slate-200 shadow-md drop-shadow-lg rounded-md bg-white/90 px-8 pt-8 pb-4 space-y-1">
      <div className="mx-auto border border-slate-200 shadow-lg rounded-full overflow-hidden h-24 w-24 -mt-20 mb-2">
        <Image src={photo} width={50} height={50} layout="responsive"/>
      </div>
      <h3>{name}</h3>
      <p className="text-black/50">{roles}</p>
      <p>{description}</p>
      <div className="space-x-2 pt-2">
        <a target="_blank" href={yelpLink}>
          <Image src={yelpIcon} width={25} height={25} className=""/>
        </a>
        <a target="_blank" href={instagramLink}>
          <Image src={instagramIcon} width={25} height={25} className="" />
        </a>
      </div>
    </div>
  )
}

const FormField = () => {
  const { register, formState: {errors} } = useFormContext()

  return(
    <div className="space-y-8">
      <fieldset className="space-y-4 md:gap-x-8">
        <legend>Tell us about your mortgage</legend>

        <div className="space-y-1 md:col-span-2">
          <label htmlFor="loanProduct">Loan Product (select multiple if you want quotes for those products)</label>
          <div>
            <select {...register("loanProduct", ERROR_MESSAGES.loanProduct)} id="loanProduct" multiple>
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
          <legend className="text-slate-600">Are you self-employed?</legend>
          <BinaryRadioButtons field="selfEmployed"  />
        </div>

        <div className="space-y-1">
          <legend className="text-slate-600">Do you want an <a target="_blank" className="text-blue-500 hover:text-blue-400" href="https://www.investopedia.com/articles/mortgages-real-estate/09/mortgage-impound-accounts.asp">impound account?</a></legend>
          <BinaryRadioButtons field="impounds"  />
        </div>

        <div className="space-y-1">
          <label htmlFor="email">Email Address:</label>
          <div>
            <input {...register("email", ERROR_MESSAGES.email)} type="email" id="email"/>
            <ErrorMessage field={errors?.email}/>
          </div>
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
    <fieldset className="space-y-2 gap-x-8">
      <div className="md:col-span-2 my-2">
        <h3 className="">Our apologies, we&apos;re unable to service your state at the moment.</h3>
        <p className="text-black/70">Please let us know which state you&apos;re located in so we know which states to serve next! We&apos;ll let you know as soon as we&apos;re able to serve you.</p>
      </div>

      <div>
        <label htmlFor="stateRequest" className="">State:</label>
        <div className="flex flex-wrap">
          <input {...register("stateRequest", ERROR_MESSAGES.stateRequest)} id="stateRequest" type="text"/>
          <ErrorMessage field={errors?.stateRequest}/>
        </div>
      </div>
      
      <div>
        <label htmlFor="email">Email Address:</label>
        <div className="flex flex-wrap">
          <input {...register("email", ERROR_MESSAGES.email)} type="email" id="email"/>
          <ErrorMessage field={errors?.email}/>
        </div>
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
    <fieldset className="grid grid-cols-1 md:grid-cols-2 gap-4">
      <div className="space-y-1 col-span-2">
        <label>Your previous loan estimate gives us most of the information we need, with just a few general details below, we can give you your rate quote.</label>
        <input type="file" id="loanEstimateFile" name="loanEstimateFile" className="w-full md:w-1/2"/>
      </div>

      <div className="space-y-1 col-span-2">
        <label htmlFor="occupancy">Occupancy</label>
        <div className="w-full md:w-1/2">
          <select {...register("occupancy", ERROR_MESSAGES.occupancy)} id="occupancy" name="occupancy">
            <option value="">--</option>
            <option value="primary residence">Primary Residence</option>
            <option value="second home">Second Home</option>
            <option value="investment property">Investment Property</option>
          </select>
          <ErrorMessage field={errors?.occupancy}/>
        </div>
      </div>

      <fieldset className="space-y-4 col-span-2 md:gap-x-8">
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
          <legend className="text-slate-600">Are you self-employed?</legend>
          <BinaryRadioButtons field="selfEmployed"  />
        </div>

        <div className="space-y-1">
          <legend className="text-slate-600">Do you want an <a target="_blank" className="text-blue-500 hover:text-blue-400" href="https://www.investopedia.com/articles/mortgages-real-estate/09/mortgage-impound-accounts.asp">impound account?</a></legend>
          <BinaryRadioButtons field="impounds"  />
        </div>

        <div className="space-y-1">
          <label htmlFor="email">Email Address:</label>
          <div>
            <input {...register("email", ERROR_MESSAGES.email)} type="email" id="email"/>
            <ErrorMessage field={errors?.email}/>
          </div>
        </div>

      </fieldset>

    </fieldset>
  )
}

const Home: NextPage = () => {
  const methods = useForm();

  const onSubmit = (data: any) => console.log("Data:", data);

  const state = methods.watch("state")
  const hasLoanEstimate = methods.watch("hasLoanEstimate")

  return (
    <article className="space-y-32">
      <div className="bg-gradient-to-r from-sky-500 to-blue-700 py-20 border-b-2 border-blue-400 shadow-md drop-shadow-lg">
        <section className="text-center">
          <h1 className="text-white/90">Double Check your Rate within 48 hours <br/> No Credit Pull Required</h1>
          <p className="text-amber-300 font-semibold">Sleep better at night knowing you got the best rate possible</p>
          <div className="space-x-8">
            <a 
              className="primary-button"
              href="#form"
            >
              I want a Second Opinion!
            </a>
          </div>
        </section>
      </div>

      <section className="space-y-8">
        <h2 className="text-center">Double checking your rate is strings-free!</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {explainerCards}
        </div>
      </section>

      <section className="space-y-8">
        <h2 className="text-center">You could save thousands on your mortgage</h2>
        <ul className="md:grid md:grid-cols-2 space-y-4 md:space-y-0 md:gap-4">
          <div className="flex space-x-4 items-center">
            <ArrowRightIcon className="h-20 w-20"/>
            <li className="text-black/80">
              According to <a className="text-blue-500 hover:text-blue-400" href="https://www.freddiemac.com/research/insight/20180417-consumers-leaving-money">research by Freddie Mac</a> <strong>nearly half of all home buyers pick the first lender they find</strong> without shopping for a better rate.
            </li>
          </div>
          <div className="flex space-x-4 items-center">
            <ArrowRightIcon className="h-20 w-20"/>
            <li className="text-black/80">
              Not all lenders are created equal! <strong>Rates vary from lender to lender</strong>, by not getting a second opinion you&apos;re potentially leaving thousands of dollars on the table.
            </li>
          </div>
        </ul>
      </section>

      <section id="form" className="border-t-8 border-blue-400 rounded-md md:p-8 bg-white/30 md:max-w-screen-sm md:mx-auto shadow-lg p-4">
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

            <input type="submit" value="Submit" className="primary-button cursor-pointer mx-auto my-10"/>
          </form>
        </FormProvider>
      </section>


      <section>
        <h2 className="text-center">Want to lock it in? We&apos;ll set you up with an experienced loan officer</h2>
        <div className="grid md:grid-cols-3 pt-10">
          <LoanOfficerProfile 
            photo={peterPic} 
            yelpLink="https://www.yelp.com/biz/khoury-finance-los-angeles"  
            instagramLink="https://www.instagram.com/khouryfinance/"
            name="Peter Khoury"
            description="Peter Khoury is a Loan Officer and Realtor who&apos;s been in the industry for over 15 years."
            roles="Loan Officer, Realtor, Founder"
          />
        </div>
      </section>

      <section>
        <h2>FAQs:</h2>
        <div>
          <h3>Am I able to use these rates and lock them in?</h3>
          <p>
            Yes! If your rates end up being lower than the rates offered by your current lender, and you&apos;re located in our serviced areas, we can get you started right away. Just reach out to us with your rate package and we&apos;ll get the ball rolling. 
          </p>
        </div>

        <div>
          <h3>How long will the rates shown be available?</h3>
          <p>The given rates will be honored up to X time after you&apos;ve received them.</p>
        </div>

        <div>
          <h3>What are your serviced locations?</h3>
          <p>
            We are fully licensed to provide mortgages in California, Texas, Florida, Virginia, Maryland, and Tennessee.
          </p>
        </div>
        <div>
          <h3>Is this a loan application?</h3>
          <p>
            No. This service provides mortgage rate quotes without taking in any personally identifying information, and is not a loan application.
          </p>
        </div>

      </section>

      <div className="py-16 bg-gradient-to-r from-sky-700 to-blue-900">
        <section className="md:grid md:grid-cols-4 space-y-0 text-white/90 md:gap-32">
          <div className="space-y-4 col-span-2">
            <h3>Rate checker is a service provided by © Khoury Finance.</h3>

            <div>
              <h4>Licensed States</h4>
              <p>California, Texas, Florida, Virginia, Maryland, Tennessee</p>
            </div>

            <div className="flex space-x-8"> 
              <div>
                <h4>License</h4>
                <p>#01809854</p>
              </div>

              <div>
                <h4>NMLS</h4>
                <p>#308946</p>
              </div>
            </div>

            <p>2022 Khoury Finance @ 6303 Owensmouth Avenue 10th FL. Woodland Hills CA 91367</p>
          </div>

          <div className="flex flex-col space-y-1 pt-8 md:pt-0">
            <h3>Legal</h3>
            <a className="hover:text-white/50" target="_blank" href="https://www.khouryfinance.com/privacy">Privacy Policy</a>
            <a className="hover:text-white/50" target="_blank" href="https://www.khouryfinance.com/accessibility">Accessibility Statement</a>
            <a className="hover:text-white/50" target="_blank" href="https://www.khouryfinance.com/fair-housing-pledge">Fair Housing Pledge</a>
          </div>

          <div className="flex flex-col space-y-1 pt-8 md:pt-0">
            <h3>Resources</h3>
            <a className="hover:text-white/50" target="_blank" href="https://www.khouryfinance.com/">KhouryFinance.com</a>
            <a className="hover:text-white/50" target="_blank" href="https://wiki.khouryfinance.com/">Wiki</a>
          </div>
        </section>
      </div>
    </article>
  )
}

export default Home
