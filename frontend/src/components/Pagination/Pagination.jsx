import propTypes from 'prop-types';
const Pagination = ({totalUsers, usersPerPage, setCurrentPage}) => {
    Pagination.propTypes = {
        totalUsers: propTypes.number.isRequired,
        usersPerPage: propTypes.number.isRequired,
        setCurrentPage: propTypes.func.isRequired
    }
    let pages = [];
    for (let i = 1; i <= Math.ceil(totalUsers/usersPerPage); i++) {
        pages.push(i);
    }
  return (
    <div className="flex flex-wrap justify-center mt-1 fixed left-0 right-0 bottom-8">{
        pages.map((page, index) => (
            <button 
                key={index} 
                className="w-10 h-10 font-semibold text-xs my-0 mx-1 cursor-pointer bg-transparent rounded border-black border-2 hover:bg-slate-300"
                onClick={() => setCurrentPage(page)}
            >{page}</button>
        ))
    }</div>
  )
}

export default Pagination