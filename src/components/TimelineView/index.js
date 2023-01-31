// Write your code here
import {Component} from 'react'
import {Chrono} from 'react-chrono'
import CourseTimelineCard from '../CourseTimelineCard'
import ProjectTimelineCard from '../ProjectTimelineCard'

import './index.css'

class TimelineView extends Component {
  constructor(props) {
    super(props)
    const {timelineItemsList} = props
    const dateData = timelineItemsList.map(item => ({title: item.title}))
    this.state = {items: dateData, timelineItems: timelineItemsList}
  }

  render() {
    const {items, timelineItems} = this.state
    console.log(items, timelineItems)
    return (
      <div className="main-container">
        <div className="heading-block">
          <h1 className="heading">MY JOURNEY OF CCBP 4.0</h1>
        </div>

        <Chrono
          items={items}
          mode="VERTICAL_ALTERNATING"
          theme={{
            primary: '#171f46',
            secondary: '#ffffff',
            titleColor: '#0967d2',
          }}
        >
          {timelineItems.map(timelineItemsData => {
            if (timelineItemsData.categoryId === 'COURSE') {
              return (
                <CourseTimelineCard
                  key={timelineItemsData.id}
                  timelineItemsData={timelineItemsData}
                />
              )
            }
            return (
              <ProjectTimelineCard
                key={timelineItemsData.id}
                timelineItemsData={timelineItemsData}
              />
            )
          })}
        </Chrono>
      </div>
    )
  }
}

export default TimelineView
