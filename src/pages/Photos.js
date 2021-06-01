import React, { useContext } from 'react';
import Image from "../components/Image";
import { getClass } from "../utils";
import { Context } from "../Context";

export default function Photos() {
    const { allPhotos } = useContext(Context)
    return (
        <main className="photos">
            {
                allPhotos.map((img, i) => (
                    <Image key={img.id} img={img} className={getClass(i)} />
                ))
            }
        </main>
    );
}
