import {StyleSheet} from 'react-native'

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 8
  },
  title: {
    fontSize: 36,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  cardContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    height: 150,
    backgroundColor: '#fff',
    padding: 4,
    paddingVertical: 8,
    paddingHorizontal: 18
  },
  cardTextContainer: {
    flex: 0.8,
    marginLeft: 16
  },
  cardText: {
    fontSize: 24,
    fontWeight: 'bold'
  },
  cardDescription: {
    fontSize: 16,
    fontWeight: 'normal',
    lineHeight: 24,
  },
  cardImageContainer: {
    flex: 0.2,
    padding: 4,
  },
  cardImage: {
    width: 80,
    height: 80,
  }
})
