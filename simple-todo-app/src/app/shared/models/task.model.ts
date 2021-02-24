export interface Task {
    id: string;
    task: string;
    dateCreated: Date;
    dateDue?: Date;
    completed?: boolean;
}