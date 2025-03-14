import React from 'react'
import { FaSearch } from 'react-icons/fa';

interface SearchInputProps {
    value: string;
    onChange: (value: string) => void;
}

const SearchInput: React.FC<SearchInputProps> = ({ value, onChange }) => {
    return (
        <div className='relative w-full mb-4'>
            <input
                type="text"
                placeholder="Search documents"
                value={value}
                onChange={(e) => onChange(e.target.value)}
                className="w-full p-4 pl-12 bg-slate-100 rounded-lg focus:ring-1 focus:ring-[#78B3CE] focus:outline-none shadow-sm"
            />
            <div className='absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none'>
                <FaSearch className='text-slate-400' />
            </div>
        </div>
    )
}

export default SearchInput
