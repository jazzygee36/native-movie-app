import AsyncStorage from '@react-native-async-storage/async-storage';

class StorageHandler {
  _app_color_mode = '';
  constructor() {}

  setItem(key: string, value: string) {
    try {
      AsyncStorage.setItem('my-key', value);
    } catch (e) {
      // saving error
      console.log(e);
    }
  }

  getItem = async (key: string) => {
    try {
      return await AsyncStorage.getItem('my-key');
    } catch (e) {
      // error reading value
      console.log('err in getItem', e);
    }
  };

  async removeItem(key: string) {
    await AsyncStorage.removeItem(key);
  }
}
export const storage_handler_init = new StorageHandler();
