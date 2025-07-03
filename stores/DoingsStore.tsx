import { DoingType } from '@/types/DoingType';
import { map } from 'nanostores';

export const $doings = map<Record<string, DoingType>>({});

// Initialize with some default doings
$doings.set({
    '1': { title: `Don't eat sugar`, completed: false },
    '2': { title: `Read 10 pages`, completed: false },
    '3': { title: `Clean for 10 minutes`, completed: false },
    '4': { title: `Go for a walk`, completed: false },
    '5': { title: `Work on videogame`, completed: false },
    '6': { title: `Do yoga`, completed: false },
    });

$doings.subscribe((doing) => {
    console.log('Doings updated:', doing);
})