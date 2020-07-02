// Using Immutable JS for providing immutability
import { Map } from 'immutable';

let book = Map({ title: 'harry Potter' });

function publish(book) {
    return book.set("isPublished", true);
}

result = publish(book);
console.log(result.toJS());

