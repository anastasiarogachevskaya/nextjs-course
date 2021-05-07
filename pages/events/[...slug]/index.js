// Path - /events/...slug
import { useRouter } from 'next/router';
import { getFilteredEvents } from '../../../dummy-data';
import EventList from '../../../components/events/EventList'
import ResultsTitle from '../../../components/events/ResultsTitle';
import Button from '../../../components/elements/Button/Button';
import ErrorAlert from '../../../components/elements/ErrorAlert/ErrorAlert';

const EventsListingPage = () => {
  const router = useRouter();
  const filterData = router.query.slug;
  if (!filterData) {
    return <p className="center">Loading...</p>;
  }

  const filterYear = filterData[0];
  const filterMonth = filterData[1];

  const numYear = +filterYear;
  const numMonth = +filterMonth;

  if (
    isNaN(numYear) ||
    isNaN(numMonth) ||
    numYear > 2030 ||
    numYear < 2021 ||
    numMonth < 1 ||
    numMonth > 12
  ) {
    return(
      <>
        <ErrorAlert>
          <p className="center">Invalid filter. Please adjust.</p>
        </ErrorAlert>
        <div className="center">
          <Button link="/events">Show all events</Button>
        </div>
      </>
    );
  }

  const filteredEvents = getFilteredEvents({
    year: numYear,
    month: numMonth,
  });

  if (!filteredEvents || filteredEvents.length === 0) {
    return (
      <>
        <ErrorAlert>
          <p>No events found for the chosen filter! Try again</p>
        </ErrorAlert>
        <div className="center">
          <Button link="/events">Show all events</Button>
        </div>
      </>
    )
  }
  const date = new Date(numYear, numMonth - 1);

  return(
    <>
      <ResultsTitle date={date} />
      <EventList events={filteredEvents} />
    </>
  )
}

export default EventsListingPage;