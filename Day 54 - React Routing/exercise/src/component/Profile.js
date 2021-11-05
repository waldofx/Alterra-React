import React from "react";
import { useHistory } from "react-router";

function Profile(props) {
  console.log(props.location.state);
  const history = useHistory();

  function goHome() {
    history.goBack();
  }

  const { nama, jenisKelamin, umur, id } = props.location.state;
  return (
    <div>
      <h1>Info Pengunjung</h1>
      <p>
        Pengunjung bernama {nama}, dia seorang {jenisKelamin} berumur {umur}{" "}
        tahun
      </p>
      <p>Id user : {id}</p>
      <button onClick={goHome}>Go Home</button>
    </div>
  );
}

export default Profile;































// import React from 'react'


// function Profile ({item, hapusPengunjung}) {

//     return(
//         <div>
//             <div className='header'>
//                 <h1>Info Pengunjung</h1>
//                 <p>Pengunjung bernama {nama}, dia seorang {jenisKelamin} yang berumur {umur} dengan nomor {nomor}</p>
//                 <p>Id user : {id}</p>
//                 <button>Go Home</button>
//             </div>
//         </div>
//     )
// }
// export default Profile;