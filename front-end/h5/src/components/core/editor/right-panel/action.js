import { mapState, mapActions } from 'vuex'
import EventM from './event.vue'

export default {
  components:{
    EventM
  },
  data(){
    return{
      active:0,
      eventTypeList: [{
        label: '链接跳转',
        value: 'link'
      }, {
        label: '分享',
        value: 'share'
      }, {
        label: '表单提交',
        value: 'submitForm'
      }],
      list:[
        {
        url:'',
        id:1,
        label:'事件1'
    }
    ]
    }
  },
  computed: {
    ...mapState('editor', [
      'editingElement'
    ])
  },
  methods: {
    ...mapActions('editor', [
      'setEditingElement'
    ]),
    addEvent(v) {
      if(v=='link'){
        this.active=1
      }else{
        this.active=0
      }
    }
  },
  created() { },
  render(h) {
    const _this=this
    const ele = this.editingElement
    if (!ele) return (<span>{this.$t('editor.editPanel.common.empty')}</span>)
    return (<div>
      <a-dropdown>
        <a class="ant-dropdown-link">
          添加事件<a-icon type="down" />
        </a><span>事件在编辑模式下无效</span>
        <a-menu slot="overlay">
          {
            _this.eventTypeList.map((item, index) => {
              return(<a-menu-item key={index} onClick={()=>this.addEvent(item.value)}>
                <span rel="noopener noreferrer">{item.label}</span>
              </a-menu-item>)
            })
          }
        </a-menu>
      </a-dropdown>
        {
          this.active==1?
            <EventM></EventM>
          :''
        }
    </div>)
  }
}
