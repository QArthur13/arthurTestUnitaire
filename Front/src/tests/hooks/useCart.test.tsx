import {setupServer} from "msw/node";
import {rest} from "msw";
import {act, renderHook} from "@testing-library/react-hooks";
import useCart from "../../hooks/useCart";
import {Product} from "../../App";

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
                            price: '20',
                            quantity: 20,
                            image: 'https://rickandmortyapi.com/api/character/avatar/1.jpeg'
                        },
                        {
                            id: 13,
                            name: 'Alien Googah',
                            price: '20',
                            quantity: 20,
                            image: 'https://rickandmortyapi.com/api/character/avatar/13.jpeg'
                        },
                        {
                            id: 17,
                            name: 'Annie',
                            price: '20',
                            quantity: 20,
                            image: 'https://rickandmortyapi.com/api/character/avatar/17.jpeg'
                        }
                    ]

                })

            );

        }

    ),

    rest.delete(

        "http://localhost:8000/api/cart/1",
        (req, res, ctx) => {

            return res(

                ctx.json({

                    products: {
                        "1": {
                            id: 13,
                            name: 'Alien Googah',
                            price: '20',
                            quantity: 20,
                            image: 'https://rickandmortyapi.com/api/character/avatar/13.jpeg'
                        },
                        "2": {
                            id: 17,
                            name: 'Annie',
                            price: '20',
                            quantity: 20,
                            image: 'https://rickandmortyapi.com/api/character/avatar/17.jpeg'
                        }
                    }

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
    console.log(products);

} );

test("delete cart", async () => {

    const deleteCart: Product = {

        id: 1,
        name: 'Rick Sanchez',
        price: '20',
        quantity: 20,
        image: 'https://rickandmortyapi.com/api/character/avatar/1.jpeg'
    }

    const { result } = renderHook(() => useCart());
    const { loading, removeToCart } = result.current;

    expect(loading).toEqual(true);
    await act(async () => {

        await removeToCart(deleteCart);

    });

    const { message } = result.current;
    console.log(message);

});
