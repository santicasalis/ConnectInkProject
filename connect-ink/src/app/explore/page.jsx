"use client"

import { useSelector, useDispatch } from "react-redux"
import { getAllArtists } from "../redux/features/artists/artistsActions"
import { useEffect } from "react"
import Card from "@/components/card/Card"

export default function ExplorePage() {

    const artists = useSelector((state) => state.artists.people)

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getAllArtists())
    }, [])

    return (
        <div className="mt-8">
            <div className="flex flex-col items-center mb-4">
                <p>Filter by:</p>
                <div className="align-center">
                    <label htmlFor="styles">Styles</label>
                    <select name="styles" className="border border-black m-1">
                        <option>Estilo 1</option>
                        <option>Estilo 2</option>
                        <option>Estilo 3</option>
                        <option>Estilo 4</option>
                        <option>Estilo 5</option>
                    </select>

                    <label htmlFor="zone">Zone</label>
                    <input type="text" name="zone" className="border border-black m-1"/>
                </div>
            </div>
            <div className="flex flex-col">
                {artists && artists.map(artist => 
                    <Card
                    key={artist.id}
                    name={artist.name}
                    location={artist.location}
                    tattoos={artist.tattoos}
                    />
                )}
            </div>
        </div>
        
    )
}