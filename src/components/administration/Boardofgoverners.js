import {BoardofGoverners} from "../../dummydata";

const Boardofgoverners = () => {
  return (
    <div><div className='items'>
    {BoardofGoverners.map((val) => {
      return (
        <div className='item flexSB'>
        <table>
        <th><td>{val.id}</td></th>
        <td>
          <div className='img'>
            <img src={val.coverimg} alt='' />
          </div>
        </td>
        <td> <h2>{val.name}</h2> </td>
        <td>  <p><h6>{val.designation}</h6></p> </td>
        <td>  <p><h6>{val.address}</h6></p> </td>
        </table>
        </div>
      )
    })}
  </div></div>
  )
}

export default Boardofgoverners