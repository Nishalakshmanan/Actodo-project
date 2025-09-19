import ListItem from "./ListItem";
function TodoList(props) {
  const listitem = props.listitem
  const setlistitem=props.setlistitem
  return (
    <div className="bg-[#BDB4EA] rounded-md p-3 flex-grow">
      <h1 className="text-2xl font-medium">Today's Activity</h1>
      {listitem.length?
      (
        listitem.map((item, i) => {
        return <ListItem index={i} id={item.id} activity={item.activity} listitem={listitem} setlistitem={setlistitem}></ListItem>
      })
      ):(<p>You haven't added anything yet</p>)}
    </div>
  );
}
export default TodoList;
