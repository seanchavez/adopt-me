import React from "react";
import { render, cleanup, fireEvent } from "react-testing-library";
import petfinder, { _breeds, _dogs, ANIMALS } from "petfinder-client";
import SearchParams from "../SearchParams";
import { TestScheduler } from "@jest/core";
import { exportAllDeclaration } from "@babel/types";

afterEach(cleanup);

test("SearchParams", async () => {
  const pf = petfinder();
  const { getByTestId, container, getByText } = render(<SearchParams />);

  const animalDropdown = getByTestId("use-dropdown-animal");
  expect(animalDropdown.children.length).toEqual(ANIMALS.length + 1);

  expect(pf.breed.list).toHaveBeenCalled();
  const breedDropdown = getByTestId("use-dropdown-breed");
  expect(breedDropdown.children.length).toEqual(_breeds.length + 1);

  const searchResults = getByTestId("search-results");
  expect(searchResults.textContent).toEqual("No Pets Found");
  fireEvent(getByText("Submit"), new MouseEvent("click"));
  expect(pf.pet.find).toHaveBeenCalled();
  expect(searchResults.children.length).toEqual(
    _dogs.petfinder.pets.pet.length
  );
});
