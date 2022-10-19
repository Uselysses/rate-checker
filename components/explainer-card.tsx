

type ExplainerCardProps = {
  title: string;
  heroIcon: JSX.Element;
  description: string;
  key?: number;
}

const ExplainerCard = ({title, description, heroIcon}: ExplainerCardProps) => {
  return(
    <div className="flex flex-col items-center space-y-1">
      <figure className="text-primary-500 w-20 h-20">{heroIcon}</figure>
      <h3 className="font-semibold text-center">{title}</h3>
      <p className="text-center text-black/80">{description}</p>
    </div>
  )
}


export default ExplainerCard
