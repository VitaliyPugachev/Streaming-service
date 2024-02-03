export interface TitleSchema {
    title: string,
    id: string,
}

export interface MovieTitles {
    titles: TitleSchema[] | undefined
}
