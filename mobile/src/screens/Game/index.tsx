import { useRoute } from '@react-navigation/native'
import { SafeAreaView } from 'react-native-safe-area-context';
import { GameParams } from '../../@types/navigation';
import { Background } from '../../components/Background';

import { styles } from './styles';

export function Game() {
  const route = useRoute()
  const game = route.params as GameParams

  console.log(game)

  return (
    <Background>
      <SafeAreaView style={styles.container}>
      </SafeAreaView>
    </Background>
  );
}
