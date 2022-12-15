const Dashboard = ({ user }) => {
  return (
    <section className='section'>
      {/* optional chain since its initial value is null */}
      <h4>Hello, {user?.name}</h4>
    </section>
  )
}
export default Dashboard
