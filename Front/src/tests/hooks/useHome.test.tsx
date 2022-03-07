import {setupServer} from "msw/node";
import {rest} from "msw";
import {act, renderHook} from "@testing-library/react-hooks";
import useHome from "../../hooks/useHome";

const server = setupServer(

    rest.get(
        'http://localhost:8000/products',
        (req, res, ctx) => {

            const { listProducts } = req.body;

            return res(

                ctx.json(listProducts)

            );

        }
        )
);

beforeAll(() => server.listen());
beforeEach(() => server.resetHandlers());
afterAll(() => server.close());

test("load products", async () => {

    const { result } = renderHook(() => useHome());
    const { loading, loadProducts } = result.current;

    expect(loading).toEqual(true);

    await act(async () => {

        await loadProducts();

    });

    const { products } = result.current;
    console.log(products);

});
