# react-native-lyft-ui-clone
React Native lyft ui clone using react, redux, sagas and hooks

# Getting Started
1. Clone this repo, git clone https://github.com/shrenik9/react-native-lyft-ui-clone.git <your project name>

2. Go to project's root directory, cd <your project name>

3. Remove .git folder, rm -rf .git

4. Use <a href="https://www.npmjs.com/package/react-native-rename">React Native Rename</a> to update project name $ npx react-native-rename <newName>

5. Run yarn or npm install to install dependencies

6. <b>For Android</b><br/><br/>
Add your API key to your manifest file (android/app/src/main/AndroidManifest.xml):

````html
 <application>
   <!-- You will only need to add this meta-data tag, but make sure it's a child of application -->
   <meta-data
     android:name="com.google.android.geo.API_KEY"
     android:value="Your Google maps API Key Here"/>
</application> 
````

<b>For IOS</b><br/><br/>
If you want to enable Google Maps on iOS, obtain the Google API key and edit your AppDelegate.m as follows:
````html
+ #import <GoogleMaps/GoogleMaps.h>

@implementation AppDelegate
...

- (BOOL)application:(UIApplication *)application didFinishLaunchingWithOptions:(NSDictionary *)launchOptions
{
+  [GMSServices provideAPIKey:@"_YOUR_API_KEY_"]; // add this line using the api key obtained from Google Console
 ...
````

7. Start the packager with npm start

8. Connect a mobile device to your development machine

9. Run the test application:
   On Android:
   Run react-native run-android
   On iOS:
   Open ios/YourReactProject.xcodeproj in Xcode
   Hit Run after selecting the desired device
   Enjoy!!!

