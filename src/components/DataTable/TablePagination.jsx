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
        <PaginationItem key={`dots-${index}`}>
          <span className='px-2 text-gray-500'>...</span>
        </PaginationItem>
      ) : (
        <PaginationItem key={item}>
          <PaginationLink
            className={`!rounded-[52px] bg-[#fffce9] text-black ${
              item === page ? 'bg-red text-white' : ''
            }`}
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
            className={`!rounded-[52px] bg-[#b82025] text-white border-gray-300 ${
              page === 1 ? 'pointer-events-none opacity-50 cursor-not-allowed' : ''
            }`}
          />
        </PaginationItem>

        {/* Page Numbers */}
        {renderPages()}

        {/* Next Button */}
        <PaginationItem>
          <PaginationNext
            onClick={page < totalPages ? () => setPage(page + 1) : undefined}
            className={`!rounded-[52px] bg-[#b82025] text-white border-gray-300 ${
              page === totalPages ? 'pointer-events-none opacity-50 cursor-not-allowed': ''
            }`}
          />
        </PaginationItem>

      </PaginationContent>
    </Pagination>
  )
}
