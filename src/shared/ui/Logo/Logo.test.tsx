import {render, unmountComponentAtNode} from "react-dom";

import {act} from "react-dom/test-utils";
import {Logo} from "./Logo";

type ContainerType = Element | null;

let container: ContainerType = null;
beforeEach(() => {
    // подготавливаем DOM-элемент, куда будем рендерить
    container = document.createElement("div");
    document.body.appendChild(container);
});

afterEach(() => {
    // подчищаем после завершения
    if (container) {
        unmountComponentAtNode(container);
        container.remove();
        container = null;
    }
});

describe('Logo', () => {
    test('get element by text content', () => {
        act(() => {
            render(<Logo text={'MSH'}/>, container);
        })
        expect(container?.querySelector('span')?.textContent).toEqual('MSH');
    });
    test('element rendered in DOM', () => {
        act(() => {
            render(<Logo text={'MSH'}/>, container);
        })
        expect(container?.querySelector('div[data-test="logo"]')).toBeInTheDOM();
    })

})
