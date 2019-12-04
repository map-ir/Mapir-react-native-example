# MapirReatNativeSDK
[![npm version](https://badge.fury.io/js/mapir-react-native-sdk.svg)](https://www.npmjs.com/package/mapir-react-native-sdk)


![Map.ir](https://map.ir/css/images/mapir-logo.png) React Native wrapper for mapbox-gl-js. Expose a bunch of component meant to be simple to use for React Native.

## Get API Key
🔑 You should first get api key from [Map.ir](https://corp.map.ir/registration/)

## Installation

```
git clone https://github.com/map-ir/Mapir-react-native-example.git
cd Mapir-react-native-example
```

* Install our dependencies using `npm i`.

## Start React Native Packager

Open up another tab in your Terminal and run
```
npm start
```

## Run Android Simulator

* Open up Android Studio and build with gradle
* Start Android emulator
* Run `adb reverse tcp:8081 tcp:8081` to foward port to packager(needed for hot reloading, if you're not developing you can skip this step).
* Run `react-native run-android` from `Mapir-react-native-example` directory


**NOTE**

If the build fails make sure gradle has permission to build from cli
```
cd android
chmod +x gradlew
```

## Run iOS Simulator

You can run this with the react-native cli or Xcode

```
react-native run-ios
```

**NOTE**

If you run into

```
Command failed: /usr/libexec/PlistBuddy -c Print:CFBundleIdentifier build/Build/Products/Debug-iphonesimulator/RNMapboxGLExample.app/Info.plist
Print: Entry, ":CFBundleIdentifier", Does Not Exist
```

Just run the example from Xcode, it seems to be an [issue](https://github.com/facebook/react-native/issues/14423) with RN.
