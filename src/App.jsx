import { useState } from "react";
import { invoke } from "@tauri-apps/api/core";
import Organize from "./Organize";
import FolderView from "./FolderView";
import "./style.css";
import { FolderProvider } from "./FolderContext";

function App() {
	const [greetMsg, setGreetMsg] = useState("");
	const [name, setName] = useState("");

	async function greet() {
		// Learn more about Tauri commands at https://tauri.app/develop/calling-rust/
		setGreetMsg(await invoke("greet", { name }));
	}

	return (
		<main>
			<FolderProvider>
				<Organize />
				<FolderView />
			</FolderProvider>
		</main>
	);
}

export default App;
