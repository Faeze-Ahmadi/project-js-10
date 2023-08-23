import {
    contactNameInput, 
    contactsListDrawer, 
    phoneNumberInput, 
    deviceStorageInput,
    contactListElement,
    contactsList  
} from "./importer.js";

import {ContactProps} from "./types.js";
 
export const showContactButtonHandler = () => {
    contactsListDrawer?.classList.remove("bottom-[-100%]");
    contactsListDrawer?.classList.add("bottom-[0%]");
};

export const closeContactDrawerHandler = () => {
    contactsListDrawer?.classList.add("bottom-[-100%]");
    contactsListDrawer?.classList.remove("bottom-[0%]");
};

export const handleCreateContact =  () => {
    const newContact: ContactProps = {
        id: crypto.randomUUID(),
        contactName: contactNameInput?.value ?? "",
        phoneNumber: phoneNumberInput?.value ?? "",
        avatar: null,
        storage: deviceStorageInput?.checked ? "Device" : "SIM",
    };
    contactsList.push(newContact);

    const listItem = document.createElement("li");
    listItem.className = "py-4 px-2 bg-slate-100 rounded-lg";
    const contactNameElement = document.createElement("h2");
    contactNameElement.className = "text-slate-700";
    contactNameElement.innerText = newContact.contactName;
    const contactPhoneNumberElement = document.createElement("p");
    contactPhoneNumberElement.className = "text-slate-500";
    contactPhoneNumberElement.innerText = newContact.phoneNumber.toString();
    listItem.appendChild(contactNameElement);
    listItem.appendChild(contactPhoneNumberElement);
    contactListElement?.appendChild(listItem);

};
