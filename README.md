# react-native-lyft-ui-clone
React Native lyft ui clone using react, redux, sagas and hooks

<b>For Android</b><br/><br/>
Add your API key to your manifest file (android/app/src/main/AndroidManifest.xml):

<pre>
<application>
   <!-- You will only need to add this meta-data tag, but make sure it's a child of application -->
   <meta-data
     android:name="com.google.android.geo.API_KEY"
     android:value="Your Google maps API Key Here"/>
</application>
</pre>

<b>For IOS</b><br/><br/>
If you want to enable Google Maps on iOS, obtain the Google API key and edit your AppDelegate.m as follows:

+ #import <GoogleMaps/GoogleMaps.h>

@implementation AppDelegate
...

- (BOOL)application:(UIApplication *)application didFinishLaunchingWithOptions:(NSDictionary *)launchOptions
{
+  [GMSServices provideAPIKey:@"_YOUR_API_KEY_"]; // add this line using the api key obtained from Google Console
...
