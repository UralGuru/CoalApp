const UPDATE_NEW_MESSAGE_BODY = 'UPDATE-NEW-MESSAGE-BODY';
const SEND_MESSAGE = 'SEND-MESSAGE';

let initialState = {
    dialogs: [
        {id: 1, name: 'Marins'},
        {id: 2, name: 'Ural'},
        {id: 3, name: 'Danya'},
        {id: 4, name: 'Matvey'},
        {id: 5, name: 'Rustic'},
        {id: 6, name: 'Vova'}],
    messages: [
        {id: 1, mes: "How a u, my hommy?"},
        {id: 2, mes: "Hi"},
        {id: 3, mes: "Go buxaty"},
        {id: 4, mes: "Yo"}],
    newMessageBody: ""
}

const dialogsReducer = (state=initialState, action) => {
    switch (action.type) {
        case UPDATE_NEW_MESSAGE_BODY:
            state.newMessageBody = action.body
            return  state;

        case SEND_MESSAGE:
            let body = state.newMessageBody;
            state.newMessageBody = "";
            state.messages.push({id: 4, mes: body})
            return  state;
        default:
            return state;
    }

    return state;
};



export const sendMessageCreator = () => {
    return {
        type: SEND_MESSAGE
    };
};

export const updateNewMessageBodyCreator = (body) => {
    return {
        type: UPDATE_NEW_MESSAGE_BODY,
        body: body
    };
};

export default dialogsReducer;