import { useEffect, useRef } from "react"

export const useToggle = (opts = {}) => {
    let { initialValue = null, open = true, direction = 'Left', animation = 'fade', classHide = 'hidden' } = opts

    const classRoot = 'animate__animated'
    const classOut = 'animate__' + animation + 'Out' + direction
    const classIn = 'animate__' + animation + 'In' + direction
    const ref = useRef(initialValue)


    useEffect(() => {
        const classList = ref?.current?.classList;
        if (classList) {
            classList.add(classRoot)
            if (open) {
                displayIn(classList)
            } else {
                displayOut(classList)
            }
        }
    }, [ref.current])

    const displayIn = (classList) => {
        ref.current.open = true;
        classList.remove(classOut)
        classList.add(classIn)
        classList.remove(classHide)
    }

    const displayOut = (classList) => {
        ref.current.open = false;
        classList.remove(classIn)
        classList.add(classOut)
        setTimeout(() => {
            classList.add(classHide)
        }, 600)
    }

    const onToggle = (e) => {
        const classList = ref?.current?.classList;
        if (classList) {
            if (ref.current.open) {
                displayOut(classList)
            } else {
                displayIn(classList)
            }
        }
    }
    return [ref, onToggle]
}