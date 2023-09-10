import Router from 'router';
import { OrientationLock, lockAsync } from 'expo-screen-orientation';

lockAsync(OrientationLock.PORTRAIT_UP);

export default Router;
