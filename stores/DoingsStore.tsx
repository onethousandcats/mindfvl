import { DoingType } from "@/types/DoingType";
import { computed, map } from "nanostores";
import { $currentDate } from "./DateStore";

export const $doings = map<Record<string, DoingType>>({});

// Initialize with some default doings
$doings.set({
  "1": { title: `Don't eat sugar`, completed: [new Date().toISOString()], frequency: "Daily" },
  "2": { title: `Read 10 pages`, completed: [new Date().toISOString()], frequency: "Weekly" },
  "3": { title: `Clean for 10 minutes`, completed: [new Date().toISOString()], frequency: "Daily" },
  "4": { title: `Go for a walk`, completed: [], frequency: "Daily" },
  "5": { title: `Work on videogame`, completed: [], frequency: "Daily" },
  "6": { title: `Do yoga`, completed: [], frequency: "Weekly" },
  "7": { title: `Meditate`, completed: [], frequency: "Daily" },
});

export const isCompleted = (id: string) =>
  computed($doings, (doings) => {
    return doings[id].completed.some(
      (d) => d.slice(0, 10) === $currentDate.get().slice(0, 10),
    );
  });

$doings.subscribe((doing) => {
  console.log("Doings updated:", doing);
});
