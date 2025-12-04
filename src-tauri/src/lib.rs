// Learn more about Tauri commands at https://tauri.app/develop/calling-rust/
use std::fs

#[tauri::command]
fn get_message() -> String {
    return "Dev".to_string();
}

#[tauri::command]
fn get_folder_name(folder_path) -> String{
    let folder = fs::read_dir(&folder_path)
    let mut folder_name = String::new();
}

#[cfg_attr(mobile, tauri::mobile_entry_point)]
pub fn run() {
    tauri::Builder::default()
        .plugin(tauri_plugin_opener::init())
        .plugin(tauri_plugin_dialog::init())
        .invoke_handler(tauri::generate_handler![get_message])
        .run(tauri::generate_context!())
        .expect("error while running tauri application");
}
