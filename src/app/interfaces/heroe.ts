export interface Heroe {
    id: number, 
    name: string, 
    description: string,
    likes: number,
    dislikes: number

}

export interface UpdateHeroeDTO{
    id?: number, 
    name?: string, 
    description?: string,
    likes?: number,
    dislikes?: number
}