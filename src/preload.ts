// See the Electron documentation for details on how to use preload scripts:
// https://www.electronjs.org/docs/latest/tutorial/process-model#preload-scripts
import { contextBridge, ipcRenderer } from "electron";

contextBridge.exposeInMainWorld("electronAPI", {
  fetchFemmes: () => ipcRenderer.invoke("fetch-femmes"),
  fetchHommes: () => ipcRenderer.invoke("fetch-hommes"),
  fetchPibs: () => ipcRenderer.invoke("fetch-pibs"),
  fetchTousGenres: () => ipcRenderer.invoke("fetch-tousgenres"),
  fetchPopulations: () => ipcRenderer.invoke("fetch-populations"),
});
