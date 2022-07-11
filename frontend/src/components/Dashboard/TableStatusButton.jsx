import { Button } from '@chakra-ui/react'
import React, { useState, useEffect } from 'react'

export const TableStatusButton = ( {status_value} ) => {
    const [color, setColor] = useState('')

    useEffect(() => {

        const cell_value = status_value.props.cell.value
        if (cell_value === 'draft') {
            setColor('grey')
        } else if (cell_value === 'sent') {
            setColor('purple')
        } else if (cell_value === 'paid') {
            setColor('green')
        } else if (cell_value === 'due') {
            setColor('red')
        }
    }, [status_value])

    return (
        <Button 
            size="sm" 
            colorScheme={color}
        >
            {status_value}
        </Button>
    )
}
