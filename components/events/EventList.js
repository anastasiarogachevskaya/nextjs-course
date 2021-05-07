import EventItem from './EventItem';

const EventList = ({ events }) => (
  <ul>
    {events.map(event => 
      <EventItem
        key={event.id}
        title={event.title}
        image={event.image}
        date={event.date}
        location={event.location}
      />)}
  </ul>
);

export default EventList;