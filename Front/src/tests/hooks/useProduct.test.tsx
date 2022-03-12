import {setupServer} from "msw/node";
import {rest} from "msw";
import {renderHook, act} from "@testing-library/react-hooks";
import useProduct from "../../hooks/useProduct";
import UseProduct from "../../hooks/useProduct";
import {Product} from "../../App";

const server = setupServer(

    rest.post(

        "http://localhost:8000/api/cart/17",
        (req, res, ctx) => {

            return res(

                ctx.json(

                    {

                        quantity: 5

                    }
                )

            );

        }

    ),

);

beforeAll(() => server.listen());
beforeEach(() => server.resetHandlers());
afterAll(() => server.close());

test('Add products', async () => {

    const addProducts: Product = {

        id: 17,
        name: 'Annie',
        price: '20',
        quantity: 20,
        image: 'https://rickandmortyapi.com/api/character/avatar/17.jpeg'

    }
    const { result } = renderHook(() => useProduct(addProducts));
    const { loading, addProduct } = result.current;

    expect(loading).toEqual(false);

    await act( async () => {

        await addProduct();

    });

    const { message } = result.current;
    console.log(message);

});
