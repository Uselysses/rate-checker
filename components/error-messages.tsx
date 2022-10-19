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


export default ErrorMessage
