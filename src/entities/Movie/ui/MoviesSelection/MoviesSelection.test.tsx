import {render, screen} from "@testing-library/react";
import {MoviesSelection} from "./MoviesSelection";
import {MovieCardSchema} from "../../model/types/movieCard";
import {unmountComponentAtNode} from "react-dom";

jest.mock('react-router-dom');

describe('MoviesSelection', () => {
    const moviesList: MovieCardSchema[] = [
        {
            id: '1',
            title: 'movie1',
            poster: '',
            description: 'description',
            year: '2023',
            director: 'Director',
            genre: ['adventure'],
            country: ['USA'],
            actors: ['actor'],
            rating: '7'
        },
        {
            id: '2',
            title: 'movie2',
            poster: '',
            description: 'description',
            year: '2023',
            director: 'Director',
            genre: ['adventure'],
            country: ['USA'],
            actors: ['actor'],
            rating: '7'
        },
    ];

    beforeEach(() => {
        render(<MoviesSelection title={'popular'} isLoading={false} moviesList={moviesList}/>);
    })


    test('element had been rendered in DOM', () => {
        const element = screen.getByTestId('movieSelection');
        expect(element).toBeInTheDocument();
    });
    test('visualization is not changed', () => {
        const element = screen.getByTestId('movieSelection');
        expect(element).toMatchSnapshot();
    });

})
