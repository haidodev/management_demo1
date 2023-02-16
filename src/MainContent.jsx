import { Table } from "./Table"
import { FilterButton } from "./Filter"
import { FilterButton2 } from "./Filter2"
import { SearchBar } from "./SearchBar"
import { useState } from "react"
export const MainContent = () => {
    const [inputField, setInputField] = useState('');
    const handleInputChange = ({ target }) => {
        setInputField(target.value);
    }
    return (
        <div className="p-4 sm:ml-64">
            <div className="overflow-x-auto p-4 border-2 border-gray-200 border-dashed rounded-lg dark:border-gray-700 mt-14">
                <div class="flex items-center justify-between pb-4">
                    

                    <FilterButton2 />
                    <SearchBar input={inputField} handleInputChange={handleInputChange}/>
                </div>

                <Table dataType="order" searchValue={inputField}/>
            </div>
        </div>
    )
}