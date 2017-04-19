import React from 'react'
import Helmet from 'react-helmet'

import Example from '../../component/example/Example'
import Notification from '../../component/notification/Notification'

function dismissNotification (e) {
  const notificationEl = e.target.closest('.notification')
  notificationEl.style.opacity = 0
  setTimeout(() => { notificationEl.style.opacity = 1 }, 2000)
}

const NotificationPage = () => (
  <div className="prose">
    <Helmet title="Notification" />
    <h1>Notification</h1>
    <Example>
      <Notification
        heading="Example Title"
        text="Donec id elit non mi porta gravida at eget metus."
        className="optional-class"
      />
    </Example>
    <Example>
      <Notification>
        <p>Example with <a href="#">Link</a></p>
        <ul>
          <li>children passed via props</li>
        </ul>
      </Notification>
    </Example>
    <Example>
      <Notification
        state="notice"
        >
        Donec id elit non mi <a href="#">porta gravida</a> at eget metus.
      </Notification>
      <Notification
        state="warning"
        >
        Donec id elit non mi <a href="#">porta gravida</a> at eget metus.
      </Notification>
      <Notification
        state="error"
        >
        Donec id elit non mi <a href="#">porta gravida</a> at eget metus.
      </Notification>
      <Notification
        state="success"
        >
        Donec id elit non mi <a href="#">porta gravida</a> at eget metus.
      </Notification>
    </Example>
    <Example>
      <Notification
        handleDismiss={dismissNotification}
        text="Donec id elit non mi porta gravida at eget metus."
      />
      <Notification
        handleDismiss={dismissNotification}
        state="notice"
        text="Donec id elit non mi porta gravida at eget metus."
      />
      <Notification
        handleDismiss={dismissNotification}
        state="warning"
        text="Donec id elit non mi porta gravida at eget metus."
      />
      <Notification
        handleDismiss={dismissNotification}
        state="success"
        text="Donec id elit non mi porta gravida at eget metus."
      />
      <Notification
        handleDismiss={dismissNotification}
        state="error"
        text="Donec id elit non mi porta gravida at eget metus."
      />
    </Example>
  </div>
)

export default NotificationPage
