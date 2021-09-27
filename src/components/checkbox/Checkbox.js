import React from "react";
import './Checkbox.css'

export default function Checkbox () {
    return (
    <div>
        <div>
            <input type="checkbox" />
            <label for="scales">Снять heapdump</label>
        </div>
        <div>
            <input type="checkbox" />
            <label for="scales">Снять threaddump</label>
        </div>
    </div>
    )
}

