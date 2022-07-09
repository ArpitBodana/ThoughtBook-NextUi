import React from 'react'
import Notificationbar from './Notificationbar'

function AlreadyLogin({sign}) {

  return (
    <div className='h-screen bg-rose-100 text-zinc-800'>
      {sign&&<Notificationbar msg={"Already Login Please Logout to use these option"} alert={'success'} />}
      {!sign &&<Notificationbar msg={"Login Done!!"} alert={'success'} />}
      
    </div>
  )
}

export default AlreadyLogin