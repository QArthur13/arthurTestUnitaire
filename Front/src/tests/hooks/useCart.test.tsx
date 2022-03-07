import {setupServer} from "msw/node";
import {rest} from "msw";
import {act, renderHook} from "@testing-library/react-hooks";
import useCart from "../../hooks/useCart";

const server = setupServer(

    rest.get(

        "http://localhost:8000/api/cart",
        (req, res, ctx) => {

            return res(

                ctx.json({

                    products: [
                        {
                            id: 1,
                            name: 'Rick Sanchez',
                            price: '15',
                            quantity: 20,
                            image: 'https://rickandmortyapi.com/api/character/avatar/1.jpeg'
                        },
                        {
                            id: 12,
                            name: 'Alexander',
                            price: '15',
                            quantity: 70,
                            image: 'https://rickandmortyapi.com/api/character/avatar/12.jpeg'
                        },
                        {
                            id: 17,
                            name: 'Annie',
                            price: '8',
                            quantity: 30,
                            image: 'https://rickandmortyapi.com/api/character/avatar/17.jpeg'
                        }
                    ]

                })

            );

        }

    )
);

beforeAll(() => server.listen());
afterEach(() => server.restoreHandlers());
afterAll(() => server.close());

test("load cart", async () => {

    const { result } = renderHook(() => useCart());
    const { loading, loadCart } = result.current;

    expect(loading).toEqual(true);
    await act(async () => {

        await loadCart();

    });

    const {products} = result.current;

} );
