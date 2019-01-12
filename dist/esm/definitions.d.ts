declare global {
    interface PluginRegistry {
        CapacitorFirebaseAnalytics?: CapacitorFirebaseAnalyticsPlugin;
    }
}
export interface CapacitorFirebaseAnalyticsPlugin {
    logEvent(name: string, parameters: string[]): Promise<any>;
    setUserProperty(value: string, name: string): Promise<any>;
    setUserId(userId: string): Promise<any>;
    setScreenName(screenName: string, screenClassOverride: string): Promise<any>;
    appInstanceId(): string;
    resetAnalyticsData(): void;
}
