import {render} from "@testing-library/react";
import {Logo} from "./Logo";
import {screen} from "@testing-library/react";

describe('Logo', () => {
    test('Text content', () => {
        render(<Logo text={'MSH'}/>);
        const element = screen.getByText('MSH')
        expect(element.textContent).toEqual('MSH');
    });
    test('element rendered in DOM', () => {
        render(<Logo text={'MSH'}/>);
        const element = screen.getByTestId('logo')
        expect(element).toBeInTheDOM();
    })
})
