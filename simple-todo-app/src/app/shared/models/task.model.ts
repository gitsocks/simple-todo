export interface Task {
    id: string;
    task: string;
    dateCreated: Date;
    dateDue?: any;
    completed?: boolean;
}