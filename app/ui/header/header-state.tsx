'use client'

import { dropNavigation, navigation } from "@/app/lib/data";
import { useState } from "react"

export default function HeaderState() {
    const [items, setItemStates] = useState(navigation.concat(dropNavigation));
    
}