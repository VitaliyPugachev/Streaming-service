import * as React from "react";
import {StoreProvider} from "../../../../app/providers/storeProvider";


const initialState = {
    movieListByGenre: {
        data: [
            {
                "id": "13",
                "title": "Гладиатор",
                "poster": "https://media.kg-portal.ru/movies/g/gladiator/posters/gladiator_1.jpg",
                "year": "2000",
                "rating": "8.5",
                "genre": [
                    "Драма",
                    "Боевик",
                    "Приключения"
                ],
            },
            {
                "id": "13",
                "title": "Гладиатор",
                "poster": "https://media.kg-portal.ru/movies/g/gladiator/posters/gladiator_1.jpg",
                "year": "2000",
                "rating": "8.5",
                "genre": [
                    "Драма",
                    "Боевик",
                    "Приключения"
                ],
            }
        ],
        error: '',
        isLoading: false
    },
    movieInfoPage: {
        data: {
            "id": "12",
            "title": "Матрица",
            "poster": "https://i.pinimg.com/736x/c3/8d/09/c38d09658a348f3b6101e9eff348b706.jpg",
            "year": "1999",
            "rating": "8.7",
            "description": "Жизнь Томаса Андерсона разделена на две части: днём он — самый обычный офисный работник, получающий нагоняи от начальства, а ночью превращается в хакера по имени Нео, и нет места в сети, куда он бы не смог проникнуть. Но однажды всё меняется. Томас узнаёт ужасающую правду о реальности.",
            "genre": [
                "Боевик",
                "Научная фантастика"
            ],
            "director": "Братья Вачовски",
            "country": [
                "США",
                "Австралия"
            ],
            "actors": [
                "Киану Ривз",
                "Лоуренс Фишберн"
            ]
        },
        error: '',
        isLoading: false
    },
    movieList: {
        data: [
            {
                "id": "12",
                "title": "Матрица",
                "poster": "https://i.pinimg.com/736x/c3/8d/09/c38d09658a348f3b6101e9eff348b706.jpg",
                "year": "1999",
                "rating": "8.7",
                "description": "Жизнь Томаса Андерсона разделена на две части: днём он — самый обычный офисный работник, получающий нагоняи от начальства, а ночью превращается в хакера по имени Нео, и нет места в сети, куда он бы не смог проникнуть. Но однажды всё меняется. Томас узнаёт ужасающую правду о реальности.",
                "genre": [
                    "Боевик",
                    "Научная фантастика"
                ],
                "director": "Братья Вачовски",
                "country": [
                    "США",
                    "Австралия"
                ],
                "actors": [
                    "Киану Ривз",
                    "Лоуренс Фишберн"
                ]
            }
        ],
        isLoading: false,
        error: ''
    },
}

export const StoreDecorator = () => (Story: any) => (
    <StoreProvider initialState={initialState}>
        <Story />
    </StoreProvider>
)
