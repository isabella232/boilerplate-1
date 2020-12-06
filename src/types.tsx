import { NavigatorScreenParams } from '@react-navigation/native';
import { StackScreenProps } from '@react-navigation/stack';
import { DrawerScreenProps } from '@react-navigation/drawer';
import { MaterialTopTabScreenProps } from '@react-navigation/material-top-tabs';

export type RootStackParamList = {
  Home: NavigatorScreenParams<HomeDrawerParamList>;
  PostDetails: { id: string };
  Login: undefined;
  NotFound: undefined;
};

export type RootStackScreenProps<
  T extends keyof RootStackParamList
> = StackScreenProps<RootStackParamList, T>;

export type HomeDrawerParamList = {
  Feed: NavigatorScreenParams<FeedTabParamList>;
  Account: undefined;
};

export type HomeDrawerScreenProps<
  T extends keyof HomeDrawerParamList
> = DrawerScreenProps<HomeDrawerParamList, T>;

export type FeedTabParamList = {
  Popular: undefined;
  Latest: undefined;
};

export type FeedTabScreenProps<
  T extends keyof FeedTabParamList
> = MaterialTopTabScreenProps<FeedTabParamList, T>;
