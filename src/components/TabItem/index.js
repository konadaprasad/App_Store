import './index.css'

const TabItem = props => {
  const {tabDetails, clickTabItem, isActive} = props
  const {tabId, displayText} = tabDetails
  console.log(isActive)
  const onClickTabItem = () => {
    clickTabItem(tabId)
  }
  const activeTabBtnClassName = isActive ? 'active-tab-btn' : ''
  console.log(activeTabBtnClassName)

  return (
    <li className="tab-item ">
      <button
        type="button"
        className={`tab-btn ${activeTabBtnClassName}`}
        onClick={onClickTabItem}
      >
        {displayText}
      </button>
    </li>
  )
}

export default TabItem
