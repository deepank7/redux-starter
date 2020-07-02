import store from './store';
import { bugAdded, bugResolved, bugRemoved } from './actions';
store.subscribe(() => {
    console.log("Store changed!", store.getState());
});

store.dispatch(bugAdded("Bug1"));
store.dispatch(bugAdded("Bug2"));
store.dispatch(bugResolved(1));
store.dispatch(bugRemoved(2));

console.log(store.getState());

