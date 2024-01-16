import {render, unmountComponentAtNode} from "react-dom";

import {act} from "react-dom/test-utils";
import {Search} from "./Search";
import {ContainerType} from "../../lib/tests/types/types";

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

describe('Search', () => {
    test('element rendered in DOM', () => {
        act(() => {
            render(<Search/>, container);
        })
        expect(container?.querySelector('input[placeholder="Поиск"]')).toBeInTheDOM();
    })

})
