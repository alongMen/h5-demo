/*
 * @Author: ly525
 * @Date: 2020-05-14 08:09:44
 * @LastEditors: ly525
 * @LastEditTime: 2020-10-10 23:33:19
 * @FilePath: /luban-h5/front-end/h5/src/components/core/plugins/lbp-notice-bar.js
 * @Github: https://github.com/ly525/luban-h5
 * @Description: Do not edit
 * @Copyright 2018 - 2020 luban-h5. All Rights Reserved
 */

import PropTypes from '@luban-h5/plugin-common-props'
import { Calendar } from 'vant'
import 'vant/lib/calendar/style'

export default {
  extra: {
    defaultStyle: {
      width: 300,
      height: 30
    }
  },
  name: 'lbp-calendar-bar',
  props: {
    text: PropTypes.string({
      defaultValue: '请填写内容，如果过长，将会在手机上滚动显示',
      label: '公告',
      props: {
        type: 'textarea'
      }
    }),
    vertical: PropTypes.boolean(),
    backgroundColor: PropTypes.color({ label: '背景色', defaultValue: '#fffbe8' }), /** 淡黄色 */
    color: PropTypes.color({ defaultValue: '#ed6a0c' }), /** 淡黄色 */
    mode: {
      type: String,
      default: '',
      editor: {
        type: 'a-select',
        label: '模式',
        props: {
          options: [
            {
              label: '默认',
              value: ''
            },
            {
              label: '右侧有箭头',
              value: 'link'
            },
            {
              label: '可关闭',
              value: 'closeable'
            }
          ]
        }
      }
    }
  },
  data() {
    return {
            date: '',
            show: false,
        }
    },
  componentsForPropsEditor: {
  },
  mounted () {
  },
  methods: {
    formatDate(date) {
        return `${date.getMonth() + 1}/${date.getDate()}`;
      },
      onConfirm(date) {
        this.show = false;
        this.date = this.formatDate(date);
      },
      onShow(){
          this.show=true
          console.log(this.show)
      }
  },
  render () {
    return (
        <div>
            <button onClick={this.onShow}>选择日期</button>
            <Calendar 
                v-model={this.show}
                onConfirm={this.onConfirm}
            ></Calendar>
        </div>
    )
  }
}
