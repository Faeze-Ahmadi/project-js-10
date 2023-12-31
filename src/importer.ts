import {ContacsListType} from "./types";

export const contactNameInput =
    document.querySelector<HTMLInputElement>("#contactName");
export const phoneNumberInput =
    document.querySelector<HTMLInputElement>("#phoneNumber");
export const deviceStorageInput =
    document.querySelector<HTMLInputElement>("#deviceStorage");
export const ShowContactButton =
    document.querySelector<HTMLButtonElement>("#ShowContactButton"); 
export const closeDrawerButton =
    document.querySelector<HTMLButtonElement>("#closeDrawerButton");
export const contactListElement =
    document.querySelector<HTMLUListElement>("#contacts_list");
export const contactsListDrawer =
    document.querySelector<HTMLUListElement>("#contactsListDrawer");
export const submitButton =
    document.querySelector<HTMLButtonElement>("#submitButton");
export const contactsList: ContacsListType = [];

