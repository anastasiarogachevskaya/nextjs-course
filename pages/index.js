// Path - /
import { getFeaturedEvents } from '../helpers/apiUtil';
import EventList from '../components/events/EventList';

function HomePage({events}) {
  return(
    <div>
      <EventList events={events} />
    </div>
  )
}

export async function getStaticProps() {
  const featuredEvents = await getFeaturedEvents();
  return {
    props: {
      events: featuredEvents,
    },
    revalidate: 1800,
  }
}

export default HomePage;