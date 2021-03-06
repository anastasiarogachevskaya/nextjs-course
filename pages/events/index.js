// Path - /events
import { useRouter } from 'next/router';
import { getAllEvents } from '../../dummy-data';
import EventList from '../../components/events/EventList';
import EventsSearch from '../../components/events/EventsSearch';

const EventsListingPage = () => {
  const events = getAllEvents();
  const router = useRouter();
  function findEventsHandler(year, month) {
    const fullPath = `/events/${year}/${month}`;
    router.push(fullPath);
  }
  return(
    <>
      <EventsSearch onSearch={findEventsHandler} />
      <EventList events={events} />
    </>
  )
}

export default EventsListingPage;