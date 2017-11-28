<template>
    <div v-if="users.length > 0">
        <button type="button" class="btn btn-link" data-toggle="modal" data-target="#addNoteModal"
                data-whatever="@getbootstrap">&#10010; Add note</button>

        <div class="modal fade" id="addNoteModal" tabindex="-1" role="dialog" aria-labelledby="addNoteModalLabel" aria-hidden="true">
            <div class="modal-dialog" role="document">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title" id="addNoteModalLabel">New note</h5>
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div class="modal-body">
                        <form>
                            <div class="form-group">
                                <label for="notesText" class="col-form-label">Text:</label>
                                <textarea v-model="NotesText" class="form-control" id="notesText"></textarea>
                            </div>
                        </form>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                        <button type="button" class="btn btn-primary" data-dismiss="modal" @click="onClickAddNote">Add note</button>
                    </div>
                </div>
            </div>
        </div>


    </div>
</template>

<script>

    import { mapGetters } from 'vuex'
    import { mapActions } from 'vuex'

    export default {
        name: 'app',
        data () {
            return {
                NotesText:''
            }
        },
        computed:{
            ...mapGetters ([
                'users'
            ])
            },
        methods:{
            ...mapActions(['AddNote']),

            onClickAddNote() {
                this.AddNote(this.NotesText);
                this.NotesText = '';
            }
        }
    }

</script>

