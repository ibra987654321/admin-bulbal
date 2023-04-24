<template>
  <v-data-table
    v-model="group.educationDbList"
    :items="itemsWithIndex"
    :headers="header"
    :show-select="$props.selectRow"
    :loading="loading"
    :footer-props="pagination"
  >
    <template v-slot:top>
      <div class="padding">
<!--        <v-dialog-->
<!--          v-if="$props.selectRow"-->
<!--          v-model="dialog"-->
<!--          :max-width="dialogWidth"-->
<!--        >-->
<!--          <template v-slot:activator="{ on, attrs }">-->
<!--            <v-btn-->
<!--              color="primary"-->
<!--              dark-->
<!--              class="mb-2"-->
<!--              v-bind="attrs"-->
<!--              v-on="on"-->
<!--            >-->
<!--              Создать группу-->
<!--            </v-btn>-->
<!--          </template>-->
<!--          <v-card>-->
<!--            <v-card-title>-->
<!--              <span class="text-h5">{{ formTitle }}</span>-->
<!--            </v-card-title>-->

<!--            <v-card-text>-->
<!--              <v-container>-->
<!--                <v-row>-->
<!--                  <v-col-->
<!--                    cols="12"-->
<!--                    sm="6"-->
<!--                    md="6"-->
<!--                  >-->
<!--                    <v-text-field-->
<!--                      v-model="group.groupName"-->
<!--                      label="Название группы"-->
<!--                      outlined-->
<!--                      dense-->
<!--                      :error-messages="GroupNameErrors"-->
<!--                      required-->
<!--                      @input="$v.group.groupName.$touch()"-->
<!--                      @blur="$v.group.groupName.$touch()"-->
<!--                    ></v-text-field>-->
<!--                  </v-col>-->
<!--                  <v-col-->
<!--                    cols="12"-->
<!--                    sm="6"-->
<!--                    md="6"-->
<!--                  >-->
<!--                    <v-text-field-->
<!--                      v-model="group.curatorName"-->
<!--                      label="Имя куратора"-->
<!--                      outlined-->
<!--                      dense-->
<!--                      :error-messages="nameErrors"-->
<!--                      required-->
<!--                      @input="$v.group.curatorName.$touch()"-->
<!--                      @blur="$v.group.curatorName.$touch()"-->
<!--                    ></v-text-field>-->
<!--                  </v-col>-->
<!--                  <v-col-->
<!--                    cols="12"-->
<!--                  >-->
<!--                    <v-menu-->
<!--                      v-model="menu1"-->
<!--                      :close-on-content-click="false"-->
<!--                      :nudge-right="40"-->
<!--                      transition="scale-transition"-->
<!--                      offset-y-->
<!--                      class="mx-auto"-->
<!--                    >-->
<!--                      <template v-slot:activator="{ on, attrs }">-->
<!--                        <v-text-field-->
<!--                          v-model="group.startEducationDate"-->
<!--                          label="Дата начала"-->
<!--                          readonly-->
<!--                          outlined-->
<!--                          dense-->
<!--                          v-bind="attrs"-->
<!--                          v-on="on"-->
<!--                        ></v-text-field>-->
<!--                      </template>-->
<!--                      <v-date-picker-->
<!--                        v-model="group.startEducationDate"-->
<!--                        @input="menu1 = false"-->
<!--                      ></v-date-picker>-->
<!--                    </v-menu>-->
<!--                  </v-col>-->
<!--                </v-row>-->
<!--              </v-container>-->
<!--            </v-card-text>-->

<!--            <v-card-actions>-->
<!--              <v-spacer></v-spacer>-->
<!--              <v-btn-->
<!--                color="blue darken-1"-->
<!--                text-->
<!--                @click="close"-->
<!--              >-->
<!--                Отмена-->
<!--              </v-btn>-->
<!--              <v-btn-->
<!--                color="blue darken-1"-->
<!--                text-->
<!--                @click="save"-->
<!--              >-->
<!--                Сохранить-->
<!--              </v-btn>-->
<!--            </v-card-actions>-->
<!--          </v-card>-->
<!--        </v-dialog>-->
        <v-dialog
          v-if="$props.showToEdit && !$props.selectRow"
          v-model="dialog"
          :max-width="dialogWidth"
        >
          <template v-slot:activator="{ on, attrs }">
<!--            <v-text-field-->
<!--              v-if="$props.searchDispatch"-->
<!--              v-model="search"-->
<!--              :label="$props.searchTitle"-->
<!--              outlined-->
<!--              full-width-->
<!--              hide-details-->
<!--              dense-->
<!--              class="my-4 select"-->
<!--            ></v-text-field>-->
            <div class="d-flex justify-space-between">
              <h2 v-if="$props.title">
                {{ $props.title }}
              </h2>
              <v-btn
                color="primary"
                dark
                class="mb-2"
                v-bind="attrs"
                v-on="on"
              >
                {{ formTitle }}
              </v-btn>
            </div>
          </template>
          <use-dialog-content
            :title="formTitle"
            :edit-block="$props.showToEdit"
            :edited-item="editedItem"
            :table-data="$props.childTable"
            :data="childTableData"
            @close="close()"
            @save="save($event)"
          ></use-dialog-content>
        </v-dialog>
        <v-dialog
          v-model="dialogDelete"
          max-width="500px"
        >
          <v-card>
            <v-card-title class="text-h5">
              Вы действительно хотите удалить?
            </v-card-title>
            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn
                color="blue darken-1"
                text
                @click="closeDelete"
              >
                Отмена
              </v-btn>
              <v-btn
                color="blue darken-1"
                text
                @click="deleteItemConfirm"
              >
                OK
              </v-btn>
              <v-spacer></v-spacer>
            </v-card-actions>
          </v-card>
        </v-dialog>
        <v-dialog
          v-if="$props.selectGroup"
          v-model="dialog1"
          max-width="500px"
        >
          <template v-slot:activator="{ on, attrs }">
            <v-btn
              color="primary"
              dark
              class="mb-2 ml-3"
              v-bind="attrs"
              v-on="on"
            >
              Добавить в существующую
            </v-btn>
          </template>
          <v-card>
            <v-card-title>
              <span class="text-h5">Добавить</span>
            </v-card-title>
            <v-card-text>
              <v-container>
                <v-row>
                  <v-col
                    cols="12"
                  >
                    <v-select
                      v-model="$props.selectGroup.model"
                      :items="$props.selectGroup.items"
                      label="Выбор группы"
                      class="select"
                      hide-details
                      outlined
                      dense
                      @change="selectForGroup($event)"
                    >
                    </v-select>
                  </v-col>
                </v-row>
              </v-container>
            </v-card-text>

            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn
                color="blue darken-1"
                text
                @click="close"
              >
                Отмена
              </v-btn>
              <v-btn
                color="blue darken-1"
                text
                @click="save"
              >
                Сохранить
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-dialog>
        <v-dialog
          v-if="$props.extraDialog"
          v-model="dialog2"
          max-width="800px"
        >
          <template v-slot:activator="{ on, attrs }">
            <v-btn
              color="primary"
              dark
              class="mb-2 ml-3"
              v-bind="attrs"
              v-on="on"
            >
              {{ $props.extraDialog.titleBtn }}
            </v-btn>
          </template>
          <use-dialog-content
            :title="$props.extraDialog.title"
            :edit-block="$props.extraDialog.showToEdit"
            :edited-item="$props.extraDialog.editedItem"
            :level-edited-item="levelEditedItem"
            @close="close()"
            @save="save($event)"
          ></use-dialog-content>
        </v-dialog>
        <div class="d-flex align-center">
          <v-select
            v-if="$props.selectForApi"
            v-model="$props.selectForApi.model"
            :items="$props.selectForApi.items"
            class="select"
            hide-details
            outlined
            dense
            @change="selected()"
          >
          </v-select>
          <v-text-field
            v-if="$props.searchDispatch"
            v-model="search"
            :label="$props.searchTitle"
            outlined
            full-width
            hide-details
            dense
            class=" select"
          ></v-text-field>
        </div>
      </div>
    </template>
<!--    <template-->
<!--      v-if="statusFilter"-->
<!--      v-slot:[`item.${$props.filters.status}`]="{item}"-->
<!--    >-->
<!--      {{ item[$props.filters.status] | status }}-->
<!--    </template>   -->
    <template
      v-if="imgFilter"
      v-slot:[`item.${$props.filters.img}`]="{item}"
    >
      <img :src="`img/${item[$props.filters.img]}`">
    </template>
    <template
      v-if="dateFilter"
      v-slot:[`item.${$props.filters.date}`]="{item}"
    >
      {{ item[$props.filters.date] | date }}
    </template>
    <template
      v-for="(check, idx) in $props.filters.checkbox"
      v-if="checkFilter"
      v-slot:[`item.${check}`]="{item}"
    >
      <v-checkbox
        v-model="item[$props.filters.checkbox[idx]]"
        disabled
      ></v-checkbox>
    </template>
    <template
      v-if="redirectFilter"
      v-slot:[`item.${$props.filters.redirect}`]="{item}"
    >
      <a
        color="primary"
        target="_blank"
        :href="item[$props.filters.redirect]"
      >
        Перейти
      </a>
    </template>
    <template v-slot:item.detail="{item}">
      <v-btn
        color="primary"
        small
        outlined
        rounded
        @click="$router.push('/education/group/candidateDetail/' + item.id)"
      >
        Подробнее
      </v-btn>
    </template>
    <template v-slot:item.actions="{ item }">
      <v-icon
        small
        class="mr-2"
        @click="editItem(item)"
      >
        {{ icons.edit }}
      </v-icon>
      <v-icon
        small
        @click="deleteItem(item)"
      >
        {{ icons.deleted }}
      </v-icon>
    </template>
  </v-data-table>
</template>

<script>
import {
  mdiCheckOutline,
  mdiClipboardOutline,
  mdiClipboardPlayOutline, mdiCloseOutline,
  mdiDelete,
  mdiPen,
} from '@mdi/js'
// eslint-disable-next-line import/extensions
import useDialogContent from '@/components/useDashboard/useDialogContent'
import { validationMixin } from 'vuelidate'
import { minLength, required } from 'vuelidate/lib/validators'
import statusFilter from '@/filter/status.filter'
import { debounce } from '@/helpers/helpers'

export default {
  name: 'UseTable',
  components: {
    useDialogContent,
  },
  mixins: [validationMixin],
  validations: {
    group: {
      curatorName: { required, minLength },
      groupName: { required, minLength },
    },
    selectedGroup: { required },
  },
  props: {
    headers: Array,
    selectRow: Boolean | null,
    selectGroup: Object,
    showToEdit: Array,
    filters: Object,
    editedItems: Object,
    getDispatch: String,
    putDispatch: String,
    deleteDispatch: String,
    postDispatch: String,
    selectForApi: Object,
    getDispatchId: String,
    endpoints: String,
    childTable: Object,
    searchDispatch: String,
    searchTitle: String,
    defaultItem: Object,
    title: String,
    extraDialog: {
      title: String,
      titleBtn: String,
      postDispatch: String,
      showToEdit: Array,
      editedItem: Object,
    },
    itemsPerPageOptions: {
      type: Array,
      default() {
        return [15, 20, 50]
      },
    },
    dialogWidth: {
      type: String,
      default(){
        return '500px'
      }
    },
  },
  data: () => ({
    loading: false,
    search: '',
    childTableData: [],
    menu1: false,
    selectedGroup: '',
    group: {
      curatorName: '',
      groupName: '',
      startEducationDate: (new Date(Date.now() - (new Date()).getTimezoneOffset() * 60000)).toISOString().substr(0, 10),
      createLogin: '',
      id: 0,
      educationDbList: [],
    },
    data: [],
    dialog: false,
    dialog1: false,
    dialog2: false,
    dialogDelete: false,
    editedIndex: -1,
    editedItem: {},
    levelEditedItem: {},
    icons: {
      edit: mdiPen,
      deleted: mdiDelete,
      mdiCheckOutline,
      mdiClipboardOutline,
      mdiClipboardPlayOutline,
      mdiCloseOutline,
    },
    pagination: {},
  }),
  computed: {
    header() {
      this.pagination.itemsPerPageOptions = this.$props.itemsPerPageOptions
      return this.$props.headers
    },
    nameErrors() {
      const errors = []
      if (!this.$v.group.curatorName.$dirty) return errors
      !this.$v.group.curatorName.minLength && errors.push('Минимум 3 символа')
      !this.$v.group.curatorName.required && errors.push('Поле не должно быть пустым')
      return errors
    },
    GroupNameErrors() {
      const errors = []
      if (!this.$v.group.groupName.$dirty) return errors
      !this.$v.group.groupName.minLength && errors.push('Минимум 3 символа')
      !this.$v.group.groupName.required && errors.push('Поле не должно быть пустым')
      return errors
    },
    selectGroupErrors() {
      const errors = []
      if (!this.$v.selectedGroup.$dirty) return errors
      !this.$v.selectedGroup.required && errors.push('Поле не должно быть пустым')
      !this.$v.selectedGroup.minLength && errors.push('Минимум 3 символа')
      return errors
    },
    formTitle() {
      return this.editedIndex === -1 ? 'Создать' : 'Изменить'
    },
    // eslint-disable-next-line consistent-return
    dateFilter() {
      if (this.$props.filters) {
        if (this.$props.filters.date) {
          return this.$props.filters.date
        }
      }
    },
    // eslint-disable-next-line consistent-return
    statusFilter() {
      if (this.$props.filters) {
        if (this.$props.filters.status) {
          return this.$props.filters.status
        }
      }
    },
    imgFilter() {
      if (this.$props.filters) {
        if (this.$props.filters.img) {
          return this.$props.filters.img
        }
      }
    },
    // eslint-disable-next-line consistent-return
    checkFilter() {
      if (this.$props.filters) {
        if (this.$props.filters.checkbox) {
          return this.$props.filters.checkbox
        }
      }
    },
    changeFilter() {
      if (this.$props.filters) {
        if (this.$props.filters.change) {
          return this.$props.filters.change.value
        }
      }
    },
    redirectFilter() {
      if (this.$props.filters) {
        if (this.$props.filters.redirect) {
          return this.$props.filters.redirect
        }
      }
    },
    minuteFilter() {
      if (this.$props.filters) {
        if (this.$props.filters.minute) {
          return this.$props.filters.minute
        }
      }
    },
    selectedModel() {
      // eslint-disable-next-line vue/no-side-effects-in-computed-properties
      return this.$props.selectForApi.model
    },
    itemsWithIndex() {
      return this.data.map(
        (items, index) => ({
          ...items,
          index: index + 1,
        }),
      )
    },
  },
  watch: {
    dialog(val) {
      // eslint-disable-next-line no-unused-expressions
      val || this.close()
    },
    dialogDelete(val) {
      // eslint-disable-next-line no-unused-expressions
      val || this.closeDelete()
    },
    data() {
      return this.itemsWithIndex
    },
    search: debounce(function (v) {
      this.searchOfData(v)
    }, 500)
  },
  mounted() {
    setTimeout(() => {
      if (this.$props.selectForApi) {
        this.loading = true
        this.$store.dispatch(this.$props.getDispatch, {
          data: this.selectedModel,
          param: this.endpoints
        }).then(r => {
          if (r !== undefined) {
            this.data = r
            this.loading = false
          }
        })
      }
    }, 300)
    setTimeout(() => {
      if (this.getDispatchId) {
        this.loading = true
        this.$store.dispatch(this.$props.getDispatch, {
          data: this.getDispatchId,
          param: this.endpoints
        }).then(r => {
            this.data = r
          this.loading = false
          })
      }
    })
    setTimeout(() => {
      if (!this.$props.selectForApi && !this.getDispatchId) {
        this.loading = true
        this.$store.dispatch(this.$props.getDispatch, {
          param: this.endpoints
        })
          .then(r => {
            this.data = r
            this.loading = false
          })
      }
    })
    this.editedItem = this.$props.editedItems
  },
  methods: {
    selected() {
      this.$store.dispatch(this.$props.getDispatch, {
        data: this.$props.selectForApi.model,
        param: this.endpoints
      })
        .then(r => {
          this.data = r
        })
    },
    async searchOfData(val) {
      if (val) {
        this.data = await this.$store.dispatch(this.$props.searchDispatch, {
          data: val,
          param: this.endpoints
        })
      } else {
        setTimeout(() => {
          if (this.$props.selectForApi) {
            this.$store.dispatch(this.$props.getDispatch, {
              data: this.selectedModel,
              param: this.endpoints
            }).then(r => {
              if (r !== undefined) {
                this.data = r
              }
            })
          } else {
            this.$store.dispatch(this.$props.getDispatch, {
              param: this.endpoints
            }).then(r => {
              if (r !== undefined) {
                this.data = r
              }
            })
          }
        })
      }
    },
    selectForGroup(v) {
      this.$v.selectedGroup.$touch()
      this.selectedGroup = v
    },

    editItem(item) {
      if (this.$props.childTable) {
        this.$store.dispatch(this.$props.childTable.actions.getDispatch, item.id)
          .then(r => {
            this.childTableData = r
            this.levelEditedItem = item
          })
      }
      this.editedIndex = this.itemsWithIndex.indexOf(item)
      this.editedItem = { ...item }
      if (this.statusFilter) {
        this.editedItem[this.statusFilter] = statusFilter(this.editedItem[this.statusFilter])
      }
      this.dialog = true
    },

    deleteItem(item) {
      this.editedIndex = this.data.indexOf(item)
      this.editedItem = { ...item }
      this.dialogDelete = true
    },
    deleteItemGroup(item) {
      this.editedIndex = this.data.indexOf(item)
      this.editedItem = { ...item }
      this.deleteItemConfirm()
    },

    deleteItemConfirm() {
      const item = this.data.splice(this.editedIndex, 1)
      this.$store.dispatch(this.$props.deleteDispatch, {
        data: { ...item },
        param: this.endpoints,
      })
      this.closeDelete()
    },

    close() {
      this.dialog = false
      this.dialog1 = false
      this.$nextTick(() => {
        if (this.$props.defaultItem) {
          this.editedItem = { ...this.$props.defaultItem }
        }
        this.editedIndex = -1
      })
    },

    closeDelete() {
      this.dialogDelete = false
      this.$nextTick(() => {
        this.editedItem = { ...this.defaultItem }
        this.editedIndex = -1
      })
    },
    async save(event) {
      if (this.$props.selectRow) {}
      if (this.editedIndex > -1) {
        this.$store.dispatch(this.putDispatch, {
          data: this.editedItem,
          param: this.endpoints
        })
          .then(r => {
            if (r) {
              Object.assign(this.itemsWithIndex[this.editedIndex], this.editedItem)
              this.close()
            }
          })
      } else {
        if (this.$props.filters) {
          if (this.$props.filters.date) {
            event[this.$props.filters.date] = (new Date(Date.now() - (new Date()).getTimezoneOffset() * 60000)).toISOString().substr(0, 10)
          }
        }
        this.$store.dispatch(this.postDispatch, {
          data: event,
          param: this.endpoints
        })
          .then(r => {
            if (r){
              this.data.unshift(r)
              this.close()
            }
          })
      }
    },
  },
}
</script>

<style scoped>
.select {
  width: 100%;
  max-width: 300px;
  margin: 10px;
}
.padding {
  padding: 10px;
}
</style>
