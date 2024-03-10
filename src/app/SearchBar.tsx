export function SearchBar(){
  const [searchInput, setInput] = useState<string>("")
  
 
  
  return(


    <div>
      
      <details className="dropdown">
        <summary className="m-1 btn">open or close</summary>
        <ul className="p-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-52">
          <DropdownOptions />
          
    </ul>
</details>
    </div>
    )

}