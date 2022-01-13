import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  loadingContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  loadingText: {
    fontSize: 36,
    letterSpacing: 8,
  },
  container: {
    maxHeight: 300,
    maxWidth: 254,
    backgroundColor: '#f8f8f8',
    padding: 8,
    borderRadius: 4
  },
  title: {
    fontWeight: 'bold',
    textAlign: 'center',
  },
  description: {
    textAlign: 'justify',
  }
})
