export const Message = ({message}) => {
  return (
   <div>
    <h3>{message.message}</h3>
    <h5>{message.author}</h5>
    <h6>{new Date().getDate()}.0{ new Date().getMonth()}.{new Date().getFullYear()}</h6>
  </div>
  )
}