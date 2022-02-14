

export function printList(list){
  let listItems = []; 

  for(let i = 0; i<list.length; i++){
    listItems.push(
      <li className="float-left inline-block">{list[i]},&nbsp;</li>
    );
  }

  return (
    <ul className="">
      {listItems}
    </ul>
  )
}