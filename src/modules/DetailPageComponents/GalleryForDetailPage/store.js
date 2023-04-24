import {postAxios} from "@/helpers/helpers";
import {environment} from "@/environments/environment";

export default {
    state:{
        galleryData:[],
        galleryFive: []
    },
    mutations: {
        setImages(state, data) {
            state.galleryData = data
        },
        setFiveImage(state, data) {
            state.galleryFive = data
        }
    },
    getters: {
        completedAllImages: state => {
            return state.galleryData
        },
        completedFiveImages: state => {
            return state.galleryFive.slice(1, 5)
        },
        oneImage: state => {
            return state.galleryFive[0]
        },
    },
    actions: {
        getImagesForDetail(store,id) {
            return postAxios(`${environment.mainApi}/images/findAllByAccommodationId/${id}`)
                .then(r => {
                    store.commit('setImages', r)
                    return r
                }).catch(e => console.log(e.message))
        },
        getFiveImagesForDetail(store,id) {
            console.log(store.rootState.accommodationId)
            return postAxios(`${environment.mainApi}/images/findFiveByAccommodationId/${id}`)
                .then(r => {
                    store.commit('setFiveImage', r)
                    return r
                }).catch(e => console.log(e.message))
        }
    }
}
