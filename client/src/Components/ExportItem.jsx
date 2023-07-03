
const ExportItem = ({ children, item }) => {
  let itemsHeadline

  switch (item.type) {
    case 'forces':
      itemsHeadline = 'Forces'
      break
    default:
      itemsHeadline = 'Message Types'
  }

  return (
    <li className='flex-content-wrapper'>
      <div className='flex-content flex-content--big flex-content--first'>
        <h5>{item.title}</h5>
        <p>Selected wargame: {item.wargame}</p>
        <p>
          {itemsHeadline}: {item.data.filter(item => item.items.length > 1).map((item, key) => (<span key={key}>
            {item.title} ({item.items.length - 1})
          </span>))}
        </p>
      </div>
      <div className='flex-content flex-content--big flex-content--last'>
        {children}
      </div>
    </li>
  )
}

export default ExportItem
