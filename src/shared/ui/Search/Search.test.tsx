import {render} from "@testing-library/react";
import {screen} from "@testing-library/react";
import {Search} from "./Search";


describe('Search', () => {
    test('element rendered in DOM', () => {
        render(<Search/>);
        const element = screen.getByPlaceholderText('Поиск')
        expect(element).toBeInTheDOM();
    })
})
