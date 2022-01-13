const axios = require('axios');
export const state = () => ({
    headerFooterElements: null,
})

export const mutations = {
    SET_HEADER_ELEMENTS(state, message){
        state.headerFooterElements = message
    },
}

export const actions = {
    async nuxtServerInit({ commit }, context) {
        await context.$CfClient.getEntries({
            'content_type': 'akaterraGlobalSite',
            'include': 4,
            'select': ['fields.logo', 'fields.headerMenu', 'fields.ourCommitmentSubMenu', 'fields.footerLinks', 'fields.copyrightsDescription', 'fields.footerSocialIcons',]
        }).then((entries) => {
            commit('SET_HEADER_ELEMENTS', entries)
            // console.log("Header Data", entries)
        }).catch(function (error) {
            console.error(error);
            commit('SET_HEADER_ELEMENTS', {'error': 'something went wrong!'})
        });
  }
}