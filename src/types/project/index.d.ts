export interface IResProject {
    data?: Project[],
    error?: string,

}

export type Project = {
    id?: number,
    name: string,
}