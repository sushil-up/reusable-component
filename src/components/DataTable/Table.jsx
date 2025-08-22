'use client'

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow
} from '@/components/ui/table'
import {
  flexRender,
  getCoreRowModel,
  useReactTable
} from '@tanstack/react-table'
import { TablePagination } from './TablePagination'

export function TableList({
  columns,
  data,
  totalRecord,
  page,
  loading,
  setPage,
  length,
  type
}) {
  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel()
  })
  return (
    <>
      <div className='rounded-6 border-color-grey custom-tabels border bg-red text-white'>
        <Table>
          <TableHeader>
            { table?.getHeaderGroups().map(headerGroup => (
              <TableRow key={headerGroup?.id}>
                {headerGroup?.headers.map(header => (
                  <TableHead
                    key={header?.id}
                    className='border-color-grey text-dark-color px-3 py-4 text-sm'
                  >
                    {header?.isPlaceholder
                      ? null
                      : flexRender(
                          header?.column?.columnDef?.header,
                          header?.getContext()
                        )}
                  </TableHead>
                ))}
              </TableRow>
            ))}
          </TableHeader>

          <TableBody className='bg-white text-black'>
            {loading ? (
              <TableRow>
                <TableCell
                  colSpan={columns?.length + 1}
                  className='h-16 px-2 py-3 text-center'
                >
                </TableCell>
              </TableRow>
            ) : data?.length === 0 ? (
              <TableRow>
                <TableCell
                  colSpan={columns?.length + 1}
                  className='h-24 px-2 py-3 text-center text-gray-500'
                >
                  No result found
                </TableCell>
              </TableRow>
            ) : (
              table?.getRowModel()?.rows?.map(row => (
                <TableRow
                  key={row?.id}
                  data-state={row?.getIsSelected() && 'selected'}
                >
                  {row?.getVisibleCells()?.map(cell => (
                    <TableCell
                      key={cell?.id}
                      className='border-color-grey border-b px-2 py-3'
                    >
                      {flexRender(
                        cell?.column?.columnDef?.cell,
                        cell?.getContext()
                      )}
                    </TableCell>
                  ))}
                </TableRow>
              ))
            )}
          </TableBody>
        </Table>
      </div>
      {totalRecord > 10 ? (
        <TablePagination
          totalRecord={totalRecord}
          page={page}
          setPage={setPage}
          length={length}
          type={type}
        />
      ) : (
        ''
      )}
    </>
  )
}



export const TableCode = `
'use client'

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow
} from '@/components/ui/table'
import {
  flexRender,
  getCoreRowModel,
  useReactTable
} from '@tanstack/react-table'
import { TablePagination } from './TablePagination'

export function TableList({
  columns,
  data,
  totalRecord,
  page,
  loading,
  setPage,
  length,
  type
}) {
  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel()
  })
  return (
    <>
      <div className='rounded-6 border-color-grey custom-tabels border bg-red text-white'>
        <Table>
          <TableHeader>
            { table?.getHeaderGroups().map(headerGroup => (
              <TableRow key={headerGroup?.id}>
                {headerGroup?.headers.map(header => (
                  <TableHead
                    key={header?.id}
                    className='border-color-grey text-dark-color px-3 py-4 text-sm'
                  >
                    {header?.isPlaceholder
                      ? null
                      : flexRender(
                          header?.column?.columnDef?.header,
                          header?.getContext()
                        )}
                  </TableHead>
                ))}
              </TableRow>
            ))}
          </TableHeader>

          <TableBody className='bg-white text-black'>
            {loading ? (
              <TableRow>
                <TableCell
                  colSpan={columns?.length + 1}
                  className='h-16 px-2 py-3 text-center'
                >
                </TableCell>
              </TableRow>
            ) : data?.length === 0 ? (
              <TableRow>
                <TableCell
                  colSpan={columns?.length + 1}
                  className='h-24 px-2 py-3 text-center text-gray-500'
                >
                  No result found
                </TableCell>
              </TableRow>
            ) : (
              table?.getRowModel()?.rows?.map(row => (
                <TableRow
                  key={row?.id}
                  data-state={row?.getIsSelected() && 'selected'}
                >
                  {row?.getVisibleCells()?.map(cell => (
                    <TableCell
                      key={cell?.id}
                      className='border-color-grey border-b px-2 py-3'
                    >
                      {flexRender(
                        cell?.column?.columnDef?.cell,
                        cell?.getContext()
                      )}
                    </TableCell>
                  ))}
                </TableRow>
              ))
            )}
          </TableBody>
        </Table>
      </div>
      {totalRecord > 10 ? (
        <TablePagination
          totalRecord={totalRecord}
          page={page}
          setPage={setPage}
          length={length}
          type={type}
        />
      ) : (
        ''
      )}
    </>
  )
}

// Column Call
"use client";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Edit,
  EditIcon,
  EllipsisVertical,
  Eye,
  Send,
  Trash2,
} from "lucide-react";

export const UserColumn = (handleDeleteUser,handleEditUser) => [

  {
    accessorKey: "id",
    header: "#ID",
    size: 80,
    cell: ({ row }) => (
      <div className="w-[60px] truncate">{/DEV-$row.original?.id}}</div>
    ),
  },

  {
    accessorKey: "name",
    header: () => <>Contact Information</>,
    cell: ({ row }) => (
      <>
        <span>
          {/'$row.original?.firstName} - $row.original?.email} - $row.original?.phone}'\}
        </span>
      </>
    ),
  },

  {
    accessorKey: "address",
    header: "Address",
    cell: ({ row }) => row.original?.address?.address,
  },
  {
    accessorKey: "role",
    header: "Role",
    cell: ({ row }) => row.original?.role,
  },
  {
    accessorKey: "university",
    header: "University",
    cell: ({ row }) => row.original?.university,
  },

  {
    accessorKey: "phone",
    header: "Phone",
    cell: ({ row }) => row.original?.phone,
  },
  {
    accessorKey: "username",
    header: "Username",
    cell: ({ row }) => row.original?.username,
  },
  {
    accessorKey: "ssn",
    header: "SSN",
    cell: ({ row }) => row.original?.ssn,
  },
  {
    accessorKey: "action",
    header: "Action",
    cell: ({ row }) => {
      return (
        <div className="grid grid-cols-3 w-5">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" className="h-8 w-8 p-0">
                <EllipsisVertical className="h-5 w-5" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuItem
                onClick={() => handleDeleteUser(row)}
                className="cursor-pointer text-red-600"
              >
                <Trash2 className="mr-2 h-4 w-4" />
                Delete
              </DropdownMenuItem>
              <DropdownMenuItem
                onClick={() => handleEditUser(row)}
                className="cursor-pointer text-green-600"
              >
                <EditIcon className="mr-2 h-4 w-4" />
                Edit
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      );
    },
  }
];


// Table Pagination
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious
} from '@/components/ui/pagination'


export const TablePagination = ({
  totalRecord,
  page,
  setPage,
  length,
}) => {
  const totalPages = Math.ceil(totalRecord / length) || 1

  const renderPages = () => {
    const pages = []

    if (totalPages <= 10) {
      for (let i = 1; i <= totalPages; i++) {
        pages.push(i)
      }
    } else {
      pages.push(1)

      if (page > 4) pages.push('dots')

      const start = Math.max(2, page - 2)
      const end = Math.min(totalPages - 1, page + 2)

      for (let i = start; i <= end; i++) {
        pages.push(i)
      }

      if (page < totalPages - 3) pages.push('dots')

      pages.push(totalPages)
    }

    return pages.map((item, index) =>
      item === 'dots' ? (
        <PaginationItem key={\`dots-$index}\`}>
          <span className='px-2 text-gray-500'>...</span>
        </PaginationItem>
      ) : (
        <PaginationItem key={item}>
          <PaginationLink
            className={\`!rounded-[52px] bg-[#fffce9] text-black \${item === page ? 'bg-red text-white' : ''}\`}
            isActive={item === page}
            onClick={() => setPage(item)}
          >
            {item}
          </PaginationLink>
        </PaginationItem>
      )
    )
  }

  return (
    <Pagination className='flex justify-end mt-5'>
      <PaginationContent className='cursor-pointer gap-2'>

        {/* Previous Button */}
        <PaginationItem>
          <PaginationPrevious
            onClick={page > 1 ? () => setPage(page - 1) : undefined}
            className={\`!rounded-[52px] bg-[#b82025] text-white border-gray-300 \${page === 1 ? 'pointer-events-none opacity-50 cursor-not-allowed' : ''}\`}
          />
        </PaginationItem>

        {/* Page Numbers */}
        {renderPages()}

        {/* Next Button */}
        <PaginationItem>
          <PaginationNext
            onClick={page < totalPages ? () => setPage(page + 1) : undefined}
            className={\`!rounded-[52px] bg-[#b82025] text-white border-gray-300 \${page === totalPages ? 'pointer-events-none opacity-50 cursor-not-allowed': ''}\`}
          />
        </PaginationItem>

      </PaginationContent>
    </Pagination>
  )
}
`;

