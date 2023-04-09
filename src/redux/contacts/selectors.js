import { createSelector } from "@reduxjs/toolkit";
import { selectFilter } from "redux/filter/selectors";

export const selectContacts = state => state.contacts.items;
export const selectIsLoading = state => state.contacts.isLoading;
export const selectError = state => state.contacts.error;

export const selectfilteredContacts = createSelector(
    [selectContacts, selectFilter],
    (contacts, filter) => {
        const searchedName = filter.toLowerCase();
        return contacts.filter(contact =>
            contact.name.toLowerCase().includes(searchedName)
    );
    }
)