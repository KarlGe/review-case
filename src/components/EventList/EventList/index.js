import clsx from 'clsx';
import React, { useState } from 'react';
import { withStyles } from '@material-ui/core';

import styles from './style';
import Box from '../atomic/Box';
import EventCard from './EventCard';
import MuiLink from '../atomic/MuiLink';
import Typography from '../atomic/Typography';
import CardItemLoading from '../loaders/CardItemLoading';
import { compareAlphabetically } from '../../utils/strings';
import { getEventsByYear, getEventStartDate } from '../../utils/events';

const EventList = ({
  events,
  classes,
  fetching,
  onEventUpdated,
  enableImageUpload,
  truncatable = false,
  displayByYear = false,
  searchQuery,
}) => {
  const [truncated, setTruncated] = useState(true);

  const itemsToShow =
    truncated && truncatable && Array.isArray(events) && events.length > 3
      ? 3
      : undefined;

  if (fetching || events === null) {
    return (
      <div className={clsx(displayByYear && classes.additionalPadding)}>
        <CardItemLoading />
        <CardItemLoading />
        <CardItemLoading />
      </div>
    );
  }
  if (displayByYear) {
    const eventsByYear = getEventsByYear(events);

    return Object.keys(eventsByYear)
      .sort((a, b) => b - a)
      .map((year) => (
        <div key={`events-year-${year}`}>
          <div className={classes.eventYear}>{year}</div>
          {eventsByYear[year]
            .sort((a, b) =>
              compareAlphabetically(
                getEventStartDate(a),
                getEventStartDate(b),
                'desc'
              )
            )
            .map((event) => (
              <EventCard
                event={event}
                key={`event-item-${event.id}`}
                onEventUpdated={onEventUpdated}
                enableImageUpload={enableImageUpload}
                searchQuery={searchQuery}
              />
            ))}
        </div>
      ));
  }

  return (
    <div className={classes.eventList}>
      {events
        .sort((a, b) =>
          compareAlphabetically(
            getEventStartDate(a),
            getEventStartDate(b),
            'desc'
          )
        )
        .map((event) => (
          <EventCard
            event={event}
            key={`event-item-${event.id}`}
            onEventUpdated={onEventUpdated}
            enableImageUpload={enableImageUpload}
            searchQuery={searchQuery}
          />
        ))
        .slice(0, itemsToShow)}

      <Box mt={2} display="flex" justifyContent="flex-end">
        {truncatable &&
          truncated &&
          Array.isArray(events) &&
          events.length > 3 && (
            <Typography component="strong">
              <MuiLink onClick={() => setTruncated(false)}>Vis mer</MuiLink>
            </Typography>
          )}

        {truncatable &&
          !truncated &&
          Array.isArray(events) &&
          events.length > 3 && (
            <Typography component="strong">
              <MuiLink onClick={() => setTruncated(true)}>Vis mindre</MuiLink>
            </Typography>
          )}
      </Box>
    </div>
  );
};

export default withStyles(styles)(EventList);
