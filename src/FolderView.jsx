import { useState, useEffect } from "react";
import { invoke } from "@tauri-apps/api/core";
import { useFolder } from "./FolderContext";

export default function FolderView() {
	const [message, setMessage] = useState(``);
	const [folderName, setFolderName] = useState(`Selecione uma pasta`);

	const { selectedFolderPath } = useFolder();

	useEffect(() => {
		try {
			const invokedFolderName = invoke("get_folder_name", {
				folder_path: selectedFolderPath,
			});

			setFolderName(invokedFolderName);
		} catch (Err) {
			console.log(`Erro pegando o nome da pasta.`);
			console.log(`${Err}`);
		}
	}, [selectedFolderPath]);

	return (
		<section className="component">
			<div>
				<h1>{folderName}</h1>
			</div>
		</section>
	);
}
