<template>
    <div>
    <el-table
            ref="multipleTable"
            :data="currentUser.Notes"
            style="width: 100%"
            :row-class-name="tableRowClassName"
            v-if="currentUser.Notes.length > 0"
            @selection-change="SelectionChange"
            @cell-click="onClickComplite">
        <el-table-column
                type="selection"
                width="55" v-if="users.length > 1">
        </el-table-column>

        <el-table-column
                label="note"
                width="500">
            <template slot-scope="scope">
                <span style="margin-left: 10px" >{{scope.row.note}} </span>
            </template>
        </el-table-column>

        <el-table-column>

        </el-table-column>
        <el-table-column
                fixed="right"
                label="Operations"
                width="120">
            <template slot-scope="scope">

                <el-button
                        @click.native.prevent="deleteRow(scope.$index, currentUser.Notes)"
                        type="danger"
                        size="small">
                    <i class="el-icon-delete"></i>
                    delete
                </el-button>
            </template>
        </el-table-column>

    </el-table>

    </div>
</template>

<style>
    .el-table .success-row_my {
        background: #67C23A;
        text-decoration: line-through;
    }
</style>

<script>

    import { mapGetters } from 'vuex'
    import { mapActions } from 'vuex'

    export default {
        computed:{
            ...mapGetters([
              'users','currentUser','multipleSelection'])
        },

        methods: {

            ...mapActions (['deleteRowFromUser','onClickCheckBox','onComplite']),

            tableRowClassName({row}) {
                if (row.act){
                return 'success-row_my';
                }else {
                    return '';
                }

            },
            deleteRow(index) {
                this.deleteRowFromUser (index);
            },
            SelectionChange(val) {
                this.onClickCheckBox (val);

            },
            onClickComplite(row) {
                this.onComplite (row);
            }

        },
    }
</script>


