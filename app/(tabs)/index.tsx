import { Image, StyleSheet, View } from 'react-native';

export default function HomeScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Image
        source={require('@/assets/images/partial-react-logo.png')}
        style={styles.reactLogo}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  reactLogo: {
    height: 178,
    width: 290,
  },
});
