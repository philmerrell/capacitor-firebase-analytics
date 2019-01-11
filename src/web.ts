import { WebPlugin } from '@capacitor/core';
import { CapacitorFirebaseAnalyticsPlugin } from './definitions';

export class CapacitorFirebaseAnalyticsWeb extends WebPlugin implements CapacitorFirebaseAnalyticsPlugin {
  constructor() {
    super({
      name: 'CapacitorFirebaseAnalytics',
      platforms: ['web']
    });
  }

  async echo(options: { value: string }): Promise<{value: string}> {
    console.log('ECHO', options);
    return Promise.resolve({ value: options.value });
  }
}

const CapacitorFirebaseAnalytics = new CapacitorFirebaseAnalyticsWeb();

export { CapacitorFirebaseAnalytics };
