import { WebPlugin } from '@capacitor/core';
import { CapacitorFirebaseAnalyticsPlugin } from './definitions';
export declare class CapacitorFirebaseAnalyticsWeb extends WebPlugin implements CapacitorFirebaseAnalyticsPlugin {
    constructor();
    echo(options: {
        value: string;
    }): Promise<{
        value: string;
    }>;
}
declare const CapacitorFirebaseAnalytics: CapacitorFirebaseAnalyticsWeb;
export { CapacitorFirebaseAnalytics };
