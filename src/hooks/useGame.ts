import { useCallback, useMemo, useRef, useState } from 'react'

export type Award = 'none' | 'bronze' | 'silver' | 'gold'

/**
 * Логика игры вынесена в хук — UI (PixiJS-слой) лишь вызывает методы этого хука.
 * Так проще тестировать и переиспользовать.
 */
export function useGame(totalCrystals = 15) {
    const [collected, setCollected] = useState(0)
    const [award, setAward] = useState<Award>('none')
    const grantedRef = useRef<Set<Award>>(new Set()) // чтобы не показывать награду повторно

    const thresholds: Record<Award, number> = useMemo(
        () => ({
            none: 0,
            bronze: 5,
            silver: 10,
            gold: 15
        }),
        []
    )

    const onCrystalPick = useCallback(() => {
        setCollected((prev) => {
            const next = prev + 1

            // Выдать награду, если перешагнули порог и ещё не выдавали
            if (next >= thresholds.gold && !grantedRef.current.has('gold')) {
                setAward('gold')
                grantedRef.current.add('gold')
            } else if (next >= thresholds.silver && !grantedRef.current.has('silver')) {
                setAward('silver')
                grantedRef.current.add('silver')
            } else if (next >= thresholds.bronze && !grantedRef.current.has('bronze')) {
                setAward('bronze')
                grantedRef.current.add('bronze')
            }

            return next
        })
    }, [thresholds])

    const reset = useCallback(() => {
        setCollected(0)
        setAward('none')
        grantedRef.current.clear()
    }, [])

    const remaining = useMemo(() => Math.max(totalCrystals - collected, 0), [totalCrystals, collected])

    return {
        collected,
        remaining,
        award,
        onCrystalPick,
        reset,
        thresholds
    }
}
