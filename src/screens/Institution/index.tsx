import { useMemo } from 'react'
import { useRoute, RouteProp } from '@react-navigation/native'
import { View, Text, Image } from 'react-native';

import { institution } from '../../utils/institutions'
import { styles } from './styles'

const Institution = () => {
  const { params } = useRoute<RouteProp<{ params: { institutionId?: number } }, 'params'>>()

  const school = useMemo(() => {
    if(params?.institutionId){
      return institution.find(item => item.id === params.institutionId)
    }
  }, [params])

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{school?.name?.toUpperCase()}</Text>
      {school?.courses?.map((course, index) => (
        <View key={course.id} style={[styles.cardContainer, {marginTop: index > 0 ? 16 : 0}]}>
          <View style={styles.cardImageContainer}>
            <Image source={{uri: course.image}} resizeMode='contain' style={styles.cardImage}/>
          </View>
          <View style={styles.cardTextContainer}>
            <Text style={styles.cardText}>{course.name}</Text>
            <Text style={styles.cardDescription}>{course.description}</Text>
          </View>
        </View>
      ))}
    </View>
  )
}

export default Institution
