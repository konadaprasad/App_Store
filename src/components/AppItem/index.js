import './index.css'

const AppItem = props => {
  const {appDetails} = props
  const {appName, imageUrl} = appDetails

  return (
    <li className="list-item1">
      <img src={imageUrl} alt={appName} className="image" />
      <p className="para">{appName}</p>
    </li>
  )
}
export default AppItem
