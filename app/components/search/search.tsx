import 'bootstrap-icons/font/bootstrap-icons.css';
interface SearchProps {
    onChange: (event: React.ChangeEvent) => void
  }

const Search: React.FC<SearchProps> = ({onChange}) =>{
    return(
        <div className='bg-white items-center flex w-3/4 md:w-1/2 h-6 md:h-12'>
            <i className="bi bi-search mr-4 md:mr-4 ml-2 md:ml-2 "></i>
            <input type="text" onChange={onChange} className='outline-none  w-3/4 md:w-1/2' placeholder="Search"/>
        </div>

    )
}

export default Search