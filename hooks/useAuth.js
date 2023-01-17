import React, { createContext, useContext, useEffect, useState } from "react";
import auth from "@react-native-firebase/auth";
const AuthContext = createContext({
  //initial state
});
/* 유저에 관한 것을 저장 */
export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  useEffect(() => {
    auth().onAuthStateChanged((user) => {
      if (user) {
        setUser(user);
      } else {
        setUser(null);
      }
    });
  }, []);
  return (
    <AuthContext.Provider
      value={{
        user: user,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

//이 훅함수를 통해 저장된 state를 불러올수 있음, setState는 어떻게 할까?
export default function useAuth() {
  return useContext(AuthContext);
}
