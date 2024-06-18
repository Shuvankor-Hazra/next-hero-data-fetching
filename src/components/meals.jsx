'use client'
import Image from 'next/image';
import React, { useEffect, useState } from 'react';

const Meals = () => {
    const [search, setSearch] = useState('a');
    const [error, setError] = useState('');
    const [meals, setMeals] = useState([]);

    const loadData = async () => {
        try {
            const res = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?f=${search}`)
            const data = await res.json();
            setMeals(data?.meals);
            setError('')
        } catch (error) {
            setError('No data found')
        }
    }

    const handler = (e) => {
        setSearch(e.target.value)
    }

    useEffect(() => {
        loadData();
    }, []);

    return (
        <div className="mt-10">
            <input onChange={handler} type="text" placeholder="Search meals..." className="p-4 outline-none border-2 border-red-300 text-slate-900" />
            <button onClick={() => loadData()} className="bg-red-300 p-4 border-2 border-red-300">Search</button>
            <div className='mt-10 grid grid-cols-3 gap-12'>
                {
                    meals?.length > 0 && !error && meals?.map((meal) => (
                        <div key={meal?.idMeal} className='border-2 p-4'>
                            <Image src={meal?.strMealThumb} alt={meal?.strMeal} width={500} height={500}/>
                            <h6>{meal.strMeal}</h6>
                            <p>{meal.strInstructions}</p>
                        </div>
                    ))
                }
                {
                    error && <h6>No Data Found....</h6>
                }

            </div>
        </div>
    );
}

export default Meals;
