import React, { PropTypes } from 'react'
import classNames from 'classnames'

import Button from '../button/Button'
import ResponsiveMedia from '../responsive-media/ResponsiveMedia'

const Card = ({ actionText, actionUrl, centered, children, className, heading, imgAlt, imgRatio, imgSrc, overlayUrl, text }) => {
  const cardClassNames = classNames(
    'card',
    { 'card--centered': centered },
    { 'has-overlay-link': overlayUrl },
    className
  )
  return (
    <div className={cardClassNames}>
      {overlayUrl &&
        <a className="card__overlay-link" href={overlayUrl} tabIndex="-1">
          {heading && <span className="is-vhidden">{heading}</span>}
        </a>
      }
      {imgSrc &&
        <div className="card__hero">
          <ResponsiveMedia ratio={imgRatio}>
            <img src={imgSrc} alt={imgAlt || ''} />
          </ResponsiveMedia>
        </div>
      }
      <div className="card__content">
        {heading &&
          <h2 className="card__heading">{heading}</h2>
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
  children: PropTypes.node,
  className: PropTypes.string,
  heading: PropTypes.string,
  imgAlt: PropTypes.string,
  imgRatio: PropTypes.string,
  imgSrc: PropTypes.string,
  overlayUrl: PropTypes.string,
  text: PropTypes.string
}

export default Card
