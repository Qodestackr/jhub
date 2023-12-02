<!-- React Get Started
Learn how to add novu powered In-App notification center to your React app
Novu provides the @novu/notification-center a React library that helps to add a fully functioning notification center to your web application in minutes. Let’s do a quick recap on how you can easily use it in your application.

Install @novu/notification-center npm package in your react app

npm install @novu/notification-center
Add the below code in the app.tsx file

import {
  NovuProvider,
  PopoverNotificationCenter,
  NotificationBell,
  IMessage,
} from "@novu/notification-center";

function Novu() {
  return (
    <NovuProvider
      subscriberId={"SUBSCRIBER_ID"}
      applicationIdentifier={"APPLICATION_IDENTIFIER"}
    >
      <PopoverNotificationCenter colorScheme="dark">
        {({ unseenCount }) => <NotificationBell unseenCount={unseenCount} />}
      </PopoverNotificationCenter>
    </NovuProvider>
  );
} -->

<!-- Go to this react app browser tab, there will be a bell icon. On clicking that bell icon, you will see a 
notification component popover
-->

API KEY: 7a34c070e32422ea5202cab5e8cc2760   

APP ID: mplt33Vw1efd

ENV ID: 6568741cf0af8a66b4453df0