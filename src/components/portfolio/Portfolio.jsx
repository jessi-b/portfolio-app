import { useState, useEffect } from 'react';
import '../portfolio/portfolio.scss'
import PortfolioList from '../../components/portfolioList/PortfolioList'
import { featuredPortfolio, jsPortfolio, cPortfolio, reactPortfolio } from '../../projects';


export default function Portfolio() {
  const [selected, setSelected] = useState('featured');
  const [project, setProject] = useState([]);
  const list = [{
    id: 'featured',
    heading: 'Featured'
  },{
    id: 'js',
    heading: 'Javascript'
  },{
    id: 'c#',
    heading: 'C#/.NET'
  },{
    id: 'react',
    heading: 'React.js'
  }];
  useEffect(() => {
    switch(selected) {
      case 'featured': setProject(featuredPortfolio);
      break; 
      case 'js': setProject(jsPortfolio);
      break; 
      case 'c#': setProject(cPortfolio);
      break; 
      case 'react': setProject(reactPortfolio);
      break; 
      default:setProject(featuredPortfolio);
    }
  }, [selected])
  return (
    <div className='portfolio' id='portfolio'>
      <h1>Portfolio</h1>
      <ul>
        {list.map(project => (
          <PortfolioList 
          heading= {project.heading}
          active={selected === project.id}
          setSelected={setSelected}
          id={project.id} />
        ))}
      </ul>
        <div className="container">
          {project.map((proj) => (
            <div className="project">
              <img src={proj.img} alt='project' />
              <h3>{proj.title}</h3>
            </div>
          ))}
        </div>
    </div>
  )
}