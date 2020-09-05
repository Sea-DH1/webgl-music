import { MessageBox } from 'element-ui'

export default function messageBox(Vnode) {
  return MessageBox.confirm(Vnode.node, Vnode.title, {
    cancelButtonText: '取消',
    confirmButtonText: '确定',
    cancelButtonClass: 'messageBoxCancel',
    confirmButtonClass: 'messageBoxConfirm',
    center: true,
    dangerouslyUseHTMLString: true,
    roundButton: true
  })
}
