"use client";
import { useState, useRef, useEffect } from "react"
import { Search } from "lucide-react"
import Form from 'next/form'

function SearchBar() {
    
    const [isExpanded, setIsExpanded] = useState(false)
    const inputRef = useRef<HTMLInputElement>(null)
    const containerRef = useRef<HTMLDivElement>(null)
    


    const toggleSearchBar = () => {
        setIsExpanded(!isExpanded)
    }

    useEffect(() => {
        if (isExpanded && inputRef.current) {
            setTimeout(() => {
                inputRef.current?.focus()
            }, 100)
        }
    }, [isExpanded])

    useEffect(() => {
        const handleEscape = (e: KeyboardEvent) => {
            if (e.key === 'Escape' && isExpanded) {
                setIsExpanded(false)
            }
        }
        
        document.addEventListener('keydown', handleEscape)
        return () => document.removeEventListener('keydown', handleEscape)
    }, [isExpanded])

    useEffect(() => {
        const handleClickOutside = (e: MouseEvent) => {
            if (isExpanded && containerRef.current && !containerRef.current.contains(e.target as Node)) {
                setIsExpanded(false)
            }
        }
        
        document.addEventListener('mousedown', handleClickOutside)
        return () => document.removeEventListener('mousedown', handleClickOutside)
    }, [isExpanded])

    return (
        <div 
            ref={containerRef}
            className="relative flex items-center justify-end -translate-x-4"
        >
            <div className={`relative flex items-center -translate-x-5 ${isExpanded ? 'w-full sm:w-64 md:w-80' : 'w-10'} h-10 transition-all duration-300 ease-in-out`}>
                {!isExpanded ? (
                    <button
                        type="button"
                        onClick={toggleSearchBar}
                        className="flex items-center justify-center w-10 h-10 rounded-full bg-[#d9d9d9] transition-all duration-300 ease-in-out"
                        aria-label="Open search"
                    >
                        <Search className="text-black w-5 h-5" />
                    </button>
                ) : (
                    <Form action={"/search"} className="relative flex items-center w-full">
                        <input 
                            ref={inputRef}
                            type="text"
                            name="q"
                            placeholder="Search events..."
                            className="h-10 py-3 px-4 pl-10 bg-[#d9d9d9] rounded-full border shadow-sm focus:outline-none focus:ring-2 focus:ring-[#4056f4] focus:border-transparent w-full transition-all duration-300 ease-in-out"
                        />
                        <button
                            type="button"
                            onClick={toggleSearchBar}
                            className="absolute left-3 top-1/2 -translate-y-1/2 z-10"
                            aria-label="Close search"
                        >
                            <Search className="text-black w-5 h-5" />
                        </button>
                    </Form>
                )}
            </div>
        </div>
    )
}

export default SearchBar