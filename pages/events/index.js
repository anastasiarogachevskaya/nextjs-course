// Path - /events
import { useRouter } from 'next/router';
import { getAllEvents } from '../../helpers/apiUtil';
import EventList from '../../components/events/EventList';
import EventsSearch from '../../components/events/EventsSearch';

const EventsListingPage = ({ events }) => {
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

export async function getStaticProps() {
  const allEvents = await getAllEvents();
  return {
    props: {
      events: allEvents,
    },
    revalidate: 60
  }
}
export default EventsListingPage;