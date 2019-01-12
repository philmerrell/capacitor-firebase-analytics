import { WebPlugin } from '@capacitor/core';
import { CapacitorFirebaseAnalyticsPlugin } from './definitions';

export class CapacitorFirebaseAnalyticsWeb extends WebPlugin implements CapacitorFirebaseAnalyticsPlugin {
  constructor() {
    super({
      name: 'CapacitorFirebaseAnalytics',
      platforms: ['web']
    });
  }

  logEvent(options: { name: string, parameters: any[]}) {
    
  }

  setUserProperty(options: { value: string, name: string}) {

  }

  setUserId(options: { userId: string }) {

  }

  setScreenName(options: { screenName: string, screenClassOverride: string }) {

  }

  appInstanceId() {
    return '';
  }

  resetAnalyticsData() {}
}

const CapacitorFirebaseAnalytics = new CapacitorFirebaseAnalyticsWeb();

export { CapacitorFirebaseAnalytics };
