import data from '../data.json'

export default function Home() {
  return (
    <main className="w-screen">
      <table className='border-collapse border text-center'>
        <thead>
          <tr className='border bg-slate-800'>
            <th className='p-3'>ID</th>
            <th className='p-3'>First Name</th>
            <th className='p-3'>Last Name</th>
            <th className='p-3'>Service</th>
            <th className='p-3'>Date</th>
            <th className='p-3'>Time</th>
            <th className='p-3'>Status</th>
          </tr>
        </thead>
        <tbody>
          {
            data.map(item => {
              return(
                <tr key={item.id} className='border hover:bg-slate-800'>
                  <td className='p-1'>{item.id}</td>
                  <td className='p-1'>{item.firstName}</td>
                  <td className='p-1'>{item.lastName}</td>
                  <td className='p-1'>{item.serviceId}</td>
                  <td className='p-1'>{item.date}</td>
                  <td className='p-1'>{item.dateTime}</td>
                  <td className='p-1'>{item.status}</td>
                </tr>
              )
            })
          }
        </tbody>  
      </table>
    </main>
  )
}
