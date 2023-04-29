export interface IResChannel {
    data?: Channel[],
    error?: string,

}

export type Channel = {
    id?: number,
    name: string,
}