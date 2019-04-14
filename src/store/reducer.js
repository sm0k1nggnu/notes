const initialState = {
    notes : [
        {id: 0, title: 'A note', content: 'Lorem Ipsumasd asd sadas dasdasdas adasdas'},
    ],
    showNote: 0,
    lastNoteId: 0
}

const reducer = (state = initialState, action) => {
    console.table(state)
    switch (action.type) {
        case 'ADD_NOTE':
            //console.table(action)
            console.log(state.lastNoteId)
            const newId = Date.now()//state.lastNoteId  ? state.lastNoteId + 1 : 1;
            console.log(newId)
            return {
                ...state,
                showNote: newId,
                lastNoteId: newId,
                notes: state.notes.concat({
                    id: newId,
                    title: action.title,
                    content: action.content
                })
            }
        case 'DELETE_NOTE':
            const noteId = action.noteId;
            let notesArray = state.notes.filter(note => note.id !== noteId)
            return {
                ...state,
                showNote: null,
                notes: notesArray
            }
        case 'SELECT_NOTE':
            //console.table("select note " +  action.noteId)
            const id = action.noteId;
            return {
                ...state,
                showNote: id
            }
        default:
            return {
                ...state
            }
    }
    return state;
};

export default reducer;