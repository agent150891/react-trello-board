import { CARD_ADD, CARD_EDIT, CARD_REMOVE, CARD_MOVE_BETWEEN_COLUMNS, CARD_MOVE_IN_COLUMN } from './../constants';

const cardAdd = ({ title, shortDescription, description, columnId }) => {
    return {
        type: CARD_ADD,
        payload: {
            title,
            shortDescription,
            description,
            columnId
        }
    }
}

const cardRemove = ({ id }) => {
    return {
        type: CARD_REMOVE,
        payload: { id }
    }
}

const cardEdit = (payload) => {
    return {
        type: CARD_EDIT,
        payload,
    }
}

export { cardAdd, cardRemove, cardEdit }