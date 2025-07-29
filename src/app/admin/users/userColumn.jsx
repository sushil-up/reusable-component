'use client'

import { Button } from '@/components/ui/button'
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger
} from '@/components/ui/dropdown-menu'
import { Edit, EllipsisVertical, Eye, Send, Trash2 } from 'lucide-react'

export const UserColumn = (
    handleDeleteUser,
) => [
        {
            accessorKey: 'action',
            header: '',
            cell: ({ row }) => {
                return (
                    <div className='grid grid-cols-3 w-5'>
                        <DropdownMenu>
                            <DropdownMenuTrigger asChild>
                                <Button variant='ghost' className='h-8 w-8 p-0'>
                                    <EllipsisVertical className='h-5 w-5' />
                                </Button>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent align='end'>

                                <DropdownMenuItem
                                    onClick={() => handleDeleteUser(row)}
                                    className='cursor-pointer text-red-600'
                                >
                                    <Trash2 className='mr-2 h-4 w-4' />
                                    Delete
                                </DropdownMenuItem>

                            </DropdownMenuContent>
                        </DropdownMenu>
                    </div>
                )
            }
        },
        {
            accessorKey: 'id',
            header: '#ID',
            size: 80,
            cell: ({ row }) => (
                <div className='w-[60px] truncate'>{`DEV-${row.original?.id}`}</div>
            )
        },

        {
            accessorKey: 'name',
            header: () => (
                <>
                    Contact Information
                </>
            ),
            cell: ({ row }) => (
                <>
                    <span>
                        {`${row.original?.firstName} - ${row.original?.email} - ${row.original?.phone}`}
                    </span>
                </>
            )
        },

        {
            accessorKey: 'address',
            header: 'Address',
            cell: ({ row }) => row.original?.address?.address
        },
        {
            accessorKey: 'role',
            header: 'Role',
            cell: ({ row }) => row.original?.role
        },
        {
            accessorKey: 'university',
            header: 'University',
            cell: ({ row }) => row.original?.university
        },

        {
            accessorKey: 'phone',
            header: 'Phone',
            cell: ({ row }) => row.original?.phone
        },
        {
            accessorKey: 'username',
            header: 'Username',
            cell: ({ row }) => row.original?.username
        },
        {
            accessorKey: 'ssn',
            header: 'SSN',
            cell: ({ row }) => row.original?.ssn
        }
    ]
