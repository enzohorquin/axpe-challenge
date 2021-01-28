import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Search from './Search';

it('Renders correctly', () => {
    const { queryByPlaceholderText } = render(<Search />);
    expect(queryByPlaceholderText('Search places...')).toBeTruthy();
});

describe("Search input value", () => {
    it("Needs to update on change", () => {
        const { queryByPlaceholderText } = render(<Search />);
        const search = queryByPlaceholderText('Search places...');
        fireEvent.change(search, { target: { value: "test" } });
        expect(search.value).toBe("test");
    });
});