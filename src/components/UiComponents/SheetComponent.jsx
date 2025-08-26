import React from 'react'
import {
    Sheet,
    SheetClose,
    SheetContent,
    SheetDescription,
    SheetFooter,
    SheetHeader,
    SheetTitle,
    SheetTrigger
} from '../ui/sheet'
import { Button } from '../ui/button'
import { Label } from '../ui/label'
import { Input } from '../ui/input'

const SheetComponent = ({ item, isOpen, setIsOpen }) => {
    const {
        sheetTrigger,
        SheetTitle: sheetTitle,
        sheetDescription,
        sheetContent,
        sheetFooter,
        sheetClose
    } = item

    return (
        <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
                {sheetTrigger}
            </SheetTrigger>
            <SheetContent>
                <SheetHeader>
                    <SheetTitle>{sheetTitle}</SheetTitle>
                    <SheetDescription>{sheetDescription}</SheetDescription>
                </SheetHeader>

                {sheetContent}

                <SheetFooter>
                    {sheetFooter}
                    <SheetClose asChild>
                        {sheetClose}
                    </SheetClose>
                </SheetFooter>
            </SheetContent>
        </Sheet>
    )
}

export default SheetComponent


export const sheetComponentCode = `
import React from 'react'
import {
    Sheet,
    SheetClose,
    SheetContent,
    SheetDescription,
    SheetFooter,
    SheetHeader,
    SheetTitle,
    SheetTrigger
} from '../ui/sheet'
import { Button } from '../ui/button'
import { Label } from '../ui/label'
import { Input } from '../ui/input'

const SheetComponent = ({ item, isOpen, setIsOpen }) => {
    const {
        sheetTrigger,
        SheetTitle: sheetTitle,
        sheetDescription,
        sheetContent,
        sheetFooter,
        sheetClose
    } = item

    return (
        <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
                {sheetTrigger}
            </SheetTrigger>
            <SheetContent>
                <SheetHeader>
                    <SheetTitle>{sheetTitle}</SheetTitle>
                    <SheetDescription>{sheetDescription}</SheetDescription>
                </SheetHeader>

                {sheetContent}

                <SheetFooter>
                    {sheetFooter}
                    <SheetClose asChild>
                        {sheetClose}
                    </SheetClose>
                </SheetFooter>
            </SheetContent>
        </Sheet>
    )
}

export default SheetComponent
`


export const sheetComponentCall = `

export const SheetDemo=()=>{
    


    return (
    <>
     <SheetComponent
              item={sheetItem}
              isOpen={isOpen}
              setIsOpen={setIsOpen}
                    />
    </>
    )
    }
`