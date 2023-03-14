import {
	createContext,
	PropsWithChildren,
	useContext,
	useEffect,
	useState,
} from "react";
import { IUser } from "@/types/UserType";
import { auth } from "@/config/firebase";
import {
	signInWithEmailAndPassword,
	onAuthStateChanged,
	signOut as firebaseSignout,
} from "firebase/auth";
import { kikapi } from "@/utils/helpers";
import { Text } from "@chakra-ui/react";
import { useRouter } from "next/router";

export interface IAuthContext {
	user?: IUser | null;
	signin: (email: string, password: string) => void;
	signOut: () => void;
	signup: (newUser: any) => void;
	authError?: string;
}

export const AuthContext = createContext<IAuthContext>({
	signin: () => {},
	signOut: () => {},
	signup: () => {},
});

const AuthProvider = ({ children }: PropsWithChildren) => {
	const router = useRouter();
	const [user, setUser] = useState<IUser | null>(null);
	const [authError, setAuthError] = useState("");

	useEffect(() => {
		setAuthError("");
		console.log("getting user");
		const unsubscribe = onAuthStateChanged(auth, (fbUser) => {
			setAuthError("");
			console.log("fbUser", fbUser);
			if (fbUser) {
				kikapi
					.get(`/api/athletes/${fbUser.displayName}`)
					.then((res) => {
						setAuthError("");
						setUser(res.data.data);
					})
					.catch((err) => {
						setAuthError(err.response.data.error);
					});
			}
		});
		return () => unsubscribe();
	}, []);

	useEffect(() => {
		sessionStorage.setItem("ks_athlete", JSON.stringify(user));
	}, [user]);

	/**
	 * It creates a new user in the database and then logs them in.
	 * @param {any} newUser - This is the user object that we are sending to the backend.
	 */
	const signup = (newUser: any) => {
		kikapi
			.post("/api/athletes/create", { user: newUser })
			.then((res) => {
				console.log("Create user result", res);
				signInWithEmailAndPassword(
					auth,
					newUser.email,
					newUser.password
				)
					.then((user) => {
						console.log("successfully logged in", user);
						router.push("/dashboard");
					})
					.catch((err) => {
						console.log("error logging in", err);
						setAuthError(err.message);
					});
			})
			.catch((err) => {
				console.log("Error", err);
				setAuthError(err.response.data.error);
			});
	};
	/**
	 * It takes in an email and password and then uses the signInWithEmailAndPassword function
	 * from Firebase to sign in the user.
	 * @param {string} email - string, password: string
	 * @param {string} password - string
	 */
	const signin = (email: string, password: string) => {
		signInWithEmailAndPassword(auth, email, password)
			.then((userCred) => {
				console.log("userCred", userCred);
				router.push("/dashboard");
			})
			.catch((err) => {
				console.log("SIGNIN ERROR", err);
				setAuthError(err.response.data.error);
			});
	};
	const signOut = async () => {
		sessionStorage.clear();
		setUser(null);
		await firebaseSignout(auth).then(() => {
			router.push("/login");
		});
	};
	// TODO: Add toast notification when user is logged in or out.
	return (
		<AuthContext.Provider
			value={{
				user,
				signin,
				signOut,
				signup,
				authError,
			}}
		>
			{children}
		</AuthContext.Provider>
	);
};

export const useAuth = () => useContext(AuthContext);

export default AuthProvider;
