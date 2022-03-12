import React from 'react';
import {render, screen, waitFor} from '@testing-library/react';
import App from '../App';
import ReactDOM from "react-dom";
import {act} from "react-dom/test-utils";
import {set} from "msw/lib/types/context";
import {setupServer} from "msw/node";
import {rest} from "msw";
import {debug} from "util";
import {renderHook} from "@testing-library/react-hooks";
import useHome from "../hooks/useHome";

let container: any;

const server = setupServer(

    rest.get(
        'http://localhost:8000/api/products',
        (req, res, ctx) => {

          return res(

              ctx.json(
                  [
                    {
                      id: 1,
                      name: "Rick Sanchez",
                      price: "20",
                      quantity: 20,
                      image: "https://rickandmortyapi.com/api/character/avatar/1.jpeg"
                    },
                    {
                      id: 2,
                      name: "Morty Smith",
                      price: "20",
                      quantity: 20,
                      image: "https://rickandmortyapi.com/api/character/avatar/2.jpeg"
                    },
                    {
                      id: 3,
                      name: "Summer Smith",
                      price: "20",
                      quantity: 20,
                      image: "https://rickandmortyapi.com/api/character/avatar/3.jpeg"
                    },
                    {
                      id: 4,
                      name: "Beth Smith",
                      price: "20",
                      quantity: 20,
                      image: "https://rickandmortyapi.com/api/character/avatar/4.jpeg"
                    },
                    {
                      id: 5,
                      name: "Jerry Smith",
                      price: "20",
                      quantity: 20,
                      image: "https://rickandmortyapi.com/api/character/avatar/5.jpeg"
                    },
                    {
                      id: 6,
                      name: "Abadango Cluster Princess",
                      price: "20",
                      quantity: 20,
                      image: "https://rickandmortyapi.com/api/character/avatar/6.jpeg"
                    },
                    {
                      id: 7,
                      name: "Abradolf Lincler",
                      price: "20",
                      quantity: 20,
                      image: "https://rickandmortyapi.com/api/character/avatar/7.jpeg"
                    },
                    {
                      id: 8,
                      name: "Adjudicator Rick",
                      price: "20",
                      quantity: 20,
                      image: "https://rickandmortyapi.com/api/character/avatar/8.jpeg"
                    },
                    {
                      id: 9,
                      name: "Agency Director",
                      price: "20",
                      quantity: 20,
                      image: "https://rickandmortyapi.com/api/character/avatar/9.jpeg"
                    },
                    {
                      id: 10,
                      name: "Alan Rails",
                      price: "20",
                      quantity: 20,
                      image: "https://rickandmortyapi.com/api/character/avatar/10.jpeg"
                    },
                    {
                      id: 11,
                      name: "Albert Einstein",
                      price: "20",
                      quantity: 20,
                      image: "https://rickandmortyapi.com/api/character/avatar/11.jpeg"
                    },
                    {
                      id: 12,
                      name: "Alexander",
                      price: "20",
                      quantity: 20,
                      image: "https://rickandmortyapi.com/api/character/avatar/12.jpeg"
                    },
                    {
                      id: 13,
                      name: "Alien Googah",
                      price: "2",
                      quantity: 20,
                      image: "https://rickandmortyapi.com/api/character/avatar/13.jpeg"
                    },
                    {
                      id: 14,
                      name: "Alien Morty",
                      price: "20",
                      quantity: 20,
                      image: "https://rickandmortyapi.com/api/character/avatar/14.jpeg"
                    },
                    {
                      id: 15,
                      name: "Alien Rick",
                      price: "20",
                      quantity: 20,
                      image: "https://rickandmortyapi.com/api/character/avatar/15.jpeg"
                    },
                    {
                      id: 16,
                      name: "Amish Cyborg",
                      price: "20",
                      quantity: 20,
                      image: "https://rickandmortyapi.com/api/character/avatar/16.jpeg"
                    },
                    {
                      id: 17,
                      name: "Annie",
                      price: "20",
                      quantity: 20,
                      image: "https://rickandmortyapi.com/api/character/avatar/17.jpeg"
                    },
                    {
                      id: 18,
                      name: "Antenna Morty",
                      price: "20",
                      quantity: 20,
                      image: "https://rickandmortyapi.com/api/character/avatar/18.jpeg"
                    },
                    {
                      id: 19,
                      name: "Antenna Rick",
                      price: "20",
                      quantity: 20,
                      image: "https://rickandmortyapi.com/api/character/avatar/19.jpeg"
                    },
                    {
                      id: 20,
                      name: "Ants in my Eyes Johnson",
                      price: "20",
                      quantity: 20,
                      image: "https://rickandmortyapi.com/api/character/avatar/20.jpeg"
                    }
                  ]
              )

          );

        }
    )
);

beforeEach(() => {

  container = document.createElement("div");
  document.body.appendChild(container);

});

/*test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});*/

test('renders have list', () => {

  const { container } = render(<App />);
  const title = screen.getByText(/list/i);
  expect(title).toBeInTheDocument();

});

test('add product', () => {

    act(() => {
        ReactDOM.render(<App />, container);
    });

    console.log(server.listen());

});
