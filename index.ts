import { 
    ShowContactButton,
    closeDrawerButton,
    contactListElement,
    contactsList,
    submitButton
} from "./src/importer.js";

import {
    showContactButtonHandler,
    closeContactDrawerHandler,
    handleCreateContact
} from "./src/events.js";

ShowContactButton?.addEventListener("click", showContactButtonHandler);
closeDrawerButton?.addEventListener("click", closeContactDrawerHandler);
submitButton?.addEventListener("click", handleCreateContact);