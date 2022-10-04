import type { NextPage } from 'next'

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



const Home: NextPage = () => {
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

      <section className="bg-white border border-stone-500 p-4 md:w-2/3 md:mx-auto">
        <h2 className="text-center">Double Check your Rates Now!</h2>
        <form className="flex flex-col gap-4 md:w-2/3 md:mx-auto">
          <fieldset>
            <label htmlFor="state">State:</label>
            <select className="">
              <option value="California">California</option>
              <option value="Texas">Texas</option>
              <option value="Florida">Florida</option>
              <option value="Virginia">Virginia</option>
              <option value="Maryland">Maryland</option>
              <option value="Tennessee">Tennessee</option>
              <option value="Other">Other</option>
            </select>
          </fieldset>

          <fieldset>
            <label htmlFor="county">County:</label>
            <input id="county" name="county" className=""/>
          </fieldset>

          <fieldset>
            <label htmlFor="goal">Goal:</label>
            <select id="goal" name="goal">
              <option value="purchase loan">Purchase Loan</option>
              <option value="rate and term">Rate & Term</option>
              <option value="cash out">Cash Out</option>
              <option value="fha streamline">FHA Streamline</option>
              <option value="va irrl">VA IRRL</option>
            </select>
          </fieldset>

          <fieldset>
            <label htmlFor="loan product">Loan Product:</label>
            <select id="loan product" name="loan product">
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
          </fieldset>

          <fieldset>
            <label htmlFor="loan type">Loan Type:</label>
            <select id="loan type" name="loan type">
              <option value="Conventional">Conventional</option>
              <option value="FHA">FHA</option>
              <option value="VA">VA</option>
              <option value="NonQM">NonQM</option>
              <option value="Jumbo">Jumbo</option>
            </select>
          </fieldset>

          <fieldset>
            <label htmlFor="purchase price">Purchase Price:</label>
            <input id="purchase price" name="purchase price"/>
          </fieldset>

          <fieldset>
            <label htmlFor="loan amount">Loan Amount:</label>
            <input id="loan amount" name="loan amount"/>
          </fieldset>

          <fieldset>
            <label htmlFor="2nd loan">Second Loan (if any):</label>
            <input id="2nd loan" name="2nd loan"/>
          </fieldset>

          <fieldset>
            <label htmlFor="house type">House Type:</label>
            <select id="house type" name="house type">
              <option value="single family">Single Family</option>
              <option value="townhouse">Townhouse</option>
              <option value="condo">Condo</option>
              <option value="2 unit">2 Unit</option>
              <option value="3 unit">3 unit</option>
              <option value="4 unit">4 unit</option>
              <option value="PUD">PUD</option>
            </select>
          </fieldset>

          <fieldset>
            <label htmlFor="occupancy">Occupancy:</label>
            <select id="occupancy" name="occupancy">
              <option value="primary residence">Primary Residence</option>
              <option value="second home">Second Home</option>
              <option value="investment property">Investment Property</option>
            </select>
          </fieldset>

          <fieldset>
            <label htmlFor="mid fico">Mid FICO:</label>
            <select id="mid fico" name="mid fico">
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
          </fieldset>

          <fieldset className="flex flex-row justify-between">
            <label htmlFor="self employed">Self Employed?</label>
            <input type="checkbox" id="self employed" name="self employed"/>
          </fieldset>

          <fieldset className="flex flex-row justify-between">
            <label htmlFor="impounds">Impounds?</label>
            <input type="checkbox" id="impounds" name="impounds"/>
          </fieldset>

          <fieldset>
            <label htmlFor="reserves">Reserves:</label>
            <select id="reserves" name="reserves">
              <option value="">12+ Months</option>
              <option value="">9-12 Months</option>
              <option value="">6-9 Months</option>
              <option value="">3-6 Months</option>
              <option value="">1-3 Months</option>
              <option value="">0 Months</option>
            </select>
          </fieldset>

          <fieldset>
            <label htmlFor="pmi">PMI:</label>
            <select id="pmi" name="pmi">
              <option value="not needed">Not Needed</option>
              <option value="borrower pays pmi">You Pay the PMI</option>
              <option value="lender pays pmi">Lender Pays the PMI</option>
            </select>
          </fieldset>

          <input type="submit" value="Submit" className="cursor-pointer mx-auto my-10"/>
        </form>
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
