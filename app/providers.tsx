'use client'

import { ReactNode } from 'react'
import { AuthProvider } from '@/contexts/AuthContext'
import { DataProvider } from '@/contexts/DataContext'
import { ModalProvider } from '@/contexts/ModalContext'

interface ProvidersProps {
    children: ReactNode
}

export function Providers({ children }: ProvidersProps) {
    return (
        <AuthProvider>
            <DataProvider>
                <ModalProvider>
                    {children}
                </ModalProvider>
            </DataProvider>
        </AuthProvider>
    )
}
