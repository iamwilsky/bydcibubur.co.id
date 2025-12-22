'use client'

import { useEffect } from 'react'
import { useData } from '@/contexts/DataContext'

export function VisitorTracker() {
    const { trackVisitor } = useData()

    useEffect(() => {
        trackVisitor()
    }, [])

    return null
}
