// Path - /events
import Head from 'next/head';
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
      <Head>
        <title>All Events</title>
        <meta name="description" content="Hello I am description" />
      </Head>
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