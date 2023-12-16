import { StackNavigationProp } from "@react-navigation/stack";
import { RootStackParamList } from "@src/types/navigationTypes";
import { useNavigation } from "@react-navigation/native";

export const useAppNavigation = () => {
  const navigation = useNavigation<StackNavigationProp<RootStackParamList>>();
  return navigation;
};
