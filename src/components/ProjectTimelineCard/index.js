// Write your code here
import {AiFillCalendar} from 'react-icons/ai'
import './index.css'

const ProjectTimelineCard = props => {
  const {timelineItemsData} = props
  const {
    projectTitle,
    description,
    imageUrl,
    id,
    projectUrl,
    duration,
  } = timelineItemsData

  return (
    <div key={id} className="project-container">
      <img src={imageUrl} alt="project" className="img-block" />
      <div className="title-calender">
        <h1>{projectTitle}</h1>
        <div className="duration-calender">
          <AiFillCalendar />
          <p className="duration">{duration}</p>
        </div>
      </div>
      <p>{description}</p>
      <a href={projectUrl} className="link">
        Visit
      </a>
    </div>
  )
}

export default ProjectTimelineCard
