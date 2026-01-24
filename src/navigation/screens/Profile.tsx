import { Text } from '@react-navigation/elements';
import { StyleSheet, View } from 'react-native';
import * as Icons from '../../../assets/icons';
import { Ionicons } from '@expo/vector-icons';


export function Profile() {
  return (
    <View style={styles.container}>


    <View style={styles.cardsContainer}>
      <View style={styles.skillsCard}>
      <View style={styles.IconBox}>
        <Ionicons name='thumbs-up' size={32} color="white"/>

      </View>
        <Text style={{fontSize: 14}}>Skill</Text>
        <Text style={{fontSize: 18}}>LEVEL</Text>
      </View>
      <View style={styles.skillsCard}>

      <Icons.CarbonAudioConsole width={50} height={50} />
        <Text>React </Text>
      </View>



    </View>

    </View>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    gap: 10,
    paddingTop: 50,
    backgroundColor: "#020617"
  },
  cardsContainer: {
    flex: 2,
    flexWrap: "wrap",
    flexDirection: "row",
    maxWidth: 350,
    justifyContent: "space-between",

  },
  skillsCard: {
    borderWidth: 1,
    borderColor: "#29394a",
    padding: 50,
    margin: 10,
    borderRadius: 10,
    backgroundColor: "#172543",
    shadowColor: "#000",
  shadowOffset: {
	width: 0,
	height: 1,
},
  shadowOpacity: 0.20,
  shadowRadius: 1.41,

  elevation: 2,
  alignItems: 'center',
  justifyContent: 'center',
  flexDirection: 'column',
  gap: 10,
  },
  IconBox: {
    borderWidth: 2,
    padding: 10,
    borderColor: "white",
    borderRadius: 10,
    backgroundColor: "#324056"
  }
});
