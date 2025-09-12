import { StatusBar} from 'react-native';

// You can import supported modules from npm
import { Card } from 'react-native-paper';

// or any files within the Snack
import Page_Bai01 from './page/page_bai01';

export default function App() {
  return (
    <>
          <StatusBar barStyle="dark-content" hidden={false} backgroundColor="#f5f5f5" />
          <Page_Bai01/>
    </>
    
  );
}
