import EventItem from './EventItem';
import classes from './EventList.module.css';

const EventList = ({ events }) => (
  <ul className={classes.list}>
    {events.map(event => 
      <EventItem
        key={event.id}
        id={event.id}
        title={event.title}
        image={event.image}
        date={event.date}
        location={event.location}
      />)}
  </ul>
);

export default EventList;