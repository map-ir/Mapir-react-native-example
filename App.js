/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';

import Mapir from 'mapir-react-native-sdk';

const App: () => React$Node = () => {
  return (
    <>
      <SafeAreaView style={styles.container}>
        <Mapir
          apiKey={
            'eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImp0aSI6ImZkNDRkNWQ0NjgwY2U0ZTM2NDlmNGEwNjBiZDkzZjk1Yzk4MmE3OTdjMzVmZDFiNzNiZGY4ZjhkNDg2YmY1NzdmNmU1NjI5NDkwYjlkNzE4In0.eyJhdWQiOiI3ODA0IiwianRpIjoiZmQ0NGQ1ZDQ2ODBjZTRlMzY0OWY0YTA2MGJkOTNmOTVjOTgyYTc5N2MzNWZkMWI3M2JkZjhmOGQ0ODZiZjU3N2Y2ZTU2Mjk0OTBiOWQ3MTgiLCJpYXQiOjE1ODA3NDEwNDAsIm5iZiI6MTU4MDc0MTA0MCwiZXhwIjoxNTgzMjQ2NjQwLCJzdWIiOiIiLCJzY29wZXMiOlsiYmFzaWMiXX0.aEvCWqPzYtyErla-8_KcipBX0dwZge1mq796BkjWs-siXny3aOkL57NMabScYg3YRP_dc72eN1HxfnPewOT-_c8Qlgk0OcAm5joWFw8XYZPo4rl9zOlATdReZU-Luu-O7IcGx_CJWR48Jh4ZbBQz0IEaCBxNdGFuaThDrJbB4Gkf4OdgJJIa-OLYbC1psiFLS7B6L0bu5GBSfphPIXzxAgUWrwtqWMAJ-sh1WPhpcLIgtU6p97FzPay1VmRxrQTsA8sNEYah2bupxUqfgK1mXlpQ-dz_bEG-Zq9b9ZK_G5c5On-lqkEUr7pyBHsEIr5xSzeBmAMmyvItKBpzLKOPZw'
          }
          zoomLevel={13}
          centerCoordinate={[51.422548, 35.732573]}
          style={styles.container}></Mapir>
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;
