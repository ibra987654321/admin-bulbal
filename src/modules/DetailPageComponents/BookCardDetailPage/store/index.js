import {decodeJWT, postAxios} from "@/helpers/helpers";
import {environment} from "@/environments/environment";

export default {
    state: {
        dialog: false
    },
    mutations: {
      setConfirmDialog(state, date) {
          state.dialog = date
      }
    },
    actions:{
        bookingAccommodation(store) {
            if (decodeJWT()) {
                const data = {
                    "checkIn": store.rootState.header.range.start.toISOString().slice(0, 19),
                    "checkOut": store.rootState.header.range.end.toISOString().slice(0, 19),
                    "userId": decodeJWT().userId,
                    "accommodationId": store.rootState.postDetail.createObject.id,
                    "guests": store.rootState.header.countItemList[0].people
                }
                postAxios(`${environment.mainApi}/booking/bookAccommodation`, data)
                    .then((r) => {
                       store.commit('setConfirmDialog', true)
                    })
                    .catch(e => {
                        console.log(e.message)
                    })
            }
            store.rootState.login.dialog = true
        },
        bookingBed(store) {
            const data = {
                "checkIn": store.rootState.header.range.start.toISOString().slice(0, 19),
                "checkOut": store.rootState.header.range.end.toISOString().slice(0, 19),
                "userId": decodeJWT().userId,
                "bedId": store.rootState.postDetail.createObject.id,
                "guests": store.rootState.header.countItemList[0].people
            }
            postAxios(`${environment.mainApi}/booking/bookAccommodation`, data)
                .then(r => {
                    console.log(r)
                }).catch(e => console.log(e.message))
        },
    }
}
