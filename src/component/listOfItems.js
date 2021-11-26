import React from 'react'
import FlipMove from 'react-flip-move'

export default function ListOfItems(props) {
  const items = props.items

  // const itemList = items.map((item) => {
  //   return (
  //     <div className="list" key={item.key}>

  //       <p>
  //         <input
  //         className="check"
  //         type="checkbox"
  //          />
  //         <input
  //           type="text"
  //           value={item.text}
  //           onChange={(e) => props.changeValue(e.target.value, item.key)}
  //         />
  //         <span onClick={() => props.deleteItem(item.key)}>
  //         [X]</span>
  //       </p>
  //     </div>
  //   )
  // })
  return (
    <div>
      <FlipMove duration={700} easing="ease-in-out">
        {items.length ? (
          items.map((item) => {
            return (
              <div className="list" key={item.key}>
                <p>
                  <input 
                  type="checkbox" 
                  />
                  <input
                    type="text"
                    value={item.text}
                    onChange={(e) =>
                      props.changeValue(e.target.value, item.key)
                    }
                  />
                  <span onClick={() => props.deleteItem(item.key)}>[X]</span>
                </p>
              </div>
            )
          })
        ) : (
          <div className="no-todos">
            <h3>no todos</h3>
          </div>
        )}
      </FlipMove>
    </div>
    //  {/* <FlipMove duration={700} easing="ease-in-out"> */}
    //   {/* {itemList} */}
    // {/* </FlipMove>  */}
  )
}
