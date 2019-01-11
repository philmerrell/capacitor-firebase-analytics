import Foundation
import Capacitor
import Firebase

/**
 * Please read the Capacitor iOS Plugin Development Guide
 * here: https://capacitor.ionicframework.com/docs/plugins/ios
 */
@objc(CapacitorFirebaseAnalytics)
public class CapacitorFirebaseAnalytics: CAPPlugin {

    override init() {
        super.init();
        FirebaseApp.configure();
    }
    
//    @objc func echo(_ call: CAPPluginCall) {
//        let value = call.getString("value") ?? ""
//        call.success([
//            "value": value
//        ])
//    }
    
    @objc func setScreenName(_ call: CAPPluginCall) {
        let screenName = call.getString("screenName") ?? "";
        let screenClassOverride = call.getString("screenClassOverride") ?? "";
        Analytics.setScreenName(screenName, screenClass: screenClassOverride);
    }
    
    @objc func setUserProperty(_ call: CAPPluginCall) {
        let value = call.getString("value") ?? "";
        let name = call.getString("name") ?? "";
        Analytics.setUserProperty(value, forName: name);
    }
    
    @objc func logEvent(_ call: CAPPluginCall) {
//        let name = call.getString("name") ?? "";
//        let parameters = call.getString("parameters");
//        Analytics.logEvent(name, parameters: parameters);
    }
    
    @objc func setUserId(_ call: CAPPluginCall) {
        let userId = call.getString("userId") ?? "";
        Analytics.setUserID(userId);
    }
    
    @objc func appInstanceId(_ call: CAPPluginCall) {
        let instanceId = Analytics.appInstanceID();
        call.success([
            "appInstanceId": instanceId
        ])
    }
    @objc func resetAnalyticsData() {
        Analytics.resetAnalyticsData();
    }
    
}
