import { onAuthStateChanged, signInWithEmailAndPassword } from "firebase/auth";
import {
	createContext,
	PropsWithChildren,
	useContext,
	useEffect,
	useState,
} from "react";
import { IUser } from "@/types/UserType";
import { auth } from "@/config/firebase";

export interface IAuthContext {
	user?: IUser;
	signin?: (email: string, password: string) => void;
}

export const AuthContext = createContext<IAuthContext>({});

const AuthProvider = ({ children }: PropsWithChildren) => {
	const [user, setUser] = useState<IUser>();
	useEffect(() => {
		console.log("getting user");
		// @ts-ignore
		onAuthStateChanged(auth, (fbUser) => {
			if (fbUser) {
				console.log("id", fbUser.uid);
			} else {
				console.log("user doesnt exist");
			}
		});
	}, []);
	const signin = (email: string, password: string) => {
		signInWithEmailAndPassword(auth, email, password)
			.then((userCred) => {
				console.log("userCred", userCred.user.accessToken);
				sessionStorage.setItem(
					"ks_athlete",
					userCred?.user?.accessToken,
				);
			})
			.catch((err) => {
				console.log("errr", err);
			});
	};
	return (
		<AuthContext.Provider value={{ user, signin }}>
			{children}
		</AuthContext.Provider>
	);
};

export const useAuth = () => useContext(AuthContext);

export default AuthProvider;
