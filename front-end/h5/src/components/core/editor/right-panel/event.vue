<template>
  <div>
    <a-form :form="form" v-if="urlList.length>0">
      <a-collapse accordion>
        <a-collapse-panel :header="`事件${ix+1}`" v-for="(it,ix) in urlList" :key="ix">
          <a-form-item v-bind="formItemLayout" label="链接地址">
            <a-input
              v-decorator="[
                `url${ix+1}`,
                {
                  rules: [
                    {
                      required: true,
                      message: '请填写连接地址!'
                    }
                  ]
                }
              ]"
            />
          </a-form-item>
          <a-icon
            slot="extra"
            type="delete"
            @click="handleDel($event,it.id)"
            class="del-icon"
          />
        </a-collapse-panel>
      </a-collapse>
      <a-form-item>
        <a-button type="primary" @click="handleSave">
            保存
        </a-button>
    </a-form-item>
    </a-form>
  </div>
</template>

<script>
export default {
  data() {
    return {
    urlList:[{
        url:'',
        id:1,
        label:'事件1'
    },{
        url:'',
        id:2,
        label:'事件2'
    }],
      text: "ddd",
      formItemLayout: {
        labelCol: {
          xs: { span: 24 },
          sm: { span: 8 }
        },
        wrapperCol: {
          xs: { span: 24 },
          sm: { span: 16 }
        }
      },
      form: this.$form.createForm(this, { name: "url" })
    };
  },
  methods: {
    handleDel(e,id) {
        // console.log(id)
        if(id==1){
            return false;
        }
        e.preventDefault();
        this.urlList.splice(this.urlList.findIndex(item => item.id === id), 1)
        
    },
    handleSave() {
      this.form.validateFields((err, values)=>{
          console.log(values)
      })
    }
  }
};
</script>
<style lang="less">
.del-icon:hover {
  color: red;
}
</style>
