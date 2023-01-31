// Write your code here
import {AiFillClockCircle} from 'react-icons/ai'
import './index.css'

const CourseTimelineCard = props => {
  const {timelineItemsData} = props
  const {courseTitle, description, tagsList, duration, id} = timelineItemsData
  const tabsData = item => (
    <p key={item.id} className="tab">
      {item.name}
    </p>
  )

  return (
    <div key={id} className="course-container">
      <div className="heading-duration">
        <h1>{courseTitle}</h1>
        <div className="clock-duration">
          <AiFillClockCircle />
          <p className="duration">{duration}</p>
        </div>
      </div>
      <p>{description}</p>
      <div className="tabs">{tagsList.map(item => tabsData(item))}</div>
    </div>
  )
}

export default CourseTimelineCard
