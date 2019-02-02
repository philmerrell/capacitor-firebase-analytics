declare global {
  interface PluginRegistry {
    FirebaseAnalytics?: CapacitorFirebaseAnalyticsPlugin;
  }
}

export interface CapacitorFirebaseAnalyticsPlugin {
  
  logEvent(options: { name: string, parameters: object }): Promise<void>;
  setUserProperty(options: { value: string, name: string }): Promise<void>;
  setUserId(options: { userId: string }): Promise<void>;
  setScreenName(options: { screenName: string, screenClassOverride: string }): Promise<void>;
  appInstanceId(): Promise<{appInstanceId: string}>;
  resetAnalyticsData(): Promise<void>;
}
