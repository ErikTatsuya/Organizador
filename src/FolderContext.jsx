import { createContext, useContext, useState } from "react";

const FolderContext = createContext();

export function FolderProvider({ children }) {
	const [selectedFolderPath, setSelectedFolderPath] = useState(``);

	return (
		<FolderContext.Provider
			value={{ selectedFolderPath, setSelectedFolderPath }}>
			{children}
		</FolderContext.Provider>
	);
}

export function useFolder() {
	try {
		const context = useContext(FolderContext);
		return context;
	} catch (Err) {
		throw new Error(`useFolder must be used within a FolderProvider`);
	}
}
