import React, { PropTypes } from 'react'
import classNames from 'classnames'

import Button from '../button/Button'
import ResponsiveMedia from '../responsive-media/ResponsiveMedia'

const Card = ({ actionText, actionUrl, centered, children, className, heading, imgAlt, imgRatio, imgSrc, text }) => {
  const cardClassNames = classNames(
    'card',
    { 'card--centered': centered },
    className
  )
  return (
    <div className={cardClassNames}>
      {imgSrc &&
        <div className="card__hero">
          <ResponsiveMedia ratio={imgRatio}>
            <img src={imgSrc} alt={imgAlt || ''} />
          </ResponsiveMedia>
        </div>
      }
      <div className="card__content">
        {heading &&
          <h2>{heading}</h2>
        }
        {text &&
          <p>{text}</p>
        }
        {children}
        {actionUrl &&
          <Button href={actionUrl}>{actionText || actionUrl}</Button>
        }
      </div>
    </div>
  )
}

Card.propTypes = {
  actionText: PropTypes.string,
  actionUrl: PropTypes.string,
  centered: PropTypes.bool,
  children: PropTypes.any,
  className: PropTypes.string,
  heading: PropTypes.string,
  imgAlt: PropTypes.string,
  imgRatio: PropTypes.string,
  imgSrc: PropTypes.string,
  text: PropTypes.string
}

export default Card
