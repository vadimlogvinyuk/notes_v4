
export default {

    addNewUser ({ commit },userName) {
        commit('addNewUser',userName)
    },
    AddNote ({ commit },NotesText) {
        commit('AddNote',NotesText)
    },
    OtherUser ({ commit },OtherUser) {
        commit('OtherUser',OtherUser)
    },
    onClickCheckBox ({ commit },val) {
        commit('onClickCheckBox',val)
    },
    ShareNotes ({ commit },user) {
        commit('ShareNotes',user)
    },
    deleteRowFromUser ({ commit },index) {
        commit('deleteRowFromUser',index)
    },
    onComplite ({ commit },row) {
        commit('onComplite',row)
    }

}
