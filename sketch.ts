
const STEPS = {
  region: undefined,
  uploadPrompt: undefined,
  noService: undefined,
  fileUpload: undefined,
  form: undefined,
}

const steps: keyof typeof STEPS = Object.keys(STEPS) as unknown as keyof typeof STEPS

const TRANSITIONS = [
  {
    start: "region",
    end: "uploadPrompt"
  },
  {
    start: "region",
    end: "noService",
  },
  {
    start: "uploadPrompt",
    end: "fileUpload"
  },
  {
    start: "uploadPrompt",
    end: "form"
  },
]


const transitionTo = (currentStep: keyof typeof STEPS, nextStep: keyof typeof STEPS) => {
  TRANSITIONS.forEach((transition) => {
    const isValidStart = currentStep === transition.start
    const isValidEnd = nextStep === transition.end

    if (isValidStart && isValidEnd) throw new Error("Invalid transition")
  })

  return nextStep
}

//let currentStep: keyof typeof STEPS = "region"
//currentStep = transitionTo(currentStep, "noService")

// let step = {
//   currentStep: "region" as keyof typeof STEPS,
//   transitionTo(nextStep: keyof typeof STEPS) {
//     this.currentStep = transitionTo(this.currentStep, nextStep)
//   }
// }

// step.transitionTo("noService")

// step.transitionTo("fileUpload")

class Step {
  currentStep: keyof typeof STEPS
  constructor(currentStep = steps[0] as keyof typeof STEPS){
    this.currentStep = currentStep
  }
  transitionTo(nextStep: keyof typeof STEPS) {
    this.currentStep = transitionTo(this.currentStep, nextStep)
  }
}

const step = new Step("region")

step.transitionTo("uploadPrompt")
