import React from 'react'

import Code from '../component/code/Code'
import Notification from '../component/notification/Notification'

function dismissNotification (e) {
  const notificationEl = e.target.closest('.notification')
  notificationEl.style.opacity = 0
  setTimeout(() => { notificationEl.style.opacity = 1 }, 2000)
}

const NotificationPage = () => (
  <div className="prose">
    <h1>Notification</h1>
    <Code>
      <Notification
        heading="Example Title"
        text="Donec id elit non mi porta gravida at eget metus."
        className="optional-class"
      />
    </Code>
    <Code>
      <Notification>
        <p>Example with <a href="#">Link</a></p>
        <ul>
          <li>children passed via props</li>
        </ul>
      </Notification>
    </Code>
    <Code>
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
    </Code>
    <Code>
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
    </Code>
  </div>
)

export default NotificationPage
