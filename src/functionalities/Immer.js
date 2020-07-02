// Using Immer for immutability
import { produce } from 'immer';

let book = Map({ title: 'harry Potter' });

function publish(book) {
    return produce(book, draftBook => {
        draftBook.isPublished = true;
    })
}

let updated = publish(book);
console.log(book);
console.log(updated)