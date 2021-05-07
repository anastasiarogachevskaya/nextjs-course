// Path - /events/[id]
import { useRouter } from 'next/router';
import { Fragment } from 'react';
import { getEventById } from '../../dummy-data';
import EventSummary from '../../components/singleEvent/EventSummary';
import EventLogistics from '../../components/singleEvent/EventLogistics';
import EventContent from '../../components/singleEvent/EventContent';
import ErrorAlert from '../../components/elements/ErrorAlert/ErrorAlert';

const EventIDPage = () => {
  const router = useRouter();
  const eventId = router.query.id;
  const event = getEventById(eventId);

  if (!event) {
    return (
      <ErrorAlert>
        <p>No event found</p>
      </ErrorAlert>
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

export default EventIDPage;