export type ArticleItem = {
    id:string,
    title: string,
    date: string,
    summary: string,
    category: string,

}

export interface Project {
    id: number;
    name: string
    description: string;
    link: string;
}