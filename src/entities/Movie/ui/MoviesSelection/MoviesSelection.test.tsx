import {render, screen} from "@testing-library/react";
import {MoviesSelection} from "./MoviesSelection";
import {MovieCardSchema} from "../../model/types/movieCard";

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



    test('element had been rendered in DOM, ui didnt change', () => {
        render(<MoviesSelection title={'popular'} isLoading={false} moviesList={moviesList}/>);
        const element = screen.getByTestId('movieSelection');
        expect(element).toBeInTheDocument();
        expect(element).toMatchSnapshot();
    });
})
