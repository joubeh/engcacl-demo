import React, {useState, useEffect} from "react";
import cylinder from './cylinder.jpg'

const heightUnits = [
  {name: "mm", multiplier: 0.001},
  {name: "cm", multiplier: 0.01},
  {name: "m", multiplier: 1},
  {name: "km", multiplier: 1000}
]

const radiusUnits = [
  {name: "mm", multiplier: 0.001},
  {name: "cm", multiplier: 0.01},
  {name: "m", multiplier: 1},
  {name: "km", multiplier: 1000}
]

const volumeUnits = [
  {name: "mm^3", multiplier: 1000000000},
  {name: "cm^3", multiplier: 1000000},
  {name: "m^3", multiplier: 1},
  {name: "km^3", multiplier: 0.000000001}
]

const inputCSS = "bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 py-1 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
const selectCSS = "bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 py-1 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"

function Calc({setPage}) {
  const [height, setHeight] = useState(0)
  const [radius, setRadius] = useState(0)
  const [volume, setVolume] = useState(0)

  const [heightUnit, setHeightUnit] = useState(heightUnits[2].multiplier)
  const [radiusUnit, setRadiusUnit] = useState(radiusUnits[2].multiplier)
  const [volumeUnit, setVolumeUnit] = useState(volumeUnits[2].multiplier)

  useEffect(() => {
    setVolume((height * heightUnit) * (radius * radiusUnit) * (radius * radiusUnit) * Math.PI * volumeUnit)
  }, [height, radius, heightUnit, radiusUnit, volumeUnit])

  return (
    <div>
        <div className="p-3 flex gap-2 max-w-lg mx-auto">
            <button onClick={e => setPage('home')} className="bg-teal-500 text-white p-2.5 py-1 rounded shadow">&#x1F3E0;</button>
            <input placeholder="Search" type="text" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 w-full dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
        </div>
      <div className="w-max mx-auto mt-3 text-xl md:text-4xl">Cylinder Volume Calculator</div>
      <div className="w-max mx-auto flex gap-3 justify-center items-center mt-7">
        <div className="text-md md:text-xl">Volume</div>
        <div className="text-md md:text-xl bg-teal-500 text-white p-2.5 py-1 rounded shadow-md"><code>{volume}</code></div>
        <div>
          <select className={selectCSS} value={volumeUnit} onChange={e => setVolumeUnit(Number(e.target.value))}>
            {
              volumeUnits.map(u => {
                return(
                  <option key={u.name} value={u.multiplier}>{u.name}</option>
                )
              })
            }
          </select>
        </div>
      </div>
      <div className="w-max mx-auto flex gap-2 justify-center items-center mt-3">
        <div className="text-md md:text-xl">Height</div>
        <div>
          <input className={inputCSS} type="number" step="any" value={height} onChange={e => setHeight(Number(e.target.value))} />
        </div>
        <div>
          <select className={selectCSS} value={heightUnit} onChange={e => setHeightUnit(Number(e.target.value))}>
            {
              heightUnits.map(u => {
                return(
                  <option key={u.name} value={u.multiplier}>{u.name}</option>
                )
              })
            }
          </select>
        </div>
      </div>
      <div className="w-max mx-auto flex gap-2 justify-center items-center mt-3">
        <div className="text-md md:text-xl">Radius</div>
        <div>
          <input className={inputCSS} type="number" step="any" value={radius} onChange={e => setRadius(Number(e.target.value))} />
        </div>
        <div>
          <select className={selectCSS} value={radiusUnit} onChange={e => setRadiusUnit(Number(e.target.value))}>
            {
              radiusUnits.map(u => {
                return(
                  <option key={u.name} value={u.multiplier}>{u.name}</option>
                )
              })
            }
          </select>
        </div>
      </div>
      <div className="w-max mx-auto mt-3">
        <div className="text-md md:text-xl bg-teal-500 text-white p-2.5 py-1 rounded shadow-md"><code>Volume = Height x Radius^2 x &#x03C0;</code></div>
      </div>
      <div className="w-max mx-auto mt-3">
        <img src={cylinder} alt="cylinder"/>
      </div>
      <div className="max-w-sm mx-auto mt-3 rounded border-2 border-gray-400 p-3">
        <div className="text-lg md:text-xl font-semibold">How to calculate volume of a cylinder?</div>
        <div className="mt-2">Let's start from the beginning – what is a cylinder? It's a solid bounded by a cylindrical surface and two parallel planes. We can imagine it as a solid physical tin having lids on top and bottom. To calculate its volume, we need to know two parameters – the radius (or diameter) and height:</div>
        <div className="mt-2 text-md md:text-xl bg-teal-500 text-white p-2.5 py-1 rounded shadow-md"><code>cylinder volume = π × cylinder radius² × cylinder height</code></div>
      </div>
    </div>
  );
}

export default Calc;
