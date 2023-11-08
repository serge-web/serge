import 'src/themes/App.scss'

const MessagesListRenderProp = ({ messages, render }) => {
  return (
    <div className='message-list'>
      {render(messages)}
    </div>
  )
}

export default MessagesListRenderProp
