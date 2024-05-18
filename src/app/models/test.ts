import { Question } from "./question";


export class Test {
    public id: number | null = null;
    public text: string | null = null;
    public points: number | null = null;
    public questions: Question[] = [];
}