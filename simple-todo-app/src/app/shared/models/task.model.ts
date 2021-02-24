export interface Task {
    id: number;
    task: string;
    dateCreated: Date;
    dateDue?: Date;
    completed?: boolean;
}