import { DoingType } from "@/types/DoingType";
import { computed, map } from "nanostores";
import { $currentDate } from "./DateStore";

export const $doings = map<Record<string, DoingType>>({});

// Initialize with some default doings
$doings.set({
  "1": { title: `Don't eat sugar`, completed: [new Date().toISOString()] },
  "2": { title: `Read 10 pages`, completed: [new Date().toISOString()] },
  "3": { title: `Clean for 10 minutes`, completed: [new Date().toISOString()] },
  "4": { title: `Go for a walk`, completed: [] },
  "5": { title: `Work on videogame`, completed: [] },
  "6": { title: `Do yoga`, completed: [] },
  "7": { title: `Meditate`, completed: [] },
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
