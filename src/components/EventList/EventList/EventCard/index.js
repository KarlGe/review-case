import React, { useState } from 'react';
import { withStyles } from '@material-ui/core';

import {
  getEventId,
  getEventRoom,
  getEventName,
  getEventImage,
  getEventStartDate,
  getEventImages,
} from '../../../utils/events';

import styles from './style';
import Image from '../../Image';
import Link from '../../atomic/Link';
import Card from '../../atomic/Card';
import Typography from '../../atomic/Typography';
import { formattedDate } from '../../../utils/dates';
import DirectImageUpload from '../../DirectImageUpload';
import ArrowIcon from '../../../assets/icons/ArrowForward';
import { getImageUrl, getRoomName } from '../../../utils/rooms';
import DefaultEventImage from '../../../assets/images/event.png';
import useDashboardLinkPrefix from '../../../hooks/useDashboardLinkPrefix';
import { capitalizeFirst } from '../../../utils/strings';
import TextHighlighted from '../../TextHighlighted';

const EventCard = ({
  event,
  classes,
  onEventUpdated,
  enableImageUpload,
  searchQuery,
  ...props
}) => {
  const dashboardLinkPrefix = useDashboardLinkPrefix();

  const [imageRef, setImageRef] = useState(null);

  const eventImage = getEventImage(event);
  const imageUrl = getImageUrl(eventImage) || event.image;

  const dateFormat = 'MMMM, YYYY';
  const room = getEventRoom(event);

  const openImageUploadDialog = () => imageRef.click();

  const onImagesUploaded = (uploadedImages) =>
    onEventUpdated({
      ...event,
      gallery: [...(getEventImages(event) || []), ...uploadedImages],
    });

  return (
    <Card elevation={2} className={classes.card} {...props}>
      <div className={classes.imageContainer}>
        <Image
          alt="event"
          src={imageUrl}
          className={classes.image}
          fallbackSrc={DefaultEventImage}
        />
        {!imageUrl && enableImageUpload && (
          <DirectImageUpload
            imageRef={imageRef}
            setImageRef={setImageRef}
            onClick={openImageUploadDialog}
            onImagesUploaded={onImagesUploaded}
            className={classes.imageUploadButton}
          />
        )}
      </div>
      <Link
        underline={false}
        className={classes.linkContainer}
        to={`${dashboardLinkPrefix}/events/${getEventId(event)}`}
      >
        <div className={classes.textContainer}>
          <Typography
            variant="h4"
            component="h4"
            color="textPrimary"
            className="word-break"
            style={{ margin: '5px 0' }}
          >
            <TextHighlighted searchQuery={searchQuery}>
              {getEventName(event)}
            </TextHighlighted>
          </Typography>
          <Typography variant="inherit" component="small" color="textSecondary">
            {room && getRoomName(room)}
          </Typography>
          <small className={classes.date}>
            {capitalizeFirst(
              formattedDate(getEventStartDate(event), dateFormat)
            )}
          </small>
        </div>
        <div className={classes.actionsContainer}>
          <ArrowIcon className={classes.arrowIcon} />
        </div>
      </Link>
    </Card>
  );
};

export default withStyles(styles)(EventCard);
