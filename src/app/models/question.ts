export class Question {
    public id: number | null = null;
    public text: string | null = null;
    public points: number | null = null;
    public answers: {text: string, isCorrect:boolean}[] = [];
}