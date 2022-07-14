import React from 'react'

const Header = () => {
  return (
    <header className='bg-gray-900 h-10 font-bold flex items-center justify-center p-3'>
        <nav>
            <ul>
                <li className='px-4 py-2 bg-white rounded shadow-lg hover:bg-gray-100'>
                    <a href='/document'>Retention</a>
                </li>
            </ul>
        </nav>
    </header>
  )
}

export default Header