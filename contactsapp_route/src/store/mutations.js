import Constant from '../Constant';

// Change state only
export default {
    /*
    [Constant.ADD_CONTACT_FORM] : (state) => {
        state.contact = { no:'', name:'', tel:'', address:'', photo:'' };
        state.mode = "add";
        state.currentView = "contactForm";
    },
    [Constant.CANCEL_FORM] : (state) => {
        state.currentView = null;
    },
    [Constant.EDIT_CONTACT_FORM] : (state, payload) => {
        state.contact = payload.contact;
        state.mode = "update";
        state.currentView = "contactForm";
    },
    [Constant.EDIT_PHOTO_FORM] : (state, payload) => {
        state.contact = payload.contact;
        state.currentView = "updatePhoto";
    },
    */
    [Constant.FETCH_CONTACTS] : (state, payload) => {
        state.contactlist = payload.contactlist;
    },
    [Constant.FETCH_CONTACT_ONE] : (state, payload) => {
        state.contact = payload.contact;
    },
    [Constant.INITIALIZE_CONTACT_ONE] : (state) => {
        state.contact = { no:'', name:'', tel:'', address:'', photo:'' };
    },
    [Constant.CHANGE_ISLOADING] : (state, payload) => {
        state.isloading = payload.isloading;
    }
}