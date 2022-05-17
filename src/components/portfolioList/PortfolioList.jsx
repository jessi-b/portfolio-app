import '../portfolioList/portfolioList.scss'

export default function PortfolioList({id, heading, active, setSelected}) {
  return (
    <li className={active ? 'portfolioList active' : 'portfolioList'} onClick={() => setSelected(id)}>{heading}</li>
  )
}