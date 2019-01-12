declare global {
    interface PluginRegistry {
        CapacitorFirebaseAnalytics?: CapacitorFirebaseAnalyticsPlugin;
    }
}
export interface CapacitorFirebaseAnalyticsPlugin {
    logEvent(options: {
        name: string;
        parameters: any[];
    }): void;
    setUserProperty(options: {
        value: string;
        name: string;
    }): void;
    setUserId(options: {
        userId: string;
    }): void;
    setScreenName(options: {
        screenName: string;
        screenClassOverride: string;
    }): void;
    appInstanceId(): string;
    resetAnalyticsData(): void;
}
