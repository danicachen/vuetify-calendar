<template>
  <v-row class="fill-height">
    <v-col>
      <v-sheet height="64">
        <v-toolbar flat color="white">
          <v-btn color="primary" dark @click.stop="dialog = true">
            新日程
          </v-btn>
          <v-btn outlined class="mr-4" @click="setToday">
            今日
          </v-btn>
          <v-btn fab text small @click="prev">
            <v-icon small>mdi-chevron-left</v-icon>
          </v-btn>
          <v-btn fab text small @click="next">
            <v-icon small>mdi-chevron-right</v-icon>
          </v-btn>
          <v-toolbar-title>{{ title }}</v-toolbar-title>
          <div class="flex-grow-1"></div>
          <v-menu bottom right>
            <template v-slot:activator="{ on }">
              <v-btn outlined v-on="on">
                <span>{{ typeToLabel[type] }}</span>
                <v-icon right>mdi-menu-down</v-icon>
              </v-btn>
            </template>
            <v-list>
              <v-list-item @click="type = 'day'">
                <v-list-item-title>日</v-list-item-title>
              </v-list-item>
              <v-list-item @click="type = 'week'">
                <v-list-item-title>周</v-list-item-title>
              </v-list-item>
              <v-list-item @click="type = 'month'">
                <v-list-item-title>月</v-list-item-title>
              </v-list-item>
              <v-list-item @click="type = '4day'">
                <v-list-item-title>4天</v-list-item-title>
              </v-list-item>
            </v-list>
          </v-menu>
        </v-toolbar>
      </v-sheet>

      <v-dialog v-model="dialog" max-width="500">
        <v-card>
          <v-container>
            <v-form @submit.prevent="addEvent">
              <v-text-field v-model="name" type="text" label="事件（必填）"></v-text-field>
              <v-text-field v-model="details" type="text" label="详情"></v-text-field>
              <v-text-field v-model="start" type="date" label="开始 (必填)"></v-text-field>
              <v-text-field v-model="end" type="date" label="结束 (必填)"></v-text-field>
              <v-text-field v-model="color" type="color" label="颜色(点击打开选色器))"></v-text-field>
              <v-btn type="submit" color="primary" class="mr-4" @click.stop="dialog= false">
                添加
              </v-btn>
            </v-form>
          </v-container>
        </v-card>
      </v-dialog>

      <v-dialog v-model="dialogDate" max-width="500">
        <v-card>
          <v-container>
            <v-form @submit.prevent="addEvent">
              <v-text-field v-model="name" type="text" label="事件（必填）"></v-text-field>
              <v-text-field v-model="details" type="text" label="详情"></v-text-field>
              <v-text-field v-model="start" type="date" label="开始 (必填)"></v-text-field>
              <v-text-field v-model="end" type="date" label="结束 (必填)"></v-text-field>
              <v-text-field v-model="color" type="color" label="颜色(点击打开选色器))"></v-text-field>
              <v-btn type="submit" color="primary" class="mr-4" @click.stop="dialog = false">
                添加
              </v-btn>
            </v-form>
          </v-container>
        </v-card>
      </v-dialog>

<v-sheet height="600">
  <v-calendar
  ref="calendar"
  v-model="focus"
  color="primary"
  :events="events"
  :event-color="getEventColor"
  :event-margin-bottom="3"
  :now="today"
  :type="type"
  @click:event="showEvent"
  @click:more="viewDay"
  @click:date="setDialogDate"
  @change="updateRange"
  ></v-calendar>
  <v-menu
  v-model="selectedOpen"
  :close-on-content-click="false"
  :activator="selectedElement"
  offset-x
  >
  <v-card color="grey lighten-4" min-width="350px" flat>
    <v-toolbar :color="selectedEvent.color" dark>
      <v-btn @click="deleteEvent(selectedEvent.id)" icon>
        <v-icon>mdi-delete</v-icon>
      </v-btn>
      <v-toolbar-title v-html="selectedEvent.name"></v-toolbar-title>
      <div class="flex-grow-1"></div>
    </v-toolbar>

    <v-card-text>
      <form v-if="currentlyEditing !== selectedEvent.id">
        {{ selectedEvent.details }}
      </form>
      <form v-else>
        <textarea-autosize
        v-model="selectedEvent.details"
        type="text"
        style="width: 100%"
        :min-height="100"
        placeholder="添加备注">
      </textarea-autosize>
    </form>
  </v-card-text>

  <v-card-actions>
    <v-btn text color="secondary" @click="selectedOpen = false">
      关闭
    </v-btn>
    <v-btn v-if="currentlyEditing !== selectedEvent.id" text @click.prevent="editEvent(selectedEvent)">
      编辑
    </v-btn>
    <v-btn text v-else type="submit" @click.prevent="updateEvent(selectedEvent)">
      提交
    </v-btn>
  </v-card-actions>
</v-card>
</v-menu>
</v-sheet>
</v-col>
</v-row>
</template>

<script>
import db from '@/firebase/firebaseinit'
import { collection, getDocs,doc, deleteDoc,addDoc,updateDoc } from "firebase/firestore";
export default {
  data: () => ({
    today: new Date().toISOString().substr(0, 10),
    focus: new Date().toISOString().substr(0, 10),
    type: 'month',
    typeToLabel: {
      month: '月',
      week: '周',
      day: '天',
      '4day': '4天',
    },
    name: null,
    details: null,
    start: null,
    end: null,
    color: '#1976D2', // default event color
    currentlyEditing: null,
    selectedEvent: {},
    selectedElement: null,
    selectedOpen: false,
    events: [],
    dialog: false,
    dialogDate: false
  }),
  mounted () {
    this.getEvents()
  },
  computed: {
    title () {
      const { start, end } = this
      if (!start || !end) {
        return ''
      }
      const startMonth = this.monthFormatter(start)
      const endMonth = this.monthFormatter(end)
      const suffixMonth = startMonth === endMonth ? '' : endMonth
      const startYear = start.year
      const endYear = end.year
      const suffixYear = startYear === endYear ? '' : endYear
      const startDay = start.day + this.nth(start.day)
      const endDay = end.day + this.nth(end.day)
      switch (this.type) {
        case 'month':
        return `${startMonth} ${startYear}`
        case 'week':
        case '4day':
        return `${startMonth} ${startDay} ${startYear} - ${suffixMonth} ${endDay} ${suffixYear}`
        case 'day':
        return `${startMonth} ${startDay} ${startYear}`
      }
      return ''
    },
    monthFormatter () {
      return this.$refs.calendar.getFormatter({
        timeZone: 'UTC', month: 'long',
      })
    }
  },
  methods: {
    async getEvents () {
      const snapshot = await getDocs(collection(db, "calEvent"));
      const events = []
      snapshot.forEach((doc) => {
        let appData = doc.data()
        appData.id = doc.id
        events.push(appData)
      })
      this.events = events
    },
    setDialogDate( { date }) {
      this.dialogDate = true
      this.focus = date
    },
    viewDay ({ date }) {
      this.focus = date
      this.type = 'day'
    },
    getEventColor (event) {
      return event.color
    },
    setToday () {
      this.focus = this.today
    },
    prev () {
      this.$refs.calendar.prev()
    },
    next () {
      this.$refs.calendar.next()
    },
    async addEvent () {
      if (this.name && this.start && this.end) {
        await addDoc(collection(db,"calEvent"),{
          name: this.name,
          details: this.details,
          start: this.start,
          end: this.end,
          color: this.color
        })
        this.getEvents()
        this.name = '',
        this.details = '',
        this.start = '',
        this.end = '',
        this.color = ''
      } else {
        alert('请输入必填项')
      }
    },
    editEvent (ev) {
      this.currentlyEditing = ev.id
    },
    async updateEvent (ev) {
      const newDetail = doc(db,"calEvent",this.currentlyEditing)
      await updateDoc(newDetail,{
        details: ev.details
      })
      this.selectedOpen = false,
      this.updateEvent = null
    },
    async deleteEvent (ev) {
      await deleteDoc(doc(db,"calEvent",ev))
      this.selectedOpen = false,
      this.getEvents()
    },
    showEvent ({ nativeEvent, event }) {
      const open = () => {
        this.selectedEvent = event
        this.selectedElement = nativeEvent.target
        setTimeout(() => this.selectedOpen = true, 10)
      }
      if (this.selectedOpen) {
        this.selectedOpen = false
        setTimeout(open, 10)
      } else {
        open()
      }
      nativeEvent.stopPropagation()
    },
    updateRange ({ start, end }) {
      this.start = start
      this.end = end
    },
    nth (d) {
      return d > 3 && d < 21
      ? 'th'
      : ['th', 'st', 'nd', 'rd', 'th', 'th', 'th', 'th', 'th', 'th'][d % 10]
    }
  }
}
</script>
