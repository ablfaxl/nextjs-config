// utils/pushNotifications.ts
export const requestNotificationPermission = async () => {
  const permission = await Notification.requestPermission();
  if (permission === 'granted') {
    console.log('Notification permission granted.');
    // You might want to subscribe or show a notification here
  } else {
    console.log('Notification permission denied.');
  }
  return permission;
};

export const subscribeToPushNotifications = async () => {
  if ('serviceWorker' in navigator) {
    const registration = await navigator.serviceWorker.ready;
    try {
      const subscription = await registration.pushManager.subscribe({
        userVisibleOnly: true,
        applicationServerKey: 'your-vapid-key', // This should be replaced with a valid VAPID key
      });
      console.log('Push Notification Subscription: ', subscription);
      // Send the subscription object to your server
    } catch (error) {
      console.error('Failed to subscribe to push', error);
    }
  } else {
    console.error('Service Worker not available');
  }
};
