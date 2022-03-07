import {setupServer} from "msw/node";
import {rest} from "msw";
import {renderHook} from "@testing-library/react-hooks";
import useProduct from "../../hooks/useProduct";

const server = setupServer(

    rest.post(

        "http://localhost/api/17",
        (req, res, ctx) => {

            return res(

                ctx.json(

                    {

                        'quantity': 15

                    }
                )

            );

        }

    )

);

beforeAll(() => server.listen());
beforeEach(() => server.resetHandlers());
afterAll(() => server.close());

test('Add products', async () => {

    //const { result } = renderHook(() => useProduct(server));

})
