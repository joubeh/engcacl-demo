import React from "react";
import cicon from './cicon.png'
import tools from './tools.png'

function Category({setPage}) {
  return(
    <div>
        <div className="w-max mx-auto mt-5"><img src={tools} alt="calc"/></div>
        <div className="w-max mx-auto font-semibold text-xl md:text-4xl mt-1">Engineering Calculators</div>
        <div className="p-3 max-w-xl mx-auto mt-3"><input placeholder="Search" type="text" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 w-full dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" /></div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-2 mx-auto md:max-w-lg mb-2 p-2 md:p-0">
            <Card name="Engineering" image={cicon} setPage={setPage}/>
            <Card name="Engineering" image={cicon} setPage={setPage}/>
            <Card name="Engineering" image={cicon} setPage={setPage}/>
            <Card name="Engineering" image={cicon} setPage={setPage}/>
            <Card name="Engineering" image={cicon} setPage={setPage}/>
            <Card name="Engineering" image={cicon} setPage={setPage}/>
            <Card name="Engineering" image={cicon} setPage={setPage}/>
            <Card name="Engineering" image={cicon} setPage={setPage}/>
            <Card name="Engineering" image={cicon} setPage={setPage}/>
        </div>
    </div>
  )
}

function Card({name, image, setPage}){
    return(
        <div onClick={e => setPage('calc')} className="p-3 shadow-lg border-2 border-gray-300 rounded-lg cursor-pointer hover:text-white hover:bg-teal-500 transition-all">
            <div className="w-max mx-auto"><img src={image}/></div>
            <div className="w-max mx-auto mt-2 text-xl">{name}</div>
        </div>
    )
}

export default Category;
