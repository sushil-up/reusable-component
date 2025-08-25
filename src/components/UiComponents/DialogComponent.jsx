import React from "react";
import {
    Dialog,
    DialogClose,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "../ui/dialog";

const DialogComponent = ({ item, isOpen, setIsOpen }) => {
    return (
        <Dialog open={isOpen} onOpenChange={setIsOpen}>
            {/* Dialog Trigger */}
            <DialogTrigger asChild>{item?.dialogTrigger}</DialogTrigger>

            {/* Dialog Content */}
            <DialogContent className="sm:max-w-[425px]">
                <DialogHeader>
                    <DialogTitle>{item.dialogTitle}</DialogTitle>
                    <DialogDescription>{item.dialogDescription}</DialogDescription>
                </DialogHeader>

                <div className="grid gap-4">
                    {/* Form Content */}
                    {item.content}
                </div>

                <DialogFooter>
                    {/* Close and Save Buttons */}
                    <DialogClose asChild>{item?.dialogClose}</DialogClose>
                    {item.dialogFooter}
                </DialogFooter>
            </DialogContent>
        </Dialog>
    );
};

export default DialogComponent;

export const dialogCode = `
import React from 'react';
import { Dialog, DialogClose, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from '../ui/dialog';


const DialogComponent = ({ item, isOpen, setIsOpen }) => {

    return (
        <Dialog open={isOpen} onOpenChange={setIsOpen}>
            <DialogTrigger asChild>
                {item?.dialogTrigger}
            </DialogTrigger>

            <DialogContent className="sm:max-w-[425px]">
                <DialogHeader>
                    <DialogTitle>{item.dialogTitle}</DialogTitle>
                    <DialogDescription>{item.dialogDescription}</DialogDescription>
                </DialogHeader>

                <div className="grid gap-4">
                    {item.content}
                </div>

                <DialogFooter>
                    <DialogClose asChild>
                        {item?.dialogClose}
                    </DialogClose>
                    {item.dialogFooter}
                </DialogFooter>
            </DialogContent>
        </Dialog>
    );
};

export default DialogComponent;`;

export const dialogComponentCall = `
import DialogComponent from '@/components/UiComponents/DialogComponent'
import { Button } from '../ui/button';
import { Label } from '../ui/label';
import { Input } from '../ui/input';
export const Dialog = () => {
       const dialogItem = {
        dialogTrigger: (
            <>
                <Button variant="outline" onClick={() => setIsOpen(!isOpen)}>
                    Open Dialog
                </Button>{" "}
            </>
        ),
        dialogTitle: "Edit profile",
        dialogDescription:
            " Make changes to your profile here. Click save when you&apos;redone.",
        content: (
            <>
                <div className="grid gap-4">
                    <div className="grid gap-3">
                        <Label htmlFor="name-1">Name</Label>
                        <Input id="name-1" name="name" defaultValue="Pedro Duarte" />
                    </div>
                    <div className="grid gap-3">
                        <Label htmlFor="username-1">Username</Label>
                        <Input id="username-1" name="username" defaultValue="@peduarte" />
                    </div>
                </div>
            </>
        ),
        dialogClose: (
            <>
                {" "}
                <Button variant="outline" onClick={() => setIsOpen(!isOpen)}>
                    Cancel
                </Button>
            </>
        ),
        dialogFooter: (
            <>
                <Button type="submit" onClick={() => setIsOpen(!isOpen)}>
                    Save changes
                </Button>
            </>
        ),
    };
    return (
        <>
            <DialogComponent item={dialogItem} isOpen={isOpen} setIsOpen={setIsOpen} />

        </>
    )
}

`;
