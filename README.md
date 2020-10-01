# react-native-date-and-time

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
