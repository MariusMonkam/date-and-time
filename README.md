# react-native-date-and-time

## Getting started

`$ npm install react-native-date-and-time --save`

### Mostly automatic installation

`$ react-native link react-native-date-and-time`

### Manual installation

#### iOS

1. In XCode, in the project navigator, right click `Libraries` ➜ `Add Files to [your project's name]`
2. Go to `node_modules` ➜ `react-native-date-and-time` and add `RNDateTime.xcodeproj`
3. In XCode, in the project navigator, select your project. Add `libRNDateTime.a` to your project's `Build Phases` ➜ `Link Binary With Libraries`
4. Run your project (`Cmd+R`)<

#### Android

1. Open up `android/app/src/main/java/[...]/MainActivity.java`

- Add `import com.reactlibrary.RNDateTimePackage;` to the imports at the top of the file
- Add `new RNDateTimePackage()` to the list returned by the `getPackages()` method

2. Append the following lines to `android/settings.gradle`:
   ```
   include ':react-native-date-and-time'
   project(':react-native-date-and-time').projectDir = new File(rootProject.projectDir, 	'../node_modules/react-native-date-and-time/android')
   ```
3. Insert the following lines inside the dependencies block in `android/app/build.gradle`:
   ```
     compile project(':react-native-date-and-time')
   ```

## Usage

```javascript
import * as dateMethods from "./dateMethods";
// TODO: What to do with the module?
const App = () => {
  console.log(dateMethods.getYear());
  console.log(dateMethods.getMonth());
  console.log(dateMethods.getDay());
  console.log(dateMethods.getTime());
  console.log(dateMethods.getDateTime());
  return (
    <View style={styles.container}>
      <Text>{dateMethods.getYear()}</Text>

      <Text>{dateMethods.getMonth()}</Text>
      <Text>{dateMethods.getDay()}</Text>
      <Text>{dateMethods.getTime()}</Text>
      <Text>{dateMethods.getDateTime()}</Text>
    </View>
  );
};
```
