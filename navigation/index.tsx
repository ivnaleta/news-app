import { NavigationContainer, NavigationContainerRef } from '@react-navigation/native';
import * as React from 'react';

import LinkingConfiguration from './LinkingConfiguration';
import { ScreenName } from "./ScreenName";
import RootNavigator from "./RootNavigator";

// https://reactnavigation.org/docs/navigating-without-navigation-prop
const navigationRef = React.createRef<NavigationContainerRef>();

export function rootNavigation(name: ScreenName, params: any) {
  navigationRef.current?.navigate(name, params);
}

export default function Navigation() {
  return (
    <NavigationContainer linking={LinkingConfiguration} ref={navigationRef}>
      <RootNavigator/>
    </NavigationContainer>
  );
}
