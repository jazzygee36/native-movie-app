import {useColorScheme} from 'react-native';
import Colors from './colors';

export const useAppTheme = (mode: string, color: string) => {
  const colorMode = useColorScheme();
  const appTheme = Colors[colorMode ?? 'black'];
  return appTheme;
};
