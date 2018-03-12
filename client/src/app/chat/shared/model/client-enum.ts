// Actions you can take on the App
export enum Action {
    JOINED,
    LEFT,
    RENAME
}

// Socket.io events
export enum Event {
    CONNECT = 'connect',
    DISCONNECT = 'disconnect'
}

export interface User {
    id?: number;
    name?: string;
    avatar?: string;
}

export interface Message {
    from?: User;
    content?: any;
    action?: Action;
}

export enum DialogUserType {
    NEW,
    EDIT
}
