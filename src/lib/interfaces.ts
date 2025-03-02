// Definición de tipos
export interface OptionData {
    text: string;
    isCorrect: boolean;
}

export interface QuestionData {
    questionText: string;
    options: OptionData[];
}