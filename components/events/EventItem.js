import Button from '../elements/Button/Button';
import DateIcon from '../icons/AddressIcon';
import AddressIcon from '../icons/ArrowRight';
import ArrowRight from '../icons/DateIcon';

import classes from './EventItem.module.css';

const EventItem = ({ title, image, date, location, id }) => {
  const humanReadableDate = new Date(date).toLocaleDateString('en-UK', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  });

  const formattedAddress = location.replace(', ', '\n');
  const exploreLink = `/events/${id}`

  return(
    <li key="id" className={classes.item}>
      <img src={'/' + image} alt={title} />
      <div className={classes.content}>
        <div className={classes.summary}>
          <h2>{title}</h2>
          <div className={classes.date}>
            <DateIcon />
            <time>{humanReadableDate}</time>
          </div>
          <div className={classes.address}>
            <AddressIcon />
            <address>{formattedAddress}</address>
          </div>
        </div>
        <div className={classes.actions}>
          <Button link={exploreLink}>
            <span>Explore event</span>
            <span className={classes.icon}><ArrowRight/></span>
          </Button>
        </div>
      </div>
    </li>
  );
}

export default EventItem;