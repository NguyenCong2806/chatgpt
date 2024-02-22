import chatgptmodel from '~/models/chatgptmodel'
import GoogleApi from '~/configuration/GoogleApi'

class ChatgptService {
  
  async chatgpt(text: string): Promise<chatgptmodel> {
    const _data = new chatgptmodel()
    try {
      const res = await GoogleApi.responsetext(text)
      _data.status = true
      _data.statuscode = 200
      _data.chatgptcode = 1
      _data.text = res
    } catch (error: any) {
      _data.status = false
      _data.statuscode = 500
      _data.chatgptcode = 1
      _data.text = error.message
    }
    return _data
  }
  
  async arrychat(text: string): Promise<Array<chatgptmodel>> {
    const _datas = new Array<chatgptmodel>();
    try {
      const _itemuser = new chatgptmodel()
      _itemuser.status = true
      _itemuser.chatgptcode = 2
      _itemuser.statuscode = 200
      _itemuser.text = text
      _datas.push(_itemuser)

      const _itemchat = await this.chatgpt(text)
      _datas.push(_itemchat)
    } catch (error: any) {}
    return _datas
  }
}

export default new ChatgptService()
