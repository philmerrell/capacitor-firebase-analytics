import { WebPlugin } from '@capacitor/core';
import { FirebaseAnalytics } from './definitions';

export class CapacitorFirebaseAnalyticsWeb extends WebPlugin implements FirebaseAnalytics {
  constructor() {
    super({
      name: 'FirebaseAnalytics',
      platforms: ['web']
    });
  }

  logEvent(options: { name: string, parameters: any[]}) {
    return Promise.resolve();
  }

  setUserProperty(options: { value: string, name: string}) {
    return Promise.resolve();
  }

  setUserId(options: { userId: string }) {
    return Promise.resolve();
  }

  setScreenName(options: { screenName: string, screenClassOverride: string }) {
    return Promise.resolve();
  }

  appInstanceId() {
    return Promise.resolve({ appInstanceId: ''});
  }

  resetAnalyticsData() {
    return Promise.resolve();
  }
}

const CapacitorFirebaseAnalytics = new CapacitorFirebaseAnalyticsWeb();

export { CapacitorFirebaseAnalytics };
