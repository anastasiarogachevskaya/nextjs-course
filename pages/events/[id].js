// Path - /events/[id]
import { useRouter } from 'next/router';
import { Fragment } from 'react';
import { getEventById, getAllEvents } from '../../helpers/apiUtil';
import EventSummary from '../../components/singleEvent/EventSummary';
import EventLogistics from '../../components/singleEvent/EventLogistics';
import EventContent from '../../components/singleEvent/EventContent';
import ErrorAlert from '../../components/elements/ErrorAlert/ErrorAlert';

const EventIDPage = ({ event }) => {
  if (!event) {
    return (
      <div className="center">
        <p>Loading...</p>
      </div>
    )
  }

  return(
    <Fragment>
      <EventSummary title={event.title} />
      <EventLogistics
        date={event.date}
        address={event.location}
        image={event.image}
        imageAlt={event.title}
      />
      <EventContent>
        <p>{event.description}</p>
      </EventContent>
    </Fragment>
  )
}

export async function getStaticProps(context) {
  const eventId = context.params.id;
  const selectedEvent = await getEventById(eventId);
  return {
    props: {
      event: selectedEvent,
    },
    revalidate: 30
  }
}

export async function getStaticPaths() {
  const events = await getAllEvents();
  const paths = events.map(event => ({ params: { id: event.id } }));

  return {
    paths: paths,
    fallback: 'blocking'
  }
}

export default EventIDPage;