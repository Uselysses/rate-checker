const VALID_STATES = new Set(["California", "Maryland", "Tennessee", "Texas", "Florida", "Virginia", "Other"])

const VALID_GOALS = new Set(["Rate & Term", "Cash Out", "Purchase Loan", "FHA Streamline", "VA IRRL"])

const VALID_LOAN_TYPES = new Set(["Conventional", "FHA", "VA", "NonQM", "Jumbo"])

const VALID_HOUSE_TYPES = new Set(["Single Family", "Townhouse", "Condo", "2 Unit", "3 Unit", "4 Unit", "PUD"])

const VALID_OCCUPANCIES = new Set(["Primary Residence", "Second Home", "Investment Property"])

const VALID_FICOS = new Set(["760+", "740-759", "720-739", "700-719", "680-699", "660-679", "640-659", "620-639", "600-619", "580-599"])

const VALID_RESERVES = new Set(["12+ Months", "9-12 Months", "6-9 Months", "3-6 Months", "1-3 Months", "0 Months"])

const VALID_PMIS = new Set(["You Pay the PMI", "Lender Pays the PMI", "Not Needed"])


const formValidations = {
  state: (value: unknown): boolean => {
    if (typeof value === "string") {
      return VALID_STATES.has(value)
    } throw new Error("Invalid state")
  },
  county: (value: unknown): boolean => {
    if (typeof value === "string") {
      return true
    } throw new Error("Invalid county value")
  },
  hasLoanEstimate: (value: unknown): boolean => {
    if (typeof value === "boolean") {
      return true
    } throw new Error("Must be selected")
  },
  loanEstimateFile: (value: unknown): boolean => {
    return true
  },
  goal: (value: unknown): boolean => {
    if (typeof value === "string") {
      return VALID_GOALS.has(value)
    } throw new Error("Must be valid goal")
  },
  loanType: (value: unknown): boolean => {
    if (typeof value === "string") {
      return VALID_LOAN_TYPES.has(value)
    } throw new Error("Must be a valid loan type")
  },
  purchasePrice: (value: unknown): boolean => {
    if (typeof value === "number") {
      return true
    } throw new Error("Purchase price must be a number")
  },
  loanAmount: (value: unknown): boolean => {
    if (typeof value === "number") {
      return true
    } throw new Error("Loan amount must be a number")
  },
  hasSecondLoan: (value: unknown): boolean => {
    if (typeof value === "boolean") {
      return true
    } throw new Error("Second loan has an invalid value")
  },
  houseType: (value: unknown): boolean => {
    if (typeof value === "string") {
      return VALID_HOUSE_TYPES.has(value)
    } throw new Error("Must be a valid house type")
  },
  occupancy: (value: unknown): boolean => {
    if (typeof value === "string") {
      return VALID_OCCUPANCIES.has(value)
    } throw new Error("Must be a valid occupancy type")
  },
  midFico: (value: unknown): boolean => {
    if (typeof value === "string") {
      return VALID_FICOS.has(value) 
    } throw new Error("Must be a valid FICO score")
  },
  isSelfEmployed: (value: unknown): boolean => {
    if (typeof value === "boolean") {
      return true
    } throw new Error("Self employment must have a valid selection")
  },
  hasImpounds: (value: unknown): boolean => {
    if (typeof value === "boolean") {
      return true
    } throw new Error("Impounds must have a valid selection")
  },
  reserves: (value: unknown): boolean => {
    if (typeof value === "string") {
      return VALID_RESERVES.has(value)
    } throw new Error("Reserves must have a valid selection")
  },
  pmi: (value: unknown): boolean => {
    if (typeof value === "string") {
      return VALID_PMIS.has(value)
    } throw new Error("PMI must have a valid selection")
  },
  email: (value: unknown): boolean => {
    if (typeof value === "string") {
      return true
    } throw new Error("Email format not accepted")
  },
  stateRequest: (value: unknown): boolean => {
    if (typeof value === "string") {
      return true
    } throw new Error("State must be a valid string")
  }

}

const isElementFilled = (element: [string, unknown]) => {
  const [_key, value] = element
  const isFilled = value !== null
  return isFilled
}

const isFieldValid = (element: [string, unknown]) => {
  //I need this function to take ANY key, and check if it's valid
  const [key, value] = element
  return formValidations[key as keyof typeof formValidations]
}

export type FormData = {
  state: "California" | "Maryland" | "Tennessee" | "Texas" | "Florida" | "Virginia" | "Other" | null;
  county: string | null;
  hasLoanEstimate: "yes" | "no" | null;
  loanEstimateFile: string | null;
  goal: "Rate & Term" | "Cash Out" | "Purchase Loan" | "FHA Streamline" | "VA IRRL" | null;
  loanType: "Conventional" | "FHA" | "VA" | "NonQM" | "Jumbo" | null;
  purchasePrice: number | null,
  loanAmount: number | null,
  hasSecondLoan: boolean | null,
  houseType: "Single Family Residence" | "Townhouse" | "2 unit" | "3 unit" | "4 unit" | "Condo" | "PUD" | null
  occupancy: "Primary Residence" | "Secondary Residence" | "Investment Property" | null
  midFico: "760+" | "740-759" | "720-739" | "700-719" | "680-699" | "660-679" | "640-659" | "620-639" | "600-619" | "580-599" | null,
  isSelfEmployed: boolean | null,
  hasImpounds: boolean | null,
  reserves: "12+ Months" | "9-12 Months" | "6-9 Months" | "3-6 Months" | "1-3 Months" | "0 Months" | null,
  pmi: "You pay the PMI" | "Lender pays the PMI" | "Not needed" | null
  email: string | null,
  stateRequest: string | null,
}

export const defaultFormData: FormData = {
  state: null,
  county: null,
  hasLoanEstimate: null,
  loanEstimateFile: null,
  goal: null,
  loanType: null,
  purchasePrice: null,
  loanAmount: null,
  hasSecondLoan: null,
  houseType: null,
  occupancy: null,
  midFico: null,
  isSelfEmployed: null,
  hasImpounds: null,
  reserves: null,
  pmi: null,
  email: null,
  stateRequest: null
}


export const isElementValid = (element: [string, unknown]) => {
  return isElementFilled(element) && isFieldValid(element)
}

export const isFormValid = (form: Data): boolean => {
  return Object.entries(form).every(isElementValid)
}






