import { getYear } from './dates';
import { sortImagesByPosition } from './images';

export const getEventId = (event) => (event ? event.id : null);

export const getEventName = (event) => (event ? event.title : null);

export const getEventStartYear = (event) => getYear(getEventStartDate(event));

export const getEventYear = (event) => getEventStartYear(event);

/**
 * Transforms events array into object with event.year as keys
 * and event as values
 * @param events
 * @returns {null|*}
 */
export const getEventsByYear = (events) => {
  if (events === null) {
    return null;
  }

  return events.reduce((eventsByYear, event) => {
    if (eventsByYear[getEventYear(event)]) {
      return {
        ...eventsByYear,
        [getEventYear(event)]: [...eventsByYear[getEventYear(event)], event],
      };
    }

    return {
      ...eventsByYear,
      [getEventYear(event)]: [event],
    };
  }, {});
};

export const getEventRoom = (event) =>
  event.rooms && event.rooms.length > 0 ? event.rooms[0] : null;

export const getEventImages = (event) =>
  event && event.gallery ? event.gallery : null;

export const getEventImage = (event) => {
  const images = getEventImages(event);

  if (!Array.isArray(images) || images.length === 0) {
    return null;
  }

  return images.slice().sort(sortImagesByPosition)[0];
};