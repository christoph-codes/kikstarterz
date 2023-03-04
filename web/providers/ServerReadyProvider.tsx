import { fetcher } from "@/utils/helpers";
import { PropsWithChildren, createContext, useContext } from "react";
import useSWR from "swr";

const ServerContext = createContext({ isServerReady: false });

const ServerReadyProvider = ({ children }: PropsWithChildren) => {
	const { data } = useSWR("/api/healthcheck", fetcher);

	if (data?.status) {
		console.log("ready");
	}

	return (
		<ServerContext.Provider value={{ isServerReady: data?.status }}>
			{children}
		</ServerContext.Provider>
	);
};

export const useServerReady = () => useContext(ServerContext);

export default ServerReadyProvider;
