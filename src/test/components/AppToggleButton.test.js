import { mount } from '@vue/test-utils'
import AppToggleButton from '~/components/AppToggleButton.vue'

describe('AppToggleButton', () => {
  let wrapper

  beforeEach(() => {
    // 初期化
    wrapper = null
    // 仮想的なVue.js上にコンポーネントをマウント
    wrapper = mount(AppToggleButton)
  })

  test('デフォルト状態でoffであるか', () => {
    expect(wrapper.find('p').text()).toBe('off')
  })

  test('ボタンのクリックによってonとなるか', async () => {
    await wrapper.find('button').trigger('click')
    expect(wrapper.find('p').text()).toBe('on')
  })
})
