import { BoardofGoverners } from "../../dummydata";

const Boardofgoverners = () => {
  return (
    <div className="mx-auto" style={{ width: "90%" }}><div className='items' >
      {BoardofGoverners.map((val) => {
        return (
          <div className='item flexSB'>
            <table>
              <th><td style={{ padding: "0.8rem" }}>{val.id}</td></th>
              <td style={{ padding: "0.8rem" }}>
                <div className='img'>
                  <img src={val.coverimg} alt='' />
                </div>
              </td>
              <td style={{ padding: "0.8rem" }}> <h2>{val.name}</h2> </td>
              <td style={{ padding: "0.8rem" }}>  <p><h6>{val.designation}</h6></p> </td>
              <td style={{ padding: "0.8rem" }}>  <p><h6>{val.address}</h6></p> </td>
            </table>
          </div>
        )
      })}
    </div></div>
  )
}

export default Boardofgoverners