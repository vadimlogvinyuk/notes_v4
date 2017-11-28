<template>
    <div v-if="users.length > 0">
        <button type="button" class="btn btn btn-link" data-toggle="modal"
                data-target="#allNote" data-whatever="@mdo"><i class="el-icon-tickets"></i> All notes</button>

        <div class="modal fade" id="allNote" tabindex="-1" role="dialog" aria-labelledby="allNoteLabel" aria-hidden="true">
            <div class="modal-dialog" role="document">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title" id="allNoteLabel">notes</h5>
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div class="modal-body">
                        <ul>
                            <li v-for="user in users">{{user.userName}}
                                <ul>
                                    <li v-for="a in user.Notes">{{a.note}}</li>
                                </ul>
                            </li>

                        </ul>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import { mapGetters } from 'vuex'

    export default {
       computed: {
           ...mapGetters ([
               'users'
           ])
       }
    }


</script>

