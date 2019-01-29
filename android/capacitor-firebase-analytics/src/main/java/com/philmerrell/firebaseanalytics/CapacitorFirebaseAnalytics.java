package com.philmerrell.firebaseanalytics;

import com.getcapacitor.JSObject;
import com.getcapacitor.NativePlugin;
import com.getcapacitor.Plugin;
import com.getcapacitor.PluginCall;
import com.getcapacitor.PluginMethod;
import com.google.firebase.analytics.FirebaseAnalytics;
import org.json.JSONException;
import org.json.JSONObject;
import java.util.Iterator;

@NativePlugin()
public class CapacitorFirebaseAnalytics extends Plugin {

    private FirebaseAnalytics firebaseAnalytics;

    public CapacitorFirebaseAnalytics(){
        firebaseAnalytics = firebaseAnalytics = MainActivity.firebaseAnalytics;
    }

    @PluginMethod()
    public void logEvent(PluginCall call) throws JSONException {
        private static final String TAG = "CapacitorFirebaseAnalyticsPlugin";
        final String name = call.getString("name", null);
        JSObject data = call.getData();
        final JSONObject params =  data.optJSONObject("parameters");
        if(name != null){
            Bundle bundle = new Bundle();

            if(params != null) {
                Iterator<String> keys = params.keys();

                while (keys.hasNext()) {
                    String key = keys.next();
                    Object value = params.get(key);

                    if (value instanceof String) {
                        bundle.putString(key, (String) value);
                    } else if (value instanceof Integer) {
                        bundle.putInt(key, (Integer) value);
                    } else if (value instanceof Double) {
                        bundle.putDouble(key, (Double) value);
                    } else if (value instanceof Long) {
                        bundle.putLong(key, (Long) value);
                    } else {
                        Log.w(TAG, "Value for key " + key + " not one of (String, Integer, Double, Long)");
                    }
                }
            }
            firebaseAnalytics.logEvent(name, bundle);
        }
    }

    @PluginMethod()
    public void setUserProperty(PluginCall call) {
        final String name = call.getString("name");
        final String value = call.getString("value");

        if(name != null && value !=null){
            firebaseAnalytics.setUserProperty(name, value);
        }
    }

    @PluginMethod()
    public void setUserId(PluginCall call) {
        final String userId = call.getString("userId");

        if(userId != null){
            firebaseAnalytics.setUserId(userId);
        }
    }

    @PluginMethod()
    public void setScreenName(PluginCall call){
        final String value = call.getString("screenName");
        getActivity().runOnUiThread(new Runnable(){
            @Override
            public void run(){
                firebaseAnalytics.setCurrentScreen(getActivity(), value, null);
            }
        });
    }

    @PluginMethod()
    public String appInstanceId(){
        return firebaseAnalytics.getAppInstanceId().toString();
    }

    @PluginMethod()
    public void  resetAnalyticsData(){
        firebaseAnalytics.resetAnalyticsData();
    }

    @PluginMethod()
    public void echo(PluginCall call) {
        String value = call.getString("value");

        JSObject ret = new JSObject();
        ret.put("value", value);
        call.success(ret);
    }
}
