import { createNativeStackNavigator } from "@react-navigation/native-stack";
import useAuth from "./hooks/useAuth";
import Main from "./navigations/Main";
import Join from "./screens/Join";
import Login from "./screens/Login";

const Stack = createNativeStackNavigator();
const StackNavigator = () => {
  const { user } = useAuth();
  console.log(user);
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      {user ? (
        <Stack.Screen name="Main" component={Main} />
      ) : (
        <>
          <Stack.Screen name="Login" component={Login} />
          <Stack.Screen
            name="Join"
            component={Join}
            options={{ presentation: "modal" }}
          />
        </>
      )}
    </Stack.Navigator>
  );
};

export default StackNavigator;
