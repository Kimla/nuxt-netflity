import Vuex from 'vuex';
import axios from 'axios';

const createStore = () => {
    return new Vuex.Store({
        state: {
            menu: 'test',
        },
        mutations: {
            setMenu (state, { menu }) {
                state.menu = menu;
            }
        },
        actions: {
            async loadMenu({ commit }) {
                const res = await axios.get('https://playground.kimlarsson.se/wp-json/menus/v1/menus/primary');
                commit('setMenu', { menu: res.data });
            },
            async nuxtServerInit({ dispatch }) {
                await dispatch('loadMenu');
            }
        }
    })
}

export default createStore
