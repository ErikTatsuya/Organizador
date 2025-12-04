import { invoke } from "@tauri-apps/api/core";
import { open } from "@tauri-apps/plugin-dialog";
import { useState } from "react";
import { useFolder } from "./FolderContext";

export default function Organize() {
	const [selectedFolder, setSelectedFolder] = useState("");

	const { setSelectedFolderPath } = useFolder();

	async function selectFolder() {
		try {
			const selected = await open({
				directory: true,
				multiple: false,
				title: "Selecione uma pasta.",
			});

			if (selected) {
				setSelectedFolder(selected);
				setSelectedFolderPath(selected);
				console.log(`Pasta "${selected}" selecionada`);
			}
		} catch (Err) {
			console.log(`Pasta não selecionada`);
			console.log(`Error: ${Err}`);
		}
	}

	return (
		<section className="component">
			<div style={{ marginBottom: "2rem" }}>
				<h1>Organizador</h1>
				<p>Selecine uma pasta para organizar os arquivos.</p>
			</div>
			<div style={{ display: "flex", justifyContent: "space-between" }}>
				<button onClick={selectFolder}>
					<img src="/folder-open.svg" alt="Abrir pasta" />
					Selecionar Pasta
				</button>
				<button>
					<img src="/folder-organize.svg" alt="Organizar pasta" />
					Organizar
				</button>
			</div>
		</section>
	);
}
