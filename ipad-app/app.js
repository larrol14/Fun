const tasks = JSON.parse(localStorage.getItem("ai-desk-tasks") || "[]");
const taskList = document.querySelector("#task-list");
const taskCount = document.querySelector("#task-count");
const save = () => localStorage.setItem("ai-desk-tasks", JSON.stringify(tasks));
function renderTasks() {
  taskList.replaceChildren();
  tasks.forEach((task, index) => { const item = document.createElement("li"); if (task.done) item.className = "done"; item.innerHTML = `<input type="checkbox" ${task.done ? "checked" : ""} aria-label="Aufgabe erledigt"><span></span><button aria-label="Aufgabe löschen">×</button>`; item.querySelector("span").textContent = task.text; item.querySelector("input").onchange = () => { task.done = !task.done; save(); renderTasks(); }; item.querySelector("button").onclick = () => { tasks.splice(index, 1); save(); renderTasks(); }; taskList.append(item); });
  taskCount.textContent = `${tasks.filter((task) => !task.done).length} offen`;
}
document.querySelector("#task-form").onsubmit = (event) => { event.preventDefault(); const input = document.querySelector("#task-input"); if (!input.value.trim()) return; tasks.unshift({ text: input.value.trim(), done: false }); input.value = ""; save(); renderTasks(); };
document.querySelector("#focus-button").onclick = () => document.querySelector("#task-input").focus();
const alarmInput = document.querySelector("#alarm-input"); const alarmTime = document.querySelector("#alarm-time"); const alarmNote = document.querySelector("#alarm-note"); const storedAlarm = localStorage.getItem("ai-desk-alarm"); if (storedAlarm) { alarmInput.value = storedAlarm; alarmTime.textContent = storedAlarm; alarmNote.textContent = "Wecker ist gespeichert."; }
document.querySelector("#alarm-button").onclick = () => { if (!alarmInput.value) return; localStorage.setItem("ai-desk-alarm", alarmInput.value); alarmTime.textContent = alarmInput.value; alarmNote.textContent = "Wecker ist gespeichert."; };
function updateNetwork() { document.querySelector("#network-status").textContent = navigator.onLine ? "Online" : "Offline bereit"; }
window.addEventListener("online", updateNetwork); window.addEventListener("offline", updateNetwork); updateNetwork(); renderTasks();
if ("serviceWorker" in navigator) navigator.serviceWorker.register("./sw.js").catch(() => {});