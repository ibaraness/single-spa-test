import { ReplaySubject } from 'rxjs';

/**
 * Using ReplaySubject as our message bus, to communicate between frameworks.
 *
 * Directions:
 *
 * Just import it: 'import {exampleEvent} from './[relative_path]/common/exampleEvent.js';'
 *
 * Listen to with: exampleEvent.subscribe((message)=>{//Do something with the results})
 *
 * Add new values: exampleEvent.next([new_string_value]);
 */
export const exampleEvent = new ReplaySubject('Event test 1');;
